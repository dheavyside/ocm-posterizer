import { Nft } from '../model/Nft';
import { ITheme, ThemeSize } from '../model/Theme';
import domtoimage from 'dom-to-image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faRefresh } from '@fortawesome/free-solid-svg-icons';
import AvatarImage from './AvatarImage';
import BackgroundSelector from './BackgroundSelector';
import StickerImage from './StickerImage';
import Loading from './Loading';
import Parser from 'html-react-parser';

type Props = {
  data: Nft[];
  theme: ITheme;
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

  const [customBackground, setCustomBackground] = useState({});

  useEffect(() => {
    if (downloading) {
      generateImage().then(() => {
        generateImage().then(() => {
          generateImage().then((doc: string) => {
            downloadURI(doc, `${theme.name}.png`);
            onDownload(doc);
            setDownloading(false);
          });
        });
      });
    }
  }, [downloading]);

  function generateImage() {
    const printWidth = new Map<ThemeSize, number>([
      ['twitter_banner', 1450],
      ['facebook_banner', 1450],
      ['opensea_banner', 1450],
      ['wuxga', 1920],
      ['square', 950],
      ['pillar', 950],
      ['tower', 950],
    ]);

    return new Promise((resolve) => {
      domtoimage
        .toPng(document.querySelector('#capture'), {
          width: printWidth.get(theme.size),
        })
        .then(function (dataUrl) {
          return resolve(dataUrl);
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
          setDownloading(false);
        });
    });
  }

  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function setBackground(style: any) {
    setCustomBackground(style);
  }

  return (
    <>
      <Loading show={downloading} />
      <div
        className={`container ${theme?.size + '_on_print'} ${
          downloading ? 'printing' : ''
        }`}
      >
        <div>
          <BackgroundSelector onChange={setBackground} />
        </div>
        <div className={`main-wrapper ${theme?.classNames} `}>
          <div
            id='capture'
            style={customBackground}
            className={`overflow-hidden inset-0 absolute ${
              theme?.backdrop?.classNames ?? ''
            }`}
          >
            {!theme || !theme.bgStickers || theme.bgStickers.length === 0
              ? ''
              : theme.bgStickers.map((item, index) => (
                  <StickerImage
                    key={index}
                    src={item.src}
                    index={index}
                    classNames={item.classNames}
                    shape={item.shape}
                    onStickerClick={() => {}}
                  />
                ))}
            {!theme || !theme.bgHtml || theme.bgHtml.length === 0
              ? ''
              : theme.bgHtml.map((item, index) => (
                  <div key={index}>{Parser(item)}</div>
                ))}
            {!theme || theme.nfts.length === 0
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
            {!theme || !theme.fgStickers || theme.fgStickers.length === 0
              ? ''
              : theme.fgStickers.map((item, index) => (
                  <StickerImage
                    key={index}
                    src={item.src}
                    index={index}
                    classNames={item.classNames + ' stamp'}
                    shape={item.shape}
                    onStickerClick={() => {}}
                  />
                ))}
            {!theme || !theme.fgHtml || theme.fgHtml.length === 0
              ? ''
              : theme.fgHtml.map((item, index) => (
                  <div key={index}>{Parser(item)}</div>
                ))}
          </div>
        </div>
        <div
          className={`phone:float-left text-tiny ${
            theme?.author ? '' : 'hidden'
          }`}
        >
          <span>Designed by </span>
          <a
            href={theme?.author?.url}
            target='_blank'
            rel='noreferrer'
            className='text-sm'
          >
            <span>{theme?.author?.name}</span>
          </a>
        </div>
        <div className='phone:float-right space-x-2 > * + *'>
          <button
            className='text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center'
            onClick={() => setBackground({})}
          >
            <FontAwesomeIcon icon={faRefresh} className='mr-1' /> Default
          </button>

          <button
            disabled={downloading ? true : false}
            className='text-sm bg-sj-blue hover:bg-sj-yellow hover:text-sj-blue text-white font-bold py-2 px-4 rounded-md inline-flex items-center'
            onClick={() => setDownloading(true)}
          >
            <FontAwesomeIcon icon={faDownload} className='mr-1' /> Download
          </button>
        </div>
      </div>
    </>
  );
}
