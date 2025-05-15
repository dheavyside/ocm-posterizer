import React, { type ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <div className='min-h-[calc(100vh-60px)] flex flex-col justify-space-between'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
