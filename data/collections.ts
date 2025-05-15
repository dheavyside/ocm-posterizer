// Import SVG as a component
import OcmonkLogo from '../public/logos/ocmonk.svg';

export interface ICollection {
  id: string;
  name: string;
  logo: string;
}

export const COLLECTIONS: ICollection[] = [
  {
    id: 'onchainmonkey',
    name: 'OnChain Monkey',
    logo: '/logos/ocmonk.svg', // Reference as a static path
  },
];
