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
import { LocalStorageService } from '../../../services/local-storage.service';
import Head from 'next/head';

const message = [
  "Let's create!",
  'Have fun!',
  "What's cooking?",
  "You're awesome!",
  'Weeb power!',
  'Believe it!',
  'Believe in magic!',
];

type Props = {
  collectionId: string;
  collection: ICollection;
};

export default function Home({ collectionId, collection }: Props) {
  const [greeting, setGreeting] = useState('');
  const [theme, setTheme] = useState(null);
  const [nfts, setNfts] = useState([] as Nft[]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState(getNftPlaceholders(50));
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const initialized = useRef(false);
  const storageService = useRef<LocalStorageService>(null);

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getAllNFTs() {
      storageService.current = new LocalStorageService();
      let promises = [];
      storageService.current
        .GetAddresses()
        .forEach(async (standard, address) => {
          promises.push(storageService.current.findNFTs(address, standard));
        });
      Promise.all(promises).then(() => {
        let newArray = [...storageService.current.getMyNFTs()];
        setNfts(newArray);
      });
    }

    if (!initialized.current) {
      getAllNFTs();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    setData(updateNftPlaceholders([...data], theme));
  }, [theme]);

  const showNftSelector = () => {
    setVisibleModal(true);
  };

  const hideNftSelector = () => {
    setVisibleModal(false);
  };

  const themeUpdated = (theme: ITheme) => {
    setGreeting(message[Math.floor(Math.random() * message.length)]);
    setTheme(theme);
  };

  const onAvatarClick = (index: number) => {
    setSelectedIndex(index);
    //let dataCopy = [...data];
    showNftSelector();
    //if (dataCopy[index].id.startsWith('-')) {
    //showNftSelector();
    //return;
    //}
  };

  const onAvatarSelected = (avatar: Nft) => {
    hideNftSelector();
    let dataCopy = [...data];
    dataCopy[selectedIndex] = avatar;
    setData(dataCopy);
  };

  const onDownload = (src: string) => {
    storageService.current.SaveDownload(src);
  };

  const updatedAddresses = async () => {
    storageService.current = new LocalStorageService();
    let promises = [];
    storageService.current.GetAddresses().forEach(async (standard, address) => {
      promises.push(storageService.current.findNFTs(address, standard));
    });

    Promise.all(promises).then(() => {
      let newArray = [...storageService.current.getMyNFTs()];
      setNfts(newArray);
    });
  };

  if (!collection) {
    return (
      <>
        <Head>
          <title>Posterizer - {collection.name}</title>
        </Head>
        <ErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <div className='text-center tablet:max-w-max tablet:w-[85%] tablet:mx-auto'>
      <Head>
        <title>Posterizer - {collection.name}</title>
      </Head>
      <div className='py-4 tablet:mx-0 tablet:flex tablet:flex-cols tablet:justify-left'>
        <img
          src={collection.logo}
          className='h-16 w-16 tablet:h-24 tablet:w-24 mx-auto tablet:mx-4'
        />
        <div className='mx-4 tablet:mx-0 tablet:text-left'>
          <h2 className='text-4xl mt-4'>{collection.name}</h2>
          <h1 className='text-md mt-2 text-slate-500'>{greeting}</h1>
        </div>
      </div>

      <LayoutSelector
        colId={collectionId?.toString()}
        themeUpdated={themeUpdated}
      />

      <Canvas
        data={data}
        onAvatarClick={onAvatarClick}
        onDownload={onDownload}
        theme={theme}
      />

      <NftSelector
        nfts={nfts}
        inUseNfts={[]}
        visible={visibleModal}
        onAvatarSelected={onAvatarSelected}
        onCloseClick={hideNftSelector}
        updatedAddresses={updatedAddresses}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const collectionId = context.query['colId'];
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
