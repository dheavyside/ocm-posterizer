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

  // Function to get proxied image URL for external images
  const getImageUrl = (url: string, isPlaceholder: boolean): string => {
    // Don't proxy placeholder images
    if (isPlaceholder) return url;
    
    // Use proxy for external URLs
    return `/api/imageProxy?url=${encodeURIComponent(url)}`;
  };

  const isPlaceholder = data[index].id.startsWith('-');
  const imageUrl = getImageUrl(data[index].image_url, isPlaceholder);

  return (
    <div className={classes} style={{ position: 'absolute' }}>
      <Image
        key={index}
        data-index={index}
        src={imageUrl}
        alt={data[index].id || "NFT Image"}
        onClick={() => onAvatarClick?.(index)}
        width={575}
        height={575}
        priority={true}
        crossOrigin="anonymous"
        unoptimized={isPlaceholder} // Don't optimize placeholder images
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
