import Image, { StaticImageData } from 'next/image';

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
  const classes = `nft ${classNames ?? ''} ${shape ?? ''}`;
  
  return (
    <div className={classes} style={{ position: 'absolute' }}>
      <Image
        data-index={index}
        src={src}
        alt={`Sticker ${index}`}
        onClick={() => onStickerClick?.(index)}
        width={575}
        height={575}
        priority={true}
        crossOrigin="anonymous"
        style={{ 
          objectFit: 'contain',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      />
    </div>
  );
}
