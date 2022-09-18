import { ITheme } from '../../model/Theme';
import { StickerProvider } from '../image.service';
import styles from './erc721-sj-theme.module.scss';

const blackMirrorBanners: ITheme[] = [
  {
    id: 'MWmrtN8DDA0PXDZ',
    code: 'ERC721_SJ',
    name: 'SJ Twitter-B Mirror-3',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--50 left--60 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--1 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--47 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--23 ${styles.card}`,
        shape: '',
      },
    ],
  },
  {
    id: 'Qzu0VdrUDoNWgPv',
    code: 'ERC721_SJ',
    name: 'SJ Facebook-B Mirror-3',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `${styles.banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--30 left--64 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--1 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--47 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--23 ${styles.card}`,
        shape: '',
      },
    ],
  },
  {
    id: 'aHXZDEkLk6sAGzk',
    code: 'ERC721_SJ',
    name: 'SJ Opensea-B Mirror-3',
    size: 'opensea_banner',
    classNames: 'opensea-banner',
    backdrop: {
      classNames: `${styles.banner_black_mirror}`,
    },
    fgStickers: [
      {
        classNames: `height--40 top--30 left--64 ${styles.logo}`,
        shape: '',
        src: StickerProvider.sjLogoBlue,
      },
    ],
    nfts: [
      {
        classNames: `height--65 top--14 left--15 ${styles.card} ${styles.card2}`,
        shape: '',
      },
      {
        classNames: `height--65 top--14 left--52 ${styles.card} ${styles.card3}`,
        shape: '',
      },
      {
        classNames: `height--70 top--12 left--33 ${styles.card}`,
        shape: '',
      },
    ],
  },
];

const gen4Banners: ITheme[] = [
  // TWT
  {
    id: '7T6bWDNazvPfF3f',
    code: 'ERC721_SJ',
    name: 'SJ Twitter-B Gen-4',
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---3 ',
        shape: 'point-right',
      },
      {
        classNames: 'height--100 top--0 left--21',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--45',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--69',
        shape: 'point-cave-left',
      },
    ],
  },
  // FB
  {
    id: 'SL2AjyPOc5xfJrj',
    code: 'ERC721_SJ',
    name: 'SJ Facebook-B Gen-4',
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---3 ',
        shape: 'point-right',
      },
      {
        classNames: 'height--100 top--0 left--21',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--45',
        shape: 'chevron-right',
      },
      {
        classNames: 'height--100 top--0 left--69',
        shape: 'point-cave-left',
      },
    ],
  },
];

const gen6Banners: ITheme[] = [
  // OS
  {
    id: 'Uv9XOg963ZByCEd',
    code: 'ERC721_SJ',
    name: 'SJ Opensea-B Gen-6',
    size: 'opensea_banner',
    classNames: 'opensea-banner',
    backdrop: {
      classNames: 'bg-size--cover bg-pos-y--bottom bg-pos-x--left',
    },
    nfts: [
      {
        classNames: 'height--100 top--0 left---7',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--11',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--29',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--47',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--65',
        shape: 'parallelogram-right',
      },
      {
        classNames: 'height--100 top--0 left--83',
        shape: 'parallelogram-right',
      },
    ],
  },
];

const squarePosters: ITheme[] = [
  // SJ Poster NFTNYC (2x2)
  {
    id: 'XGhW6xXB1QDhLWU',
    code: 'ERC721_SJ',
    name: 'SJ Poster NFTNYC (2x2)',
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: 'bg-grad-1',
    },
    nfts: [
      {
        classNames: 'height--46 top--2 left--2',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--2 left--52',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--52 left--2',
        shape: 'circle',
      },
      {
        classNames: 'height--46 top--52 left--52',
        shape: 'circle',
      },
    ],
    fgStickers: [
      {
        classNames: 'height--33 top--33 left--33 rotate--329',
        shape: 'circle',
        src: StickerProvider.sjNftNyc2022Poap,
      },
    ],
  },
  // SJ Poster Chikyuu Sentai (5)
  {
    id: 'WquFnu6pC9jDdmE',
    code: 'ERC721_SJ',
    name: 'SJ Poster Chikyuu Sentai (5)',
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: `bg-sj-thinrays-blend ${styles.chikyuu_sentai}`,
    },
    nfts: [
      {
        classNames: `height--100 top--0 left---40 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left---20 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--0 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--20 ${styles.split_3_of_5}`,
        shape: '',
      },
      {
        classNames: `height--100 top--0 left--40 ${styles.split_3_of_5}`,
        shape: '',
      },
    ],
  },
];

const pillarPosters: ITheme[] = [
  // SJ Holographic
  {
    id: '7iOla2MlOpCl5wB',
    code: 'ERC721_SJ',
    name: 'SJ Holo Solo Card',
    size: 'pillar',
    classNames: `pillar`,
    backdrop: {
      classNames: `${styles.square_holo}`,
    },
    bgHtml: [
      `<div class=${styles.mainCard}><div>`,
      `<div class=${styles.wrapper}><div>`,
      `<div class=${styles.prints}><div>`,
      `<div class=${styles.speck}><div>`,
      `<img class=${styles.logo} src=${StickerProvider.sjLogoBlue.src}/>`,
    ],
    nfts: [
      {
        classNames: `${styles.card}`,
        shape: '',
      },
    ],
  },
];

export const ERC721_SJ_THEMES: ITheme[] = [
  ...blackMirrorBanners,
  ...gen4Banners,
  ...gen6Banners,
  ...squarePosters,
  ...pillarPosters,
];
