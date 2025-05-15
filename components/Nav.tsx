import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='bg-[#16181d] text-white'>
      <div className='mx-auto flex justify-center items-center h-[60px]'>
        <Link href='/'>
          <h1 className='text-3xl text-white cursor-pointer hover:text-[#69F5FF] transition-colors'>POSTERIZER</h1>
        </Link>
      </div>
    </nav>
  );
}
