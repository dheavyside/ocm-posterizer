import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-center mb-8 mt-auto'>
      <p className='text-sm mt-20'>
        Built by <Link href="https://x.com/metablends" target="_blank" className="hover:underline">Metablends Studios</Link> based on the original Posterizer by <Link href="https://x.com/zmbby69" target="_blank" className="hover:underline">ZombieBoy</Link>
      </p>
    </footer>
  );
}
