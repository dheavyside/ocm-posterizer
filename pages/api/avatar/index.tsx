import { JUNKIES_DATA } from '../../../data/junkies';
import { WIZEFELLAS_DATA } from '../../../data/wfs';
import { tokenCode } from '../../../model/Nft';

export default async function handler(req, res) {
  const { code, id } = req.query;

  const imageUrl = getImageUrl(code, id);
  const response = await fetch(imageUrl);
  const blob = await (await response.blob()).arrayBuffer();
  const file = Buffer.from(blob);

  res.setHeader('Content-Type', 'image/jpg');
  res.send(file);
}

function getImageUrl(code: tokenCode, id: string): string {
  switch (code) {
    case 'ERC721_OCMONK':
      return `https://d3q7x2s6555pey.cloudfront.net/png/${id}.png`;
    case 'ERC721_SJ':
      return `https://static.shinji.xyz/unit-00/nft-images/${
        JUNKIES_DATA[parseInt(id)].hash
      }.png`;
    case 'ERC721_WFNH-BE':
      return WIZEFELLAS_DATA[Number.parseInt(id) - 1];
    case 'ERC721_KARMA':
      return `https://karma-dessert.onchainmonkey.com/karma-images/${id}`;
  }
}
