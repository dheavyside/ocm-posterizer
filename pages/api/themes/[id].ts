import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    // Example theme data structure
    const theme = {
      id: id as string,
      name: `Theme ${id}`,
      classNames: 'theme-class',
      size: 'WUXGA',
      backdrop: {
        classNames: 'backdrop-class'
      },
      nfts: [
        { classNames: 'nft-position-1', shape: 'circle' },
        { classNames: 'nft-position-2', shape: 'circle' },
        { classNames: 'nft-position-3', shape: 'circle' }
      ],
      bgStickers: [],
      fgStickers: []
    };

    res.status(200).json(theme);
  } catch (error) {
    console.error('Error fetching theme:', error);
    res.status(500).json({ message: 'Error fetching theme data' });
  }
} 