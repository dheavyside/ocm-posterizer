import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='text-center mb-8 mt-auto'>
      <div className='flex flex-col items-center gap-4'>
        <Link href="https://www.metablendstudios.com" target="_blank">
          <Image 
            src="/logos/mb-icon.svg" 
            alt="Metablend Studios" 
            width={40} 
            height={40}
            className="hover:opacity-80 transition-opacity fill-white"
          />
        </Link>
        <p className='text-sm'>
          Built by <Link href="https://x.com/metablends" target="_blank" className="hover:underline">Metablends Studios</Link> based on the original Posterizer by <Link href="https://x.com/zmbby69" target="_blank" className="hover:underline">ZombieBoy</Link>
        </p>
      </div>
    </footer>
  );
}
