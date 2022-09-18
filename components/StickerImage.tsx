import { StaticImageData } from 'next/image';

type Props = {
  index: number;
  src: StaticImageData;
  classNames?: string;
  shape?: string;
  onStickerClick?: (index: number) => void;
};

export default function StickerImage({
  index,
  src,
  classNames = '',
  shape = '',
  onStickerClick,
}: Props) {
  return (
    <img
      data-index={index}
      className={`nft ${classNames ?? ''} ${shape ?? ''}`}
      src={src.src}
      alt={src.src}
      onClick={() => onStickerClick(index)}
    />
  );
}
