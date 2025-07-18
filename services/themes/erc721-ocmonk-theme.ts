import { ITheme } from '../../model/Theme';
import { StickerProvider } from '../image.service';
import styles from './erc721-ocmonk-theme.module.scss';

const twitterBanners: ITheme[] = [
  {
    id: 'HNCOSKG6vEtVlWG',
    code: 'ONCHAINMONKEY',
    name: 'OCM Katoshi',
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
  {
    id: 'NG0WESV2DHFH04',
    code: 'ONCHAINMONKEY',
    name: 'OCM Matching Set',
    author: {
      name: '0xFelix (🍌,🍌) 🔮,🏴‍☠️🦜',
      url: 'https://twitter.com/edframe',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_2} bg-ocmonk-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `${styles.first} circle top--18`,
      },
      {
        classNames: `${styles.second} circle top--18`,
      },
      {
        classNames: `${styles.third} circle top--18`,
      },
    ],
  },
];

const facebookBanners: ITheme[] = [
  {
    id: 'HNCOSKG6vEtVlWA',
    code: 'ONCHAINMONKEY',
    name: 'OCM Katoshi',
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
  {
    id: 'T34WJF92314FHHAVV',
    code: 'ONCHAINMONKEY',
    name: 'OCM Matching Set',
    author: {
      name: '0xFelix (🍌,🍌) 🔮,🏴‍☠️🦜',
      url: 'https://twitter.com/edframe',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `${styles.banner_2} bg-ocmonk-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `${styles.first} circle top--18`,
      },
      {
        classNames: `${styles.second} circle top--18`,
      },
      {
        classNames: `${styles.third} circle top--18`,
      },
    ],
  },
];

const wuxga: ITheme[] = [
  {
    id: 'HNCOSKG6TEtVlWA',
    code: 'ONCHAINMONKEY',
    name: 'Style 1',
    author: {
      name: 'HEAVY D',
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
  {
    id: 'WUXGA2STYLE2OCM',
    code: 'ONCHAINMONKEY',
    name: 'Style 2',
    author: {
      name: 'HEAVY D',
      url: 'https://twitter.com/dheavyside',
    },
    size: 'wuxga',
    classNames: 'wuxga',
    backdrop: {
      classNames: `${styles.wuxga_2} bg-ocmonk-wuxga-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `${styles.first} height--40 top--24`,
      },
      {
        classNames: `${styles.second} height--40 top--24`,
      },
      {
        classNames: `${styles.third} height--40 top--24`,
      },
    ],
  },
];

export const ERC721_OCMONK_THEMES: ITheme[] = [
  ...wuxga,
  ...twitterBanners,
  ...facebookBanners,
];
