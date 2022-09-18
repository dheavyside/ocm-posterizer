import sjLogo from '../public/logos/sj.png';
import coiwLogo from '../public/logos/coiw.svg';
import wfLogo from '../public/logos/wfnh-be.png';

export interface ICollection {
  id: string;
  name: string;
  logo: string;
}

export const COLLECTIONS: ICollection[] = [
  {
    id: 'erc721_sj',
    name: 'Shonen Junk',
    logo: sjLogo.src,
  },
  {
    id: 'erc721_coiw',
    name: 'Chronicles of the Inhabited World',
    logo: coiwLogo.src,
  },
  {
    id: 'erc721_wfnh-be',
    name: 'Wize Fellaz',
    logo: wfLogo.src,
  },
];
