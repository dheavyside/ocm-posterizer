import Link from 'next/link';
import sjLogo from '../public/shonen-junk-logo.svg';
import wfLogo from '../public/wize-fellaz-logo.png';

export default function Footer() {
  return (
    <footer className='text-center mb-8 mt-auto'>
      <h5 className='text-xs mt-20'>Create with</h5>
      <div className='mt-auto flex flex-row justify-center mt-3 items-center '>
        <div>
          <Link href='https://shonenjunk.xyz'>
            <a target='_blank'>
              <img src={sjLogo.src} className='h-14' />
            </a>
          </Link>
        </div>
        <span className='text-4xl mx-8'>X</span>
        <div>
          <Link href='https://www.wizefellaz.com'>
            <a target='_blank'>
              <img src={wfLogo.src} className='h-14' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
