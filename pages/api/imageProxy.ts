import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';
import http from 'http';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'URL parameter is required' });
  }

  try {
    // Decode the URL
    const decodedUrl = decodeURIComponent(url);
    console.log(`Proxying request for: ${decodedUrl}`);

    // Determine if we need to use http or https
    const protocol = decodedUrl.startsWith('https') ? https : http;

    // Fetch the image
    const imageResponse = await new Promise<Buffer>((resolve, reject) => {
      protocol.get(decodedUrl, (response) => {
        // Check if the response is successful
        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to fetch image: ${response.statusCode}`));
        }

        // Get the content type
        const contentType = response.headers['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
          return reject(new Error('The URL did not return an image'));
        }

        // Set the content type header
        res.setHeader('Content-Type', contentType);
        
        // Collect the data
        const chunks: Buffer[] = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks)));
      }).on('error', reject);
    });

    // Send the image data
    res.status(200).send(imageResponse);
  } catch (error) {
    console.error('Image proxy error:', error);
    res.status(500).json({ 
      message: 'Error proxying image',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 