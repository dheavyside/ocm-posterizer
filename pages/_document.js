// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=optional'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css?family=Khula:400,700&display=optional'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
