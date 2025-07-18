import { X, Plus } from 'lucide-react';
import { Nft, tokenCode } from '../model/Nft';
import { useState } from 'react';

export interface INftSelectorProps {
  visible: boolean;
  onAvatarSelected?: (avatar: Nft, slot: number) => void;
  onFullSetSelected?: (nfts: Nft[], baseSlot: number) => void;
  onCloseClick?: () => void;
  isFullSetFriday?: boolean;
  selectedSlot?: number;
}

const NftSelector = (props: INftSelectorProps) => {
  const [tokenInput, setTokenInput] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<tokenCode>('ONCHAINMONKEY');
  const [errorMessage, setErrorMessage] = useState<string>('');

  function getImageUrl(code: tokenCode, id: string): string {
    switch (code) {
      case 'ONCHAINMONKEY':
        return `https://d3q7x2s6555pey.cloudfront.net/png/${id}.png`;
      case 'KATOSHI_CLASSIC':
        // Pad the ID to 4 digits for Katoshi Classic
        const paddedClassicId = id.padStart(4, '0');
        return `https://ocm-karma-png.s3.us-east-2.amazonaws.com/1${paddedClassicId}.png`;
      case 'KATOSHI_PRIME':
        // Pad the ID to 4 digits for Katoshi Prime
        const paddedPrimeId = id.padStart(4, '0');
        return `https://ocm-karma-png.s3.us-east-2.amazonaws.com/2${paddedPrimeId}.png`;
    }
    return '';
  }

  function createNftFromToken() {
    if (!tokenInput) return;
    
    // Strip leading zeros and get the first positive integer
    const cleanedInput = tokenInput.replace(/^0+/, '');
    // If the input was only zeros, use "1" as the minimum valid value
    const finalInput = cleanedInput || '1';
    
    // Validate Genesis NFT ID range (1-9999)
    const tokenNumber = parseInt(finalInput);
    if (isNaN(tokenNumber) || tokenNumber < 1 || tokenNumber > 9999) {
      setErrorMessage('Genesis NFT ID must be between 1 and 9999');
      return;
    }
    
    // Clear error message if valid
    setErrorMessage('');
    
    if (props.isFullSetFriday) {
      // For Full Set Friday theme, automatically create all three NFTs
      const nfts: Nft[] = [
        {
          code: 'ONCHAINMONKEY',
          standard: 'ERC721',
          id: finalInput,
          image_url: getImageUrl('ONCHAINMONKEY', finalInput),
          image_url_os: getImageUrl('ONCHAINMONKEY', finalInput)
        },
        {
          code: 'KATOSHI_CLASSIC',
          standard: 'ERC721',
          id: `1${finalInput.padStart(4, '0')}`,
          image_url: getImageUrl('KATOSHI_CLASSIC', finalInput),
          image_url_os: getImageUrl('KATOSHI_CLASSIC', finalInput)
        },
        {
          code: 'KATOSHI_PRIME',
          standard: 'ERC721',
          id: `2${finalInput.padStart(4, '0')}`,
          image_url: getImageUrl('KATOSHI_PRIME', finalInput),
          image_url_os: getImageUrl('KATOSHI_PRIME', finalInput)
        }
      ];

      // Auto-populate all three slots
      if (typeof props.selectedSlot === 'number') {
        const baseSlot = Math.floor(props.selectedSlot / 3) * 3;
        
        // Use the new full set handler if available, otherwise fall back to individual updates
        if (props.onFullSetSelected) {
          props.onFullSetSelected(nfts, baseSlot);
        } else if (props.onAvatarSelected) {
          // Fallback to individual updates if onFullSetSelected is not provided
          props.onAvatarSelected(nfts[0], baseSlot);
          props.onAvatarSelected(nfts[1], baseSlot + 1);
          props.onAvatarSelected(nfts[2], baseSlot + 2);
        }
        
        // Close the dialog after all slots are populated
        if (props.onCloseClick) {
          setTimeout(() => {
            props.onCloseClick?.();
          }, 100);
        }
      }
    } else {
      // For other themes, create single NFT as before
      const nft: Nft = {
        code: selectedCollection,
        standard: 'ERC721',
        id: selectedCollection === 'ONCHAINMONKEY' 
          ? finalInput 
          : `${selectedCollection === 'KATOSHI_CLASSIC' ? '1' : '2'}${finalInput.padStart(4, '0')}`,
        image_url: getImageUrl(selectedCollection, finalInput),
        image_url_os: getImageUrl(selectedCollection, finalInput)
      };

      if (props.onAvatarSelected) {
        props.onAvatarSelected(nft, props.selectedSlot || 0);
      }
      
      // Close immediately for single NFT mode
      if (props.onCloseClick) {
        props.onCloseClick();
      }
    }
    
    setTokenInput('');
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      createNftFromToken();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-200 ${
        props.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`bg-[#1a1a1a] rounded-lg shadow-xl transform transition-transform duration-200 w-[min(90vw,24rem)] ${
        props.visible ? 'scale-100' : 'scale-95'
      }`}>
        <div className='flex items-center justify-between p-[3vw] sm:p-4 border-b border-gray-700'>
          <h2 className='text-[4.5vw] sm:text-lg font-semibold text-white'>
            {props.isFullSetFriday ? 'Select Full Set' : 'Select NFT'}
          </h2>
          <button
            className='transition-colors text-stone-400 hover:text-white'
            onClick={props.onCloseClick}
          >
            <X className='w-[5vw] h-[5vw] sm:w-6 sm:h-6' />
          </button>
        </div>
        <div className='p-[4vw] sm:p-6 w-full'>
          <div className='flex flex-col gap-[3vw] sm:gap-4 w-full'>
            {!props.isFullSetFriday && (
              <select
                className='w-full px-[3vw] py-[2vw] sm:px-3 sm:py-2 text-[3.8vw] sm:text-base text-white bg-[#3b3b3b] rounded-md border border-gray-600 focus:outline-none focus:border-green-500'
                name='nfts'
                id='collectionId'
                onChange={(e) => setSelectedCollection(e.target.value as tokenCode)}
                value={selectedCollection}
              >
                <option value='ONCHAINMONKEY'>OCM Genesis</option>
                <option value='KATOSHI_CLASSIC'>Katoshi Classic</option>
                <option value='KATOSHI_PRIME'>Katoshi Prime</option>
              </select>
            )}
            <div className='flex flex-col gap-[2vw] sm:gap-2 w-full'>
              <label className='mb-[2vw] sm:mb-2 text-[3.8vw] sm:text-base text-white md:text-lg'>Enter OCM GENESIS #ID</label>
              <div className='flex items-center gap-[2vw] sm:gap-2 w-full'>
                <span className='text-[6vw] sm:text-2xl font-medium text-white shrink-0'>#</span>
                <div className='flex-1 min-w-0 max-w-[75%] sm:max-w-none'>
                  <input
                    className='w-full min-w-0 px-3 py-3 text-[4vw] sm:text-lg text-white text-left placeholder:text-left placeholder:text-gray-400 bg-[#3b3b3b] rounded-md border border-gray-600 focus:outline-none focus:border-[#00FFFF]'
                    type='text'
                    value={tokenInput}
                    onChange={(e) => {
                      setTokenInput(e.target.value);
                      setErrorMessage('');
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder='i.e 1 or 234 or 5678'
                    style={{ textAlign: 'left' }}
                  />
                </div>
                <button
                  className='shrink-0 w-12 h-12 flex items-center justify-center text-black transition-colors bg-[#00FFFF] rounded-md hover:bg-[#00cccc] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:ring-opacity-50'
                  onClick={createNftFromToken}
                >
                  <Plus className='w-6 h-6' />
                </button>
              </div>
              {errorMessage && (
                <p className='mt-[2vw] sm:mt-1 text-[3vw] sm:text-sm text-red-500'>{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftSelector;
