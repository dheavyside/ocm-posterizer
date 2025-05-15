import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: 'Invalid NFT ID' });
  }

  try {
    // Example NFT data structure
    const nft = {
      id,
      code: `NFT-${id}`,
      standard: id.startsWith('1') ? 'classic' : id.startsWith('2') ? 'prime' : 'genesis',
      image_url: id.startsWith('1') 
        ? `https://ocm-karma-png.s3.us-east-2.amazonaws.com/1${id.substring(1).padStart(4, '0')}.png`
        : id.startsWith('2')
        ? `https://ocm-karma-png.s3.us-east-2.amazonaws.com/2${id.substring(1).padStart(4, '0')}.png`
        : `https://d3q7x2s6555pey.cloudfront.net/png/${id}.png`
    };

    res.status(200).json(nft);
  } catch (error) {
    console.error('Error fetching NFT:', error);
    res.status(500).json({ message: 'Error fetching NFT data' });
  }
} 