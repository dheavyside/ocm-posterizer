@ -1,6 +1,23 @@
import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas, loadImage } from 'canvas';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
@ -8,24 +25,12 @@ export default async function handler(req: NextApiRequest, res: NextApiResponse)
  }

  try {
    const { theme, nfts } = req.body;
    if (!theme || !nfts) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Create canvas with 1920x1200 dimensions
    const canvas = createCanvas(1920, 1200);
    const ctx = canvas.getContext('2d');

    // Load the background image (which already has texts and graphics)
    const bgImage = await loadImage(path.join(process.cwd(), 'public', 'backdrops', 'ocmonk_wuxga_1.png'));
    ctx.drawImage(bgImage, 0, 0, 1920, 1200);

    // NFT type placeholders as fallbacks
    const genesisPlaceholder = path.join(process.cwd(), 'public', 'generic_ph.png');
    const katoshiClassicPlaceholder = path.join(process.cwd(), 'public', 'erc721_sj_ph.png');
    const katoshiPrimePlaceholder = path.join(process.cwd(), 'public', 'erc721_wfnh-be_ph.png');

    // Get NFT IDs and filter out placeholder IDs (those starting with '-')
    const allNftIds = nfts.split(',');
    const validNftIds = allNftIds.filter((id: string) => !id.startsWith('-'));
@ -34,135 +39,19 @@ export default async function handler(req: NextApiRequest, res: NextApiResponse)
    
    // Early return if no valid NFTs
    if (validNftIds.length === 0) {
      const buffer = canvas.toBuffer('image/png');
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Content-Disposition', `attachment; filename="${theme}.png"`);
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Content-Length', buffer.length);
      res.status(200).send(buffer);
      return;
    }
    
    // Always use the first valid ID as the base NFT ID
    let baseNftId = validNftIds[0];
    
    // Exact format detection based on the rules:
    // Genesis: 1-9999 (no preceding zeros)
    // Classic: 10001-19999 (1 followed by 4 digits)
    // Prime: 20001-29999 (2 followed by 4 digits)
    
    // Check if this is a Katoshi ID (Classic or Prime)
    const isKatoshiClassic = /^1\d{4}$/.test(baseNftId); // Format: 10001-19999
    const isKatoshiPrime = /^2\d{4}$/.test(baseNftId);   // Format: 20001-29999
    
    // If this is a Katoshi ID, extract the number part without the type prefix
    if (isKatoshiClassic || isKatoshiPrime) {
      baseNftId = baseNftId.substring(1);
    }
    
    // Remove any leading zeros for Genesis format
    baseNftId = baseNftId.replace(/^0+/, '') || '1';
    
    // Validate that the base ID is within proper range (1-9999)
    const baseIdNum = parseInt(baseNftId);
    if (isNaN(baseIdNum) || baseIdNum < 1 || baseIdNum > 9999) {
      console.warn(`Invalid base NFT ID: ${baseNftId}, using default of 1`);
      baseNftId = '1'; // Use 1 as a safe default
    }
    
    console.log("Using base NFT ID for all positions:", baseNftId);
    
    // Function to get image URL using the specified formats
    function getImageUrl(type: string, id: string): string {
      // Clean ID - remove leading zeros and ensure valid range
      const numericId = parseInt(id);
      const cleanId = (isNaN(numericId) || numericId < 1) ? '1' : numericId.toString();
      
      switch (type) {
        case 'genesis':
          // Genesis: Just the number 1-9999
          return `https://d3q7x2s6555pey.cloudfront.net/png/${cleanId}.png`;
        case 'classic':
          // Classic: 1 followed by 4-digit padded number
          const paddedClassicId = cleanId.padStart(4, '0');
          return `https://ocm-karma-png.s3.us-east-2.amazonaws.com/1${paddedClassicId}.png`;
        case 'prime':
          // Prime: 2 followed by 4-digit padded number
          const paddedPrimeId = cleanId.padStart(4, '0');
          return `https://ocm-karma-png.s3.us-east-2.amazonaws.com/2${paddedPrimeId}.png`;
        default:
          return '';
      }
    }
    
    // Generate all three URLs based on the same base ID
    const genesisUrl = getImageUrl('genesis', baseNftId);
    const classicUrl = getImageUrl('classic', baseNftId);
    const primeUrl = getImageUrl('prime', baseNftId);
    
    console.log("Generated NFT URLs:", {
      genesis: genesisUrl,
      classic: classicUrl,
      prime: primeUrl
    });
    
    // Helper function to load image with fallback
    async function loadNftImage(url: string, fallbackImage: string) {
      if (!url) return null;
      
      try {
        return await loadImage(url);
      } catch (error) {
        console.error(`Failed to load image ${url}:`, error);
        try {
          return await loadImage(fallbackImage);
        } catch (fallbackError) {
          console.error('Failed to load placeholder image:', fallbackError);
          return null;
        }
      }
    }
    
    // Load all three images
    const images = await Promise.all([
      loadNftImage(genesisUrl, genesisPlaceholder),
      loadNftImage(classicUrl, katoshiClassicPlaceholder),
      loadNftImage(primeUrl, katoshiPrimePlaceholder)
    ]);
    
    console.log("Images loaded for positions:", images.map((img, idx) => 
      img ? `Position ${idx} (${idx === 0 ? 'Genesis' : idx === 1 ? 'Classic' : 'Prime'})` : `Position ${idx} (empty)`
    ));

    // Draw NFTs in positions - adjusted for 575x575 image size
    const positions = [
      { x: 330, y: 530 },   // Left (Genesis)
      { x: 960, y: 530 },   // Center (Katoshi Classic)
      { x: 1590, y: 530 }   // Right (Katoshi Prime)
    ];

    // Draw NFT images
    images.forEach((image, index) => {
      if (image && index < positions.length) {
        const pos = positions[index];
        console.log(`Drawing NFT at position ${index} (${pos.x}, ${pos.y}) - Type: ${index === 0 ? 'Genesis' : index === 1 ? 'Classic' : 'Prime'}`);
        // Draw image - size 575x575
        ctx.drawImage(image, pos.x - 287.5, pos.y - 287.5, 575, 575);
      }
    });

    // Convert to PNG buffer
    const buffer = canvas.toBuffer('image/png');

    // Send the image with clearer headers to prevent multiple downloads
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', `attachment; filename="${theme}.png"`);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Length', buffer.length);
    res.status(200).send(buffer);

  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ 
      message: 'Error generating image',
      error: error instanceof Error ? error.message : 'Unknown error'
