import ocmonkLogo from '../public/logos/ocmonk.svg';

export interface ICollection {
  id: string;
  name: string;
  logo: string;
}

export const COLLECTIONS: ICollection[] = [
  {
    id: 'onchainmonkey',
    name: 'OnChain Monkey',
    logo: ocmonkLogo.src,
  },
];
