import { ITheme } from '../../model/Theme';
import styles from './generic-theme.module.scss';

const pillarPosters: ITheme[] = [
  // Full Poster (5x8)
  {
    id: '8AG0GwlwfMhUG8o',
    code: 'GENERIC',
    name: 'Full Poster (5x8)',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'pillar',
    classNames: 'pillar',
    backdrop: {
      classNames: `${styles.pillar_full_5x8}`,
    },
    nfts: [
      {
        classNames: 'top--0 left--0',
      },
      {
        classNames: 'top--0 left--20',
      },
      {
        classNames: 'top--0 left--40',
      },
      {
        classNames: 'top--0 left--60',
      },
      {
        classNames: 'top--0 left--80',
      },
      {
        classNames: `${styles.secondRow} left--0`,
      },
      {
        classNames: `${styles.secondRow} left--20`,
      },
      {
        classNames: `${styles.secondRow} left--40`,
      },
      {
        classNames: `${styles.secondRow} left--60`,
      },
      {
        classNames: `${styles.secondRow} left--80`,
      },
      {
        classNames: `${styles.thirdRow} left--0`,
      },
      {
        classNames: `${styles.thirdRow} left--20`,
      },
      {
        classNames: `${styles.thirdRow} left--40`,
      },
      {
        classNames: `${styles.thirdRow} left--60`,
      },
      {
        classNames: `${styles.thirdRow} left--80`,
      },
      {
        classNames: `${styles.fourthRow} left--0`,
      },
      {
        classNames: `${styles.fourthRow} left--20`,
      },
      {
        classNames: `${styles.fourthRow} left--40`,
      },
      {
        classNames: `${styles.fourthRow} left--60`,
      },
      {
        classNames: `${styles.fourthRow} left--80`,
      },
      {
        classNames: `${styles.fifthRow} left--0`,
      },
      {
        classNames: `${styles.fifthRow} left--20`,
      },
      {
        classNames: `${styles.fifthRow} left--40`,
      },
      {
        classNames: `${styles.fifthRow} left--60`,
      },
      {
        classNames: `${styles.fifthRow} left--80`,
      },
      {
        classNames: `${styles.sixthRow} left--0`,
      },
      {
        classNames: `${styles.sixthRow} left--20`,
      },
      {
        classNames: `${styles.sixthRow} left--40`,
      },
      {
        classNames: `${styles.sixthRow} left--60`,
      },
      {
        classNames: `${styles.sixthRow} left--80`,
      },
      {
        classNames: `${styles.seventhRow} left--0`,
      },
      {
        classNames: `${styles.seventhRow} left--20`,
      },
      {
        classNames: `${styles.seventhRow} left--40`,
      },
      {
        classNames: `${styles.seventhRow} left--60`,
      },
      {
        classNames: `${styles.seventhRow} left--80`,
      },
      {
        classNames: `${styles.eigthRow} left--0`,
      },
      {
        classNames: `${styles.eigthRow} left--20`,
      },
      {
        classNames: `${styles.eigthRow} left--40`,
      },
      {
        classNames: `${styles.eigthRow} left--60`,
      },
      {
        classNames: `${styles.eigthRow} left--80`,
      },
    ],
  },
];

const towerPosters: ITheme[] = [
  // Full Poster (3x6)
  {
    id: 'TsmShjgY2AeYBT4',
    code: 'GENERIC',
    name: 'Full Poster (3x6)',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'tower',
    classNames: 'tower',
    backdrop: {
      classNames: `${styles.tower_full_3x6}`,
    },
    nfts: [
      {
        classNames: `left--0 top--0 ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `left--0 ${styles.sixthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} top--0 ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.secondCol} ${styles.sixthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} top--0 ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.secondRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.thirdRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.fourthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.fifthRow} ${styles.cNft}`,
      },
      {
        classNames: `${styles.thirdCol} ${styles.sixthRow} ${styles.cNft}`,
      },
    ],
  },
];

const squarePosters: ITheme[] = [
  // PFP Split (2)
  {
    id: 'j5HjAlAQQQDtFBp',
    code: 'GENERIC',
    name: 'PFP Split (2)',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'square',
    classNames: `square`,
    backdrop: {
      classNames: `bg-sj-thinrays-blend ${styles.square_pfp_split}`,
    },
    nfts: [
      {
        classNames: `height--90 top--5 left--5 ${styles.split_1_of_2}`,
        shape: 'circle',
      },
      {
        classNames: `height--90 top--5 left--5 ${styles.split_2_of_2}`,
        shape: 'circle',
      },
    ],
  },
  // Bordered Poster Centerpiece (4x4)
  {
    id: '7fIukhaJ6cFJwAj',
    code: 'GENERIC',
    name: 'Bordered Poster Centerpiece (4x4)',
    author: {
      name: 'ZombieBoy 🥽',
      url: 'https://twitter.com/zmbby69',
    },
    size: 'square',
    classNames: 'square',
    backdrop: {
      classNames: `${styles.square_border_centeredpiece}`,
    },
    nfts: [
      {
        classNames: `${styles.firstRow} ${styles.firstCol} left--2 top--2`,
      },
      {
        classNames: `$${styles.firstRow} ${styles.secondCol} top--2`,
      },
      {
        classNames: `${styles.firstRow} ${styles.thirdCol} top--2`,
      },
      {
        classNames: `${styles.firstRow} ${styles.fourthCol} top--2`,
      },
      {
        classNames: `${styles.secondRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.secondRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.secondRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.secondRow} ${styles.fourthCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.thirdRow} ${styles.fourthCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.firstCol} left--2`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.secondCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.thirdCol}`,
      },
      {
        classNames: `${styles.fourthRow} ${styles.fourthCol}`,
      },
    ],
  },
];

export const GENERIC_THEMES: ITheme[] = [
  ...pillarPosters,
  ...towerPosters,
  ...squarePosters,
];
