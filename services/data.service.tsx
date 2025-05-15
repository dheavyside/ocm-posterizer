import { Nft, tokenCode } from '../model/Nft';
import { ITheme } from '../model/Theme';
import generic_ph from '../public/generic_ph.png';
import erc721_sj_ph from '../public/erc721_sj_ph.png';
import erc721_wfnh_be_ph from '../public/erc721_wfnh-be_ph.png';

export const getNftPlaceholders = (number: number) => {
  let defaultNfts: Nft[] = [];

  for (let i = 0; i < number; i++) {
    defaultNfts.push({
      code: 'GENERIC' as tokenCode,
      standard: 'ERC721',
      id: `-${i.toString()}`,
      image_url: generic_ph.src,
    });
  }

  return defaultNfts;
};

export const updateNftPlaceholders = (nfts: Nft[], theme: ITheme) => {
  const placeholders = new Map<tokenCode, string>([
    ['GENERIC' as tokenCode, generic_ph.src],
    ['ONCHAINMONKEY' as tokenCode, generic_ph.src],
    ['KATOSHI_CLASSIC' as tokenCode, generic_ph.src],
  ]);

  for (let i = 0; i < nfts.length; i++) {
    if (!theme || theme.code === null) {
      nfts[i].image_url = placeholders.get('GENERIC' as tokenCode) || generic_ph.src;
    } else if (nfts[i].id.startsWith('-')) {
      nfts[i].image_url =
        placeholders.get(theme.code as tokenCode) || placeholders.get('GENERIC' as tokenCode) || generic_ph.src;
    }
  }

  return nfts;
};
