import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ITheme } from '../model/Theme';
import { Nft } from '../model/Nft';
import Canvas from '../components/Canvas';

export default function RenderPage() {
  const router = useRouter();
  const [theme, setTheme] = useState<ITheme | null>(null);
  const [nfts, setNfts] = useState<Nft[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const { theme: themeId, nfts: nftIds } = router.query;
    
    if (themeId && nftIds) {
      // Load theme data
      fetch(`/api/themes/${themeId}`)
        .then(res => res.json())
        .then(themeData => {
          setTheme(themeData);
        })
        .catch(err => {
          console.error('Error loading theme:', err);
          setError('Failed to load theme data');
        });

      // Load NFT data
      const nftIdList = (nftIds as string).split(',');
      Promise.all(
        nftIdList.map(id =>
          fetch(`/api/nfts/${id}`).then(res => res.json())
        )
      )
        .then(nftData => {
          setNfts(nftData);
        })
        .catch(err => {
          console.error('Error loading NFTs:', err);
          setError('Failed to load NFT data');
        });
    }
  }, [router.isReady, router.query]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!theme || nfts.length === 0) {
    return <div className="loading">Loading theme and NFTs...</div>;
  }

  return (
    <div id="capture" style={{ 
      width: '1920px', 
      height: '1080px',
      backgroundColor: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Canvas
        data={nfts}
        theme={theme}
        onAvatarClick={() => {}}
        onDownload={() => {}}
      />
    </div>
  );
} 