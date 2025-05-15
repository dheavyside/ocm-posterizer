import { useEffect, useRef, useState } from 'react';
import Canvas from '../../../components/Canvas';
import LayoutSelector from '../../../components/LayoutSelector';
import NftSelector from '../../../components/NftSelector';
import { COLLECTIONS, ICollection } from '../../../data/collections';
import { Nft } from '../../../model/Nft';
import { ITheme } from '../../../model/Theme';
import ErrorPage from 'next/error';
import {
  getNftPlaceholders,
  updateNftPlaceholders,
} from '../../../services/data.service';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const message = [
  "!RISE",
  'The monkeys will not be stopped!',
  "Danny is cooking...",
  "Who is Monkey King?",
  'I love WAXL!',
  'Magic Monks 4 Eva',
  'Hi, Andy!',
];

type Props = {
  collectionId: string;
  collection: ICollection;
};

export default function Home({ collectionId, collection }: Props) {
  const [greeting, setGreeting] = useState('');
  const [theme, setTheme] = useState<ITheme | null>(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState(getNftPlaceholders(50));
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (theme) {
      setData(prevData => updateNftPlaceholders([...prevData], theme));
    }
  }, [theme]);

  const showNftSelector = () => {
    setVisibleModal(true);
  };

  const hideNftSelector = () => {
    setVisibleModal(false);
  };

  const themeUpdated = (newTheme: ITheme) => {
    setGreeting(message[Math.floor(Math.random() * message.length)]);
    setTheme(newTheme);
  };

  const onAvatarClick = (index: number) => {
    setSelectedIndex(index);
    showNftSelector();
  };

  const onAvatarSelected = (avatar: Nft) => {
    hideNftSelector();
    let dataCopy = [...data];
    dataCopy[selectedIndex] = avatar;
    setData(dataCopy);
  };

  const onFullSetSelected = (nfts: Nft[], baseSlot: number) => {
    hideNftSelector();
    setData(prevData => {
      const dataCopy = [...prevData];
      nfts.forEach((nft, index) => {
        dataCopy[baseSlot + index] = nft;
      });
      return dataCopy;
    });
  };

  const onDownload = (src: string) => {
    if (!theme) return;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = src;
    link.download = `${theme.name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${collection.name} Posterizer`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch((error) => console.log('Error copying to clipboard', error));
    }
  };

  const isFullSetFriday = theme?.size === 'wuxga';

  if (!collection) {
    return (
      <>
        <Head>
          <title>Posterizer - Not Found</title>
        </Head>
        <ErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <div className='text-center tablet:max-w-max tablet:w-[85%] tablet:mx-auto'>
      <Head>
        <title>{`Posterizer - ${collection.name}`}</title>
      </Head>
      
      {/* Updated header with new layout */}
      <div className='flex flex-col py-4'>
        {/* Logo and share button row */}
        <div className='flex items-center justify-between'>
          {/* Left: OCM Logo */}
          <div className='flex items-center'>
            <Image
              src="/logos/OCMLogo-W-H.png"
              width={56}
              height={56}
              className='w-auto h-14'
              alt="OCM Logo"
            />
          </div>
          
          {/* Right: Share button */}
          <div className='text-right'>
            <button 
              onClick={handleShare}
              className='inline-flex items-center px-4 py-2 text-sm font-bold text-white rounded-md bg-slate-600 hover:bg-sj-neon hover:text-black'
            >
              Share
            </button>
          </div>
        </div>
        
        {/* Message box below logo, full width and left aligned */}
        <div className='mt-2 text-center tablet:text-left'>
          <span className='text-sm text-slate-500'>{greeting}</span>
        </div>
      </div>
      
      {/* LayoutSelector component with full width styling is now used instead of this spacer */}

      <LayoutSelector
        colId={collectionId?.toString()}
        themeUpdated={(theme: ITheme | null) => themeUpdated(theme as ITheme)}
      />

      <Canvas
        data={data}
        onAvatarClick={onAvatarClick}
        onDownload={onDownload}
        theme={theme}
      />

      <NftSelector
        visible={visibleModal}
        onAvatarSelected={onAvatarSelected}
        onFullSetSelected={onFullSetSelected}
        onCloseClick={hideNftSelector}
        isFullSetFriday={isFullSetFriday}
        selectedSlot={selectedIndex}
      />
    </div>
  );
}

export async function getServerSideProps(context: { query: { colId: string } }) {
  const collectionId = context.query.colId;
  const collection = COLLECTIONS.filter(
    (col) => col.id === collectionId.toString()
  );

  return {
    props: {
      collectionId,
      collection: collection.length > 0 ? collection[0] : null,
    },
  };
}
