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
import { Analytics } from "@vercel/analytics/next";

type Props = {
  collectionId: string;
  collection: ICollection;
  navProps?: {
    showShare?: boolean;
    collectionName?: string;
  };
};

export default function Home({ collectionId, collection, navProps }: Props) {
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
    setGreeting(collection.greetings[Math.floor(Math.random() * collection.greetings.length)]);
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
    <>
      <Head>
        <title>{`Posterizer - ${collection.name}`}</title>
      </Head>
      
      <div className='text-center tablet:max-w-max tablet:w-[85%] tablet:mx-auto'>
        {/* Message box */}
        {greeting && (
          <div className='mb-3 text-center'>
            <span className='text-xs text-slate-500'>{greeting}</span>
          </div>
        )}

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
      <Analytics />
    </>
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
      navProps: collection.length > 0 ? {
        showShare: true,
        collectionName: collection[0].name
      } : undefined
    },
  };
}
