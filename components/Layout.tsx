import React, { type ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode;
  navProps?: {
    onShare?: () => void;
    showShare?: boolean;
    collectionName?: string;
  };
}

export default function Layout({ children, navProps }: LayoutProps) {
  return (
    <>
      <Nav {...navProps} />
      <div className='min-h-[calc(100vh-60px)] flex flex-col justify-space-between'>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
