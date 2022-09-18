import { Nft } from '../model/Nft';

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
    <img
      key={index}
      data-index={index}
      className={classes}
      src={data[index].image_url}
      alt={data[index].image_url}
      onClick={() => onAvatarClick(index)}
    />
  );
}
