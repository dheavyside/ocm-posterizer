import styles from './NftSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faWallet,
  faAddressBook,
  faTrash,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Nft, standard } from '../model/Nft';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import { isAddress } from '../services/eth-util.service';
import Image from 'next/image';

export interface INftSelectorProps {
  nfts: Nft[];
  inUseNfts: Nft[];
  visible: boolean;
  onAvatarSelected?: (avatar: Nft) => void;
  onCloseClick?: () => void;
  updatedAddresses?: () => void;
}

const NftSelector = (props: INftSelectorProps) => {
  const [wallets, setWallets] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState([]);

  const [showWallet, setShowWallet] = useState(
    props.nfts.length === 0 ? true : false
  );
  const [filter, setFilter] = useState({
    code: 'ALL',
    id: '',
  });
  const initialized = useRef(false);
  const storageService = useRef<LocalStorageService>(null);

  useEffect(() => {
    setFilteredNfts(
      props.nfts.filter(
        (nft) =>
          (filter.code === 'ALL' && filter.id === '') ||
          (filter.code === nft.code && filter.id === '') ||
          (nft.id.startsWith(filter.id) &&
            (filter.code === 'ALL' || filter.code === nft.code))
      )
    );
  }, [filter, props.nfts]);

  // Retrieve all partner NFTs
  useEffect(() => {
    async function getWallets() {
      storageService.current = new LocalStorageService();
      let arrayWallets = Array.from(storageService.current.GetAddresses());
      setWallets(arrayWallets);
      setShowWallet(arrayWallets.length === 0 ? true : false);
    }

    if (!initialized.current) {
      getWallets();
      initialized.current = true;
    }
  }, []);

  function search() {
    const collectionId = document.getElementById(
      'collectionId'
    ) as HTMLSelectElement;
    const keyword = document.getElementById('keyword') as HTMLInputElement;
    setFilter({ code: collectionId.value, id: keyword.value });
  }

  function shorten(address: string): string {
    return (
      address.substring(0, 6) +
      '...' +
      address.substring(address.length - 4, address.length)
    );
  }

  async function addAddressFromClipboard() {
    const newAddress = await navigator.clipboard.readText();
    if (isAddress(newAddress.toLowerCase())) {
      storageService.current.AddAddress(newAddress);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
      setShowWallet(false);
    }
  }

  function addAddress() {
    const newAddress = (document.getElementById('address') as HTMLInputElement)
      .value;
    if (isAddress(newAddress.toLowerCase())) {
      storageService.current.AddAddress(newAddress);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
      setShowWallet(false);
      (document.getElementById('address') as HTMLInputElement).value = '';
    }
  }

  function removeAddress(type: standard, address: string) {
    if (isAddress(address.toLowerCase())) {
      storageService.current.RemoveAddress(type, address);
      setWallets(Array.from(storageService.current.GetAddresses()));
      props.updatedAddresses();
    }
  }

  function onNftSelected(nft: Nft) {
    props.onAvatarSelected(nft);

    (document.getElementById('keyword') as HTMLInputElement).value = '';
    if (initialized.current) {
      search();
    }
  }

  return (
    <div
      className={`fixed inset-0 text-white bg-black z-20 max-w-max mx-auto ${
        props.visible ? '' : 'hidden'
      }`}
    >
      <div className='flex justify-between'>
        <button
          className={`border-0 bg-transparent text-stone-400 align-left text-2xl mx-4 mt-4`}
          onClick={() => {
            props.onCloseClick();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button
          className={`border-0 bg-transparent text-white hover:text-sj-yellow align-left text-2xl mx-4 mt-4`}
          onClick={() => setShowWallet(!showWallet)}
        >
          <FontAwesomeIcon icon={showWallet ? faUserCircle : faWallet} />
        </button>
      </div>
      <div
        className={`mx-4 mt-6 tiny:w-[360px] tiny:mx-auto ${
          showWallet ? '' : 'hidden'
        }`}
      >
        <h2 className='my-5'>Wallets</h2>
        <div>
          {wallets.map(([key, value]) => (
            <div
              key={key}
              className='text-sm flex flex-row items-center justify-between mt-4'
            >
              <span className='align-middle'>{shorten(key)}</span>
              <span className='ml-4'>{value}</span>
              <button
                className='bg-rose-600 px-2 py-1 rounded-sm my-auto'
                onClick={() => removeAddress(value, key)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
          <div className='text-sm flex flex-row items-center justify-between mt-4'>
            <input
              className='py-2 px-4 grow text-white bg-[#3b3b3b]'
              type='text'
              id='address'
              placeholder='Wallet address...'
            ></input>
            <button
              className='bg-green-500 px-4 py-1 rounded-sm my-auto flex-none ml-3'
              onClick={() => addAddress()}
            >
              <FontAwesomeIcon icon={faAddressBook} className='mr-1' />
              <em>Add</em>
            </button>
          </div>
        </div>
      </div>
      <div className={`${showWallet ? 'hidden' : ''}`}>
        <div className='mt-8 mx-8 flex flex-col phone:flex-row justify-left tablet:justify-center'>
          <select
            className='px-4 py-2 mb-4 phone:mb-0 phone:mr-4 text-white bg-[#3b3b3b]'
            name='nfts'
            id='collectionId'
            onChange={search}
          >
            <option value='ALL'>All NFT</option>
            <option value='ERC721_OCMONK'>OCM Genesis</option>
            <option value='ERC721_KARMA'>OCM Karma</option>
            <option value='ERC721_SJ'>SJ Genesis</option>
            <option value='ERC721_WFNH-BE'>WF Bronze Ed</option>
          </select>
          <input
            className='px-4 py-2 text-white bg-[#3b3b3b]'
            id='keyword'
            type='text'
            onChange={search}
            placeholder='Search by Token ID'
          />
        </div>
        <div className={`overflow-y-auto h-[85vh] py-12`}>
          {props.nfts.length === 0 || filteredNfts.length === 0 ? (
            <div className='mb-4'>No NFTs Found</div>
          ) : (
            <div className='mb-4'>{filteredNfts.length} NFTs Found</div>
          )}

          {props.nfts.length === 0 ? (
            <div>No supported NFTs found.</div>
          ) : (
            <div
              className={`grid grid-cols-3 tiny:grid-cols-4 phone:grid-cols-5 tablet:grid-cols-6 desktop:grid-cols-8 gap-4 mx-6`}
            >
              {filteredNfts.map((nft) => (
                <div
                  className='hover:cursor-pointer hover:scale-110 ease-in-out duration-300'
                  key={`${nft.code}#${nft.id}`}
                >
                  <Image
                    src={nft.image_url}
                    alt='Missing'
                    width={100}
                    height={100}
                    layout='responsive'
                    onClick={() => onNftSelected(nft)}
                    loading='lazy'
                    className='rounded-lg'
                  />
                  <span className='text-sm'>{nft.id}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NftSelector;
