import styles from './BackgroundSelector.module.scss';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onChange?: ({}) => void;
};

export default function BackgroundSelector({ onChange }: Props) {
  const [color, setColor] = useState('#');
  const [bgStyle, setBgStyle] = useState({});
  const [showColorSelector, setShowColorSelector] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      window.addEventListener(
        'click',
        (e) => {
          let target = e.target as Element;

          if (target.closest(`.${styles.colorSelector}`) === null) {
            setShowColorSelector(false);
          }
        },
        true
      );
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    if (color !== '#') {
      let style = {
        backgroundColor: color,
        backgroundImage: 'none',
      };
      setBgStyle(style);
      onChange(style);
    }
  }, [color]);

  function openFiles() {
    (document.getElementById('uploader') as HTMLInputElement).click();
  }

  function upload() {
    var file = (document.getElementById('uploader') as HTMLInputElement)
      .files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      let style = {
        backgroundImage: `url('${reader.result}')`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
      };
      setBgStyle(style);
      onChange(style);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
    }
  }

  return (
    <div className={styles.customBackgroundWrapper}>
      <input
        type='file'
        id='uploader'
        className='hidden'
        onChange={() => upload()}
      />

      <div
        className={styles.colorButton}
        style={bgStyle}
        onClick={() => setShowColorSelector(!showColorSelector)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`${styles.colorSelector} ${
            showColorSelector ? '' : styles.hide
          }`}
        >
          <div>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <div className={`text-sm ${styles.hexWrapper}`}>
            <span>HEX</span>
            <HexColorInput
              prefixed={true}
              color={color}
              onChange={setColor}
              className='text-white bg-[#3b3b3b]'
            />
          </div>
          <div>
            <button
              onClick={() => openFiles()}
              className='text-tiny bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-sm inline-flex items-center'
            >
              <FontAwesomeIcon icon={faImage} className='mr-2' />
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
