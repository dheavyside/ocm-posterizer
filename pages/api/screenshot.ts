import { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';
import http from 'http';

// Utility function to fetch an image as buffer
async function fetchImageAsBuffer(url: string): Promise<Buffer> {
  const protocol = url.startsWith('https') ? https : http;
  
  return new Promise<Buffer>((resolve, reject) => {
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to fetch image: ${response.statusCode}`));
      }

      const chunks: Buffer[] = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log("Screenshot API request received:", JSON.stringify(req.body));
    const { theme, nfts } = req.body;
    if (!theme || !nfts) {
      return res.status(400).json({ message: 'Missing required parameters' });
    }

    // Get NFT IDs and filter out placeholder IDs (those starting with '-')
    const allNftIds = nfts.split(',');
    const validNftIds = allNftIds.filter((id: string) => !id.startsWith('-'));
    
    console.log("Valid NFT IDs:", validNftIds);
    
    // Early return if no valid NFTs
    if (validNftIds.length === 0) {
      return res.status(400).json({ message: 'No valid NFT IDs provided' });
    }
    
    // Always use the first valid ID as the base NFT ID
    let baseNftId = validNftIds[0];
    
    // Forward to client-side rendering since we now have a working image proxy
    return res.status(200).json({ 
      message: 'Please use client-side rendering with the image proxy',
      nftId: baseNftId,
    });
  } catch (error) {
    console.error('Error in screenshot API:', error);
    res.status(500).json({ 
      message: 'Error generating image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 