import { Nft } from '../model/Nft';
import { ITheme, ThemeSize } from '../model/Theme';
import domtoimage from 'dom-to-image';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRefresh } from '@fortawesome/free-solid-svg-icons';
import AvatarImage from './AvatarImage';
import BackgroundSelector from './BackgroundSelector';
import StickerImage from './StickerImage';
import Loading from './Loading';
import Parser from 'html-react-parser';

// Add a function to prepare elements before capture
function prepareImagesForCapture() {
  // Find all images in the capture area
  const images = document.querySelectorAll('#capture img');
  
  // Store original sources to restore after capture
  const originalSources: {element: HTMLImageElement, src: string}[] = [];
  
  // Process each image
  images.forEach((img) => {
    const imgElement = img as HTMLImageElement;
    
    // Skip images that are already data URLs
    if (imgElement.src.startsWith('data:')) return;
    
    // Store original source
    originalSources.push({element: imgElement, src: imgElement.src});
    
    // Set crossOrigin attribute
    imgElement.crossOrigin = 'anonymous';
    
    // Create a canvas to draw the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Only proceed if we can get context and the image is loaded
    if (ctx && imgElement.complete && imgElement.naturalWidth > 0) {
      canvas.width = imgElement.naturalWidth;
      canvas.height = imgElement.naturalHeight;
      ctx.drawImage(imgElement, 0, 0);
      
      try {
        // Try to convert to data URL
        const dataUrl = canvas.toDataURL('image/png');
        imgElement.src = dataUrl;
      } catch (e) {
        console.log('Could not convert image', e);
      }
    }
  });
  
  return originalSources;
}

// Add a function to restore images after capture
function restoreImages(originalSources: {element: HTMLImageElement, src: string}[]) {
  originalSources.forEach(({element, src}) => {
    element.src = src;
  });
}

type BackgroundStyle = {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
};

type Props = {
  data: Nft[];
  theme: ITheme | null;
  onAvatarClick?: (index: number) => void;
  onDownload?: (src: string) => void;
};

// Add type declaration for dom-to-image module
declare module 'dom-to-image' {
  export function toPng(
    node: HTMLElement, 
    options?: { width?: number }
  ): Promise<string>;
  export function toJpeg(
    node: HTMLElement, 
    options?: { width?: number, quality?: number }
  ): Promise<string>;
  export function toBlob(
    node: HTMLElement, 
    options?: { width?: number }
  ): Promise<Blob>;
  export function toSvg(
    node: HTMLElement, 
    options?: { width?: number }
  ): Promise<string>;
}

export default function Canvas({
  data,
  theme,
  onAvatarClick,
  onDownload,
}: Props) {
  const [downloading, setDownloading] = useState(false);
  const [customBackground, setCustomBackground] = useState<BackgroundStyle>({});
  const captureRef = useRef<HTMLDivElement>(null);

  // Function to proxy an image URL
  function getProxiedImageUrl(originalUrl: string): string {
    return `/api/imageProxy?url=${encodeURIComponent(originalUrl)}`;
  }
  
  // Preprocess images to use the proxy
  function preprocessImages() {
    // Find all img elements in the capture area
    const imgElements = document.querySelectorAll('#capture img') as NodeListOf<HTMLImageElement>;
    
    // Keep track of original sources
    const originalSources: {element: HTMLImageElement, src: string}[] = [];
    
    // Process each image
    imgElements.forEach(img => {
      // Skip if already using data URL or our proxy
      if (img.src.startsWith('data:') || img.src.includes('/api/imageProxy')) {
        return;
      }
      
      // Store original source
      originalSources.push({element: img, src: img.src});
      
      // Replace with proxied URL
      img.src = getProxiedImageUrl(img.src);
    });
    
    return originalSources;
  }
  
  // Restore original image sources
  function restoreImages(originals: {element: HTMLImageElement, src: string}[]) {
    originals.forEach(({element, src}) => {
      element.src = src;
    });
  }

  useEffect(() => {
    if (downloading && theme) {
      // First try dom-to-image with triple call pattern
      // Apply proxy to images first
      const originalSources = preprocessImages();
      
      generateClientSideImage()
        .then(dataUrl => {
          // Restore original image sources
          restoreImages(originalSources);
          handleSuccessfulDownload(dataUrl);
        })
        .catch(error => {
          console.error('Client-side image generation failed, falling back to server:', error);
          
          // Restore original image sources
          restoreImages(originalSources);
          
          // Fall back to server-side API
          generateServerSideImage()
            .then(dataUrl => {
              handleSuccessfulDownload(dataUrl);
            })
            .catch(serverError => {
              console.error('Server-side image generation also failed:', serverError);
              setDownloading(false);
            });
        });
    }
  }, [downloading, theme, onDownload, data]);

  // Client-side generation using dom-to-image
  async function generateClientSideImage(): Promise<string> {
    if (!theme) return Promise.reject('No theme selected');
    
    // Triple attempt pattern from original code
    try {
      await domToImagePromise(); // First attempt to prime caches
      await domToImagePromise(); // Second attempt
      return await domToImagePromise(); // Final attempt - return the result
    } catch (error) {
      throw error;
    }
  }

  // Individual dom-to-image promise
  function domToImagePromise(): Promise<string> {
    if (!theme) return Promise.reject('No theme selected');
    
    const printWidth = new Map<ThemeSize, number>([
      ['twitter_banner', 1450],
      ['facebook_banner', 1450],
      ['opensea_banner', 1450],
      ['wuxga', 1920],
      ['square', 950],
      ['pillar', 950],
      ['tower', 950],
    ]);

    return new Promise((resolve, reject) => {
      const element = document.querySelector('#capture');
      if (!element) {
        return reject('Capture element not found');
      }
      
      domtoimage
        .toPng(element, {
          width: printWidth.get(theme.size),
          imagePlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
        })
        .then(function (dataUrl) {
          return resolve(dataUrl);
        })
        .catch(function (error) {
          console.error('Dom-to-image failed:', error);
          reject(error);
        });
    });
  }

  // Server-side generation fallback
  async function generateServerSideImage(): Promise<string> {
    if (!theme) return Promise.reject('No theme selected');
    
    try {
      // Filter out placeholder NFTs (those with IDs starting with '-')
      const validNfts = data.filter(nft => !nft.id.startsWith('-'));
      console.log("Sending valid NFTs for screenshot:", validNfts.map(nft => nft.id));

      const response = await fetch('/api/screenshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme: theme.id,
          nfts: validNfts.map(nft => nft.id).join(',')
        }),
      });

      if (!response.ok) {
        throw new Error(`Screenshot failed: ${response.statusText}`);
      }

      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error generating image on server:', error);
      throw error;
    }
  }

  // Handle successful download from either method
  function handleSuccessfulDownload(dataUrl: string) {
    if (onDownload) {
      // Let the parent handle the download
      onDownload(dataUrl);
    } else {
      // Only if parent doesn't have an onDownload handler
      downloadURI(dataUrl, `${theme!.name}.png`);
    }
    setDownloading(false);
  }

  function downloadURI(uri: string, name: string) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function setBackground(style: BackgroundStyle = {}) {
    setCustomBackground(style);
  }

  if (!theme) {
    return (
      <div className="p-8 text-center text-gray-500">
        Please select a theme to get started
      </div>
    );
  }

  return (
    <>
      <Loading show={downloading} />
      <div
        className={`container ${theme.size + '_on_print'} ${
          downloading ? 'printing' : ''
        }`}
      >
        <div>
          <BackgroundSelector onChange={setBackground} />
        </div>
        <div className={`main-wrapper ${theme.classNames} `}>
          <div
            id='capture'
            ref={captureRef}
            style={customBackground}
            className={`overflow-hidden inset-0 absolute ${
              theme.backdrop?.classNames ?? ''
            }`}
          >
            {!theme.bgStickers || theme.bgStickers.length === 0
              ? ''
              : theme.bgStickers.map((item, index) => (
                  item.src && (
                    <StickerImage
                      key={index}
                      src={item.src}
                      index={index}
                      classNames={item.classNames}
                      shape={item.shape}
                      onStickerClick={() => {}}
                    />
                  )
                ))}
            {!theme.bgHtml || theme.bgHtml.length === 0
              ? ''
              : theme.bgHtml.map((item, index) => (
                  <div key={index}>{Parser(item)}</div>
                ))}
            {theme.nfts.length === 0
              ? ''
              : theme.nfts.map((item, index) => (
                  <AvatarImage
                    key={index + data[index].id}
                    data={data}
                    index={index}
                    classNames={item.classNames}
                    shape={item.shape}
                    onAvatarClick={onAvatarClick}
                  />
                ))}
            {!theme.fgStickers || theme.fgStickers.length === 0
              ? ''
              : theme.fgStickers.map((item, index) => (
                  item.src && (
                    <StickerImage
                      key={index}
                      src={item.src}
                      index={index}
                      classNames={item.classNames + ' stamp'}
                      shape={item.shape}
                      onStickerClick={() => {}}
                    />
                  )
                ))}
            {!theme.fgHtml || theme.fgHtml.length === 0
              ? ''
              : theme.fgHtml.map((item, index) => (
                  <div key={index}>{Parser(item)}</div>
                ))}
          </div>
        </div>
        <div
          className={`phone:float-left text-tiny ${
            theme.author ? '' : 'hidden'
          }`}
        >
          <span>Designed by </span>
          <a
            href={theme.author?.url}
            target='_blank'
            rel='noreferrer'
            className='text-sm'
          >
            <span>{theme.author?.name}</span>
          </a>
        </div>
        <div className='phone:float-right space-x-2 > * + *'>
          <button
            className='inline-flex items-center px-4 py-2 text-sm font-bold text-gray-800 bg-gray-300 rounded-md hover:bg-gray-400'
            onClick={() => setBackground({})}
          >
            <FontAwesomeIcon icon={faRefresh} className='mr-1' /> Default
          </button>

          <button
            disabled={downloading}
            className='inline-flex items-center px-4 py-2 text-sm font-bold text-white rounded-md bg-sj-blue hover:bg-sj-yellow hover:text-sj-blue'
            onClick={() => setDownloading(true)}
          >
            <FontAwesomeIcon icon={faDownload} className='mr-1' /> Download
          </button>
        </div>
      </div>
    </>
  );
}
