import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutTemplate, Share2 } from 'lucide-react';

interface NavProps {
  onShare?: () => void;
  showShare?: boolean;
  collectionName?: string;
}

export default function Nav({ onShare, showShare, collectionName }: NavProps) {
  return (
    <nav className='bg-[#16181d] text-white'>
      <div className='container mx-auto px-4 h-[60px] relative flex items-center justify-between'>
        {/* Posterizer text on the left */}
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <LayoutTemplate 
              size={24}
              strokeWidth={1.5}
              className="text-[#00FFFF] transition-colors"
            />
            <h1 className='hidden text-lg font-medium text-white transition-colors cursor-pointer sm:block'>
              <span>The Posterizer</span>
            </h1>
          </div>
        </Link>

        {/* OCM Logo in the middle */}
        <div className='absolute flex items-center -translate-x-1/2 left-1/2'>
          {collectionName === 'OnChain Monkey' && (
            <Image
              src="/logos/OCMLogo-W-H.png"
              width={140}
              height={42}
              alt="OCM Logo"
              priority
              style={{ width: 'auto', height: '42px' }}
            />
          )}
        </div>

        {/* Right side content */}
        <div>
          {showShare ? (
            <button 
              onClick={onShare}
              className='flex items-center gap-2 text-sm font-medium text-white hover:text-[#00FFFF] transition-colors'
            >
              Share
              <Share2 size={18} />
            </button>
          ) : !collectionName && (
            <span className='text-sm text-slate-400'>by Metablend Studios</span>
          )}
        </div>
      </div>
    </nav>
  );
}
