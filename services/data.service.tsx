import { Nft, tokenCode } from '../model/Nft';
import { ITheme } from '../model/Theme';
import generic_ph from '../public/generic_ph.png';
import erc721_sj_ph from '../public/erc721_sj_ph.png';
import erc721_wfnh_be_ph from '../public/erc721_wfnh-be_ph.png';

export const getNftPlaceholders = (number) => {
  let defaultNfts: Nft[] = [];

  for (let i = 0; i < number; i++) {
    defaultNfts.push({
      code: 'ERC721_SJ',
      standard: 'ERC721',
      id: `-${i.toString()}`,
      image_url: generic_ph.src,
    });
  }

  return defaultNfts;
};

export const updateNftPlaceholders = (nfts: Nft[], theme: ITheme) => {
  const placeholders: Map<tokenCode, string> = new Map<tokenCode, string>([
    ['GENERIC', generic_ph.src],
    ['ONCHAINMONKEY', generic_ph.src],
    ['ERC721_KATOSHI', generic_ph.src],
  ]);

  for (let i = 0; i < nfts.length; i++) {
    if (!theme || theme.code === null) {
      nfts[i].image_url = placeholders.get('GENERIC');
    } else if (nfts[i].id.startsWith('-')) {
      nfts[i].image_url =
        placeholders.get(theme.code) ?? placeholders.get('GENERIC');
    }
  }

  return nfts;
};
