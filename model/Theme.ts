import { StaticImageData } from 'next/image';
import { tokenCode } from './Nft';

export type ThemeSize =
  | 'twitter_banner'
  | 'facebook_banner'
  | 'opensea_banner'
  | 'wuxga'
  | 'square'
  | 'pillar'
  | 'tower';

export interface ITheme {
  id: string;
  code?: tokenCode;
  name: string;
  classNames: string;
  size: ThemeSize;
  backdrop: IThemeImage;
  nfts: IThemeNft[];
  bgStickers?: IThemeImage[];
  bgHtml?: string[];
  fgStickers?: IThemeImage[];
  fgHtml?: string[];
  speech?: IThemeSpeech[];
  credits?: IThemeCredit[];
}

export interface IThemeImage {
  src?: StaticImageData;
  classNames?: string;
  shape?: string;
}

export interface IThemeNft {
  classNames?: string;
  shape?: string;
}

export interface IThemeSpeech {
  dialogue: string;
  classNames?: string;
}

export interface IThemeCredit {
  name?: string;
  link?: string;
  note?: string;
}
