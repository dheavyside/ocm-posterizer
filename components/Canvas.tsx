import { Nft } from '../model/Nft';
import { ITheme, ThemeSize } from '../model/Theme';
import html2canvas from 'html2canvas';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRefresh } from '@fortawesome/free-solid-svg-icons';
import AvatarImage from './AvatarImage';
import StickerImage from './StickerImage';
import Loading from './Loading';
import Parser from 'html-react-parser';

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

export default function Canvas({
  data,
  theme,
  onAvatarClick,
  onDownload,
}: Props) {
  const [downloading, setDownloading] = useState(false);
  const [customBackground, setCustomBackground] = useState<BackgroundStyle>({});
  const captureRef = useRef<HTMLDivElement>(null);

  async function generateImage() {
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
      console.error('Error generating image:', error);
      throw error;
    }
  }

  useEffect(() => {
    if (downloading && theme) {
      generateImage()
        .then((dataUrl) => {
          if (dataUrl) {
            if (onDownload) {
              // Let the parent handle the download
              onDownload(dataUrl);
            } else {
              // Only if parent doesn't have an onDownload handler
              downloadURI(dataUrl, `${theme.name}.png`);
            }
          }
          setDownloading(false);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
          setDownloading(false);
        });
    }
  }, [downloading, theme, onDownload]);

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
            disabled={downloading}
            className='inline-flex items-center px-6 py-3 text-base font-bold text-gray-800 rounded-md bg-sj-neon hover:bg-sj-yellow hover:text-white'
            onClick={() => setDownloading(true)}
          >
            <FontAwesomeIcon icon={faDownload} className='mr-2' /> Download
          </button>
        </div>
      </div>
    </>
  );
}
