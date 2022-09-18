import { Nft } from './Nft';

export type OutputProps = {
  data: Nft[];
  onAvatarClick?: (index: number) => void;
};
