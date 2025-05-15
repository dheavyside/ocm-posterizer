export type standard = 'ERC721';

export type tokenCode =
  | 'GENERIC'
  | 'ONCHAINMONKEY'
  | 'KATOSHI_CLASSIC'
  | 'KATOSHI_PRIME';

export interface Nft {
  code: tokenCode;
  standard: standard;
  id: string;
  image_url: string;
  image_url_os?: string;
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
