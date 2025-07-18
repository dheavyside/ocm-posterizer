import loadingAnimation from '../public/loading.svg';
import Image from 'next/image';

type Props = {
  show: boolean;
};

export default function Loading({ show }: Props) {
  return (
    <div
      className={`flex flex-col fixed justify-center items-center text-white inset-0 z-10 bg-black opacity-50 ${
        show ? '' : 'hidden'
      }`}
    >
      <Image
        className='h-24'
        src={loadingAnimation.src}
        alt='Please wait...'
        width={96}
        height={96}
      />
      <h4>Please wait</h4>
    </div>
  );
}
