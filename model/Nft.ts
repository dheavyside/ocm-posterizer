export type standard = 'ERC721';

export type tokenCode =
  | 'GENERIC'
  | 'ERC721_SJ'
  | 'ERC721_COIW'
  | 'ERC721_OCMONK'
  | 'ERC721_KARMA'
  | 'ERC721_WFNH-BE';

export interface Nft {
  code: tokenCode;
  standard: standard;
  id: string;
  image_url: string;
}

export interface NftDisplay extends Nft {
  top?: number;
  left?: number;
  height?: number;
  shape?: string;
  angle?: number;
  rotate?: string;
  classNames?: string;
}
