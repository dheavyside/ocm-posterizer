import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/tw-global.css';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';

type PageProps = {
  navProps?: {
    onShare?: () => void;
    showShare?: boolean;
    collectionName?: string;
  };
};

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <Layout navProps={pageProps.navProps}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
