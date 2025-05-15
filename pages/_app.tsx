import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/tw-global.css';
import '../styles/globals.scss';

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
    </Layout>
  );
}

export default MyApp;
