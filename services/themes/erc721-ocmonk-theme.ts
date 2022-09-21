import { ITheme } from '../../model/Theme';
import { StickerProvider } from '../image.service';
import styles from './erc721-ocmonk-theme.module.scss';

const twitterBanners: ITheme[] = [
  {
    id: 'HNCOSKG6vEtVlWG',
    code: 'ERC721_OCMONK',
    name: 'OCM Karma',
    author: {
      name: 'H Ξ Λ V Υ • D',
      url: 'https://twitter.com/dheavyside',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-ocmonk-banner-1 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `height--61 top--14 right--53 rotate--1`,
      },
      {
        classNames: `height--61 top--10 right--29 rotate--357`,
      },
      {
        classNames: `height--61 top--18 right--4 rotate--3`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--99 top--2 right--1 click-through',
        shape: '',
        src: StickerProvider.ocmWoodenFrame,
      },
    ],
  },
];

const facebookBanners: ITheme[] = [
  {
    id: 'HNCOSKG6vEtVlWA',
    code: 'ERC721_OCMONK',
    name: 'OCM Karma',
    author: {
      name: 'H Ξ Λ V Υ • D',
      url: 'https://twitter.com/dheavyside',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-ocmonk-banner-1 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `height--60 top--14 right--53 rotate--1`,
      },
      {
        classNames: `height--60 top--9 right--29 rotate--358`,
      },
      {
        classNames: `height--60 top--18 right--4 rotate--3`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--99 top--1 right--1 click-through',
        shape: '',
        src: StickerProvider.ocmWoodenFrame,
      },
    ],
  },
];

const wuxga: ITheme[] = [
  {
    id: 'HNCOSKG6TEtVlWA',
    code: 'ERC721_OCMONK',
    name: 'OCM Karma',
    author: {
      name: 'H Ξ Λ V Υ • D',
      url: 'https://twitter.com/dheavyside',
    },
    size: 'wuxga',
    classNames: 'wuxga',
    backdrop: {
      classNames: `bg-ocmonk-wuxga-1 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `height--48 top--20 left--2`,
      },
      {
        classNames: `height--48 top--20 right--35`,
      },
      {
        classNames: `height--48 top--20 right--2`,
      },
    ],
  },
];

export const ERC721_OCMONK_THEMES: ITheme[] = [
  ...twitterBanners,
  ...facebookBanners,
  ...wuxga,
];
