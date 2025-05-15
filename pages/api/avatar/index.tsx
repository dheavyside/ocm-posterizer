import type { NextApiRequest, NextApiResponse } from 'next';
import { tokenCode } from '@/model/Nft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code, id } = req.query;

  if (!code || !id || Array.isArray(code) || Array.isArray(id)) {
    res.status(400).json({ error: 'Invalid parameters' });
    return;
  }

  const imageUrl = getImageUrl(code as tokenCode, id);
  if (!imageUrl) {
    res.status(404).json({ error: 'Image not found' });
    return;
  }

  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.send(Buffer.from(buffer));
}

function getImageUrl(code: tokenCode, id: string): string {
  switch (code) {
    case 'ONCHAINMONKEY':
      return `https://d3q7x2s6555pey.cloudfront.net/png/${id}.png`;
    case 'KATOSHI_CLASSIC':
      if (id.startsWith('1')) {
        const numericPart = id.substring(1);
        const paddedId = numericPart.padStart(4, '0');
        return `https://creator-hub-prod.s3.us-east-2.amazonaws.com/katoshi-classic/1${paddedId}.png`;
      } else {
        const paddedId = id.padStart(4, '0');
        return `https://creator-hub-prod.s3.us-east-2.amazonaws.com/katoshi-classic/1${paddedId}.png`;
      }
    case 'KATOSHI_PRIME':
      if (id.startsWith('2')) {
        const numericPart = id.substring(1);
        const paddedId = numericPart.padStart(4, '0');
        return `https://creator-hub-prod.s3.us-east-2.amazonaws.com/katoshi-prime/2${paddedId}.png`;
      } else {
        const paddedId = id.padStart(4, '0');
        return `https://creator-hub-prod.s3.us-east-2.amazonaws.com/katoshi-prime/2${paddedId}.png`;
      }
    default:
      return '';
  }
}
