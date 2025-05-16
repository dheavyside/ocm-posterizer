import ocmonkLogo from '../public/logos/ocmonk.svg';
import ocmNavLogo from '../public/logos/OCMLogo-W-H.png';

export interface ICollection {
  id: string;
  name: string;
  logo: string;
  navLogo: string;
  website: string;
  greetings: string[];
}

export const COLLECTIONS: ICollection[] = [
  {
    id: 'onchainmonkey',
    name: 'OnChain Monkey',
    logo: ocmonkLogo.src,
    navLogo: ocmNavLogo.src,
    website: 'https://onchainmonkey.com',
    greetings: [
      "!RISE",
      "The monkeys will not be stopped!",
      "Danny is cooking...",
      "Who is Monkey Kong?",
      "I love WAXL!",
      "Magic Monks 4 Eva",
      "I need a naked monkey.",
      "Fitzy brought me here.",
      "Ordinals 4 EVA",
      "Danny is Satoshi",
      "Powered by potassium.",
      "Is that banana, or are you just happy to see my wallet?",
      "Monkeys in, floor out.",
      "Monkey business is good business.",
      "Keep calm and swing on.",
      "NFTs? More like N-F-Trees.",
      "Wen banana airdrop?",
      "Will trade JPEGs for bananas.",
      "Fitzy stole my banana again.",
      "Monkey mode: activated.",
      "Proof of Banana.",
      "Welcome to the Jungle.",
      "Coded with banana peels.",
      "I’m just here for the monkey memes.",
      "Don’t feed the flippers.",
      "Monkey see, monkey mint.",
      "One banana, two banana, three banana,floor.",
      "Not your keys, not your monkey.",
      "Join the monkey uprising.",
      "Came for the art, stayed for the Monks.",
      "Monkey's to the moon.",
    ]
  },
];
