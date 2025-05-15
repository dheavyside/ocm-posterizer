import { Nft } from '../model/Nft';
import Image from 'next/image';

type Props = {
  data: Nft[];
  index: number;
  classNames?: string;
  imageClassNames?: string;
  shape?: string;
  onAvatarClick?: (index: number) => void;
};

export default function AvatarImage({
  data,
  index,
  classNames = '',
  shape = '',
  onAvatarClick,
}: Props) {
  let classes = `nft ${classNames ?? ''} ${shape ?? ''}`;
  if (!data[index].id.startsWith('-')) {
    classes += ' stamp';
  }

  return (
    <div className={classes} style={{ position: 'absolute' }}>
      <Image
        key={index}
        data-index={index}
        src={data[index].image_url}
        alt={data[index].id || "NFT Image"}
        onClick={() => onAvatarClick?.(index)}
        width={575}
        height={575}
        priority={true}
        unoptimized={data[index].id.startsWith('-')} // Don't optimize placeholder images
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
