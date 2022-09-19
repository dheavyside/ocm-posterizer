import { ITheme } from '../../model/Theme';
import { StickerProvider } from '../image.service';
import styles from './erc721-coiw-theme.module.scss';

const twitterBanners: ITheme[] = [
  {
    id: 'y95srZ9ZRctzbTU',
    code: 'ERC721_COIW',
    name: 'CoiW World 1',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-4 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--50 top--5 left--68`,
      },
      {
        classNames: `hexagon-3 height--50 top--45 left--60`,
      },
      {
        classNames: `hexagon-3 height--50 top--45 left--76`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--80 top--10 left--5',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
    ],
  },
  {
    id: 'hojpUVsOswgdk16',
    code: 'ERC721_COIW',
    name: 'CoiW Panels',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `${styles.coiw_panels}`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--54 top--1 left---8`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--10`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--28`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--46`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--64`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--82`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--1`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--37`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--55`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--73`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--91`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--45 bottom--9 left--20',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
    ],
  },
  {
    id: 'kGtqML4pcLMKpM4',
    code: 'ERC721_COIW',
    name: 'CoiW Planet Boi',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `circle height--50 bottom--20 left--41`,
      },
      {
        classNames: `circle height--15 top--10 right--40`,
      },
      {
        classNames: `circle height--25 bottom--10 right--10`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
      {
        classNames: 'height--59 bottom--9 left--42 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
      {
        classNames: 'height--19 top--10 right--39 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
      {
        classNames: 'height--31  bottom--5 right--9 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
    ],
  },
  {
    id: 'hojpUVsOswDdk1E',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 1',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-1 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `height--67 top--16 left--8`,
      },
      {
        classNames: `height--67 top--16 right--8`,
      },
    ],

    fgStickers: [
      {
        classNames: 'height--70 top--15 left--37',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--6 top--16 left--8',
        shape: '',
        src: StickerProvider.coiwFrame2,
      },
      {
        classNames: 'height--6 top--16 right--8',
        shape: '',
        src: StickerProvider.coiwFrame5,
      },
    ],
  },
  {
    id: 'kGtqML4pcJMKpM4',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 2',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: '2IlJcy5poIOGIxp',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Green',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-3 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: 'KyD0MxWVQvyLhXB',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Red',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-5 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: 'HleUvffxXscemhd',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Black',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'twitter_banner',
    classNames: 'twitter-banner',
    backdrop: {
      classNames: `bg-coiw-banner-6 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
];

const facebookBanners: ITheme[] = [
  {
    id: 'y95srZ9ZRctzbTd',
    code: 'ERC721_COIW',
    name: 'CoiW World 1',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-4 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--50 top--5 left--68`,
      },
      {
        classNames: `hexagon-3 height--50 top--45 left--60`,
      },
      {
        classNames: `hexagon-3 height--50 top--45 left--77`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--80 top--10 left--5',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
    ],
  },
  {
    id: 'hojpUVsOswgd816',
    code: 'ERC721_COIW',
    name: 'CoiW Panels',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `${styles.coiw_panels}`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--54 top--1 left---8`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--10`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--28`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--46`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--64`,
      },
      {
        classNames: `hexagon-3 height--54 top--1 left--82`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--1`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--37`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--55`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--73`,
      },
      {
        classNames: `hexagon-3 height--54 bottom--1 left--91`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--45 bottom--9 left--20',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
    ],
  },
  {
    id: 'kGtqML4pcLMKpL4',
    code: 'ERC721_COIW',
    name: 'CoiW Planet Boi',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `circle height--50 bottom--20 left--41`,
      },
      {
        classNames: `circle height--15 top--10 right--40`,
      },
      {
        classNames: `circle height--25 bottom--10 right--10`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
      {
        classNames: 'height--59 bottom--9 left--42 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
      {
        classNames: 'height--19 top--10 right--39 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
      {
        classNames: 'height--31  bottom--5 right--9 rotate--30 click-through',
        shape: '',
        src: StickerProvider.coiwRing,
      },
    ],
  },
  {
    id: 'hojpUVsOswDdk12',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 1',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-1 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `height--67 top--16 left--8`,
      },
      {
        classNames: `height--67 top--16 right--8`,
      },
    ],

    fgStickers: [
      {
        classNames: 'height--70 top--15 left--37',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--6 top--16 left--8',
        shape: '',
        src: StickerProvider.coiwFrame2,
      },
      {
        classNames: 'height--6 top--16 right--8',
        shape: '',
        src: StickerProvider.coiwFrame5,
      },
    ],
  },
  {
    id: 'kGtqML4pcJMKpM1',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 2',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-2 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: '2IlJcy5poIOGIxs',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Green',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-3 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: 'KyD0MxWVQvyLhXx',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Red',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-5 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
  {
    id: 'HleUvffxXscemha',
    code: 'ERC721_COIW',
    name: 'CoiW Banner 3 - Black',
    author: {
      name: 'Adz ⚜️',
      url: 'https://twitter.com/ShaolinKingFu',
    },
    size: 'facebook_banner',
    classNames: 'facebook-banner',
    backdrop: {
      classNames: `bg-coiw-banner-6 bg-size--cover`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--55 top--23 right--3`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--21`,
      },
      {
        classNames: `hexagon-3 height--55 top--23 right--39`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--60 top--15 left--11',
        shape: '',
        src: StickerProvider.coiwLogo2,
      },
      {
        classNames: 'height--100 top--0 left--5',
        shape: '',
        src: StickerProvider.coiwPlanet,
      },
    ],
  },
];

const square: ITheme[] = [
  {
    id: 'hojpUVsOswgdk1E',
    code: 'ERC721_COIW',
    name: 'CoiW Panels',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: `${styles.coiw_panels}`,
    },
    nfts: [
      {
        classNames: `hexagon-3 height--34 top--6 left---15`,
      },
      {
        classNames: `hexagon-3 height--34 top--6 left--17`,
      },
      {
        classNames: `hexagon-3 height--34 top--6 left--49`,
      },
      {
        classNames: `hexagon-3 height--34 top--6 left--81`,
      },
      {
        classNames: `hexagon-3 height--34 top--33 left--1`,
      },
      {
        classNames: `hexagon-3 height--34 top--33 right--1`,
      },
      {
        classNames: `hexagon-3 height--34 bottom--6 left---15`,
      },
      {
        classNames: `hexagon-3 height--34 bottom--6 left--17`,
      },
      {
        classNames: `hexagon-3 height--34 bottom--6 left--49`,
      },
      {
        classNames: `hexagon-3 height--34 bottom--6 left--81`,
      },
    ],
    fgStickers: [
      {
        classNames: 'height--28 top--36 left--36',
        shape: '',
        src: StickerProvider.coiwLogo,
      },
    ],
  },
];

export const ERC721_COIW_THEMES: ITheme[] = [
  ...twitterBanners,
  ...facebookBanners,
  ...square,
];
