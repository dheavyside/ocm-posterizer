import { ITheme } from '../../model/Theme';
import styles from './erc721-wfnh-be-theme.module.scss';

const twitterBanners: ITheme[] = [
  {
    id: 'ML3zafHij7GX9D4',
    code: 'ERC721_WFNH-BE',
    name: 'WF Banner 1',
    author: {
      name: 'Tremor',
      url: 'https://twitter.com/Bruno_Vilela_',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_1} bg-wfnh-banner-1 bg-size--cover bg-pos-y--bottom bg-pos-x--left`,
    },
    nfts: [
      {
        classNames: `${styles.first}`,
      },
      {
        classNames: `${styles.second}`,
      },
      {
        classNames: `${styles.third}`,
      },
      {
        classNames: `${styles.fourth}`,
      },
    ],
  },
  {
    id: 'hb4BcUOrBPCVWkV',
    code: 'ERC721_WFNH-BE',
    name: 'WF Banner 2',
    author: {
      name: 'Tremor',
      url: 'https://twitter.com/Bruno_Vilela_',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-wfnh-banner-2 bg-size--cover bg-pos-y--bottom bg-pos-x--left`,
    },
    nfts: [
      {
        classNames: `height--68 top--16 left--24`,
      },
      {
        classNames: `height--68 top--16 left--49`,
      },
      {
        classNames: `height--68 top--16 left--74`,
      },
    ],
  },
  {
    id: 'bgA9CpsL2s28hSE',
    code: 'ERC721_WFNH-BE',
    name: 'WF Banner 3',
    author: {
      name: 'Tremor',
      url: 'https://twitter.com/Bruno_Vilela_',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_3} bg-wfnh-banner-3 bg-size--cover bg-pos-y--bottom bg-pos-x--left`,
    },
    nfts: [
      {
        classNames: `height--76 top--14 left--35`,
      },
      {
        classNames: `${styles.second} height--76 top--14`,
      },
    ],
  },
  {
    id: 'h0gBfttsLyxjbXD',
    code: 'ERC721_WFNH-BE',
    name: 'WF Banner 4',
    author: {
      name: 'Tremor',
      url: 'https://twitter.com/Bruno_Vilela_',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_4} bg-wfnh-banner-4 bg-size--cover bg-pos-y--bottom bg-pos-x--left`,
    },
    nfts: [
      {
        classNames: `${styles.nft1}`,
      },
      {
        classNames: `${styles.nft2}`,
      },
      {
        classNames: `${styles.nft3}`,
      },
      {
        classNames: `${styles.nft4}`,
      },
      {
        classNames: `${styles.nft5}`,
      },
      {
        classNames: `${styles.nft6}`,
      },
      {
        classNames: `${styles.nft7}`,
      },
      {
        classNames: `${styles.nft8}`,
      },
      {
        classNames: `${styles.nft9}`,
      },
      {
        classNames: `${styles.nft10}`,
      },
      {
        classNames: `${styles.nft11}`,
      },
      {
        classNames: `${styles.nft12}`,
      },
      {
        classNames: `${styles.nft13}`,
      },
      {
        classNames: `${styles.nft14}`,
      },
      {
        classNames: `${styles.nft15}`,
      },
      {
        classNames: `${styles.nft16}`,
      },
    ],
  },
  {
    id: 'EpHIvIRkXIWjyM1',
    code: 'ERC721_WFNH-BE',
    name: 'WF Banner 5',
    author: {
      name: 'Tremor',
      url: 'https://twitter.com/Bruno_Vilela_',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_5} bg-wfnh-banner-5 bg-size--cover bg-pos-y--bottom bg-pos-x--left`,
    },
    nfts: [
      {
        classNames: `${styles.first}`,
      },
      {
        classNames: `${styles.second}`,
      },
      {
        classNames: `${styles.third}`,
      },
    ],
  },
];

const squarePosters: ITheme[] = [
  //WF Poster Shakey (2x2)
  {
    id: 'QIN9vaxrQg2C7zg',
    code: 'ERC721_WFNH-BE',
    name: 'WF Poster Shakey (2x2)',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: ``,
    },
    nfts: [
      {
        classNames: `rotate--20 height--50 top--0 left--0 `,
      },
      {
        classNames: `rotate--340 height--50 top--0 left--50`,
      },
      {
        classNames: `rotate--350 height--50 top--46 left--0`,
      },
      {
        classNames: `rotate--20 height--50 top--43 left--50`,
      },
    ],
  },
];

export const ERC721_WFNH_BE_THEMES: ITheme[] = [
  ...twitterBanners,
  ...squarePosters,
];
