import Head from 'next/head';
import { COLLECTIONS } from '../data/collections';

export default function Home() {
  return (
    <div className='max-w-max mx-auto w-[90%] mt-6'>
      <Head>
        <title>Posterizer - Let&apos;s create!</title>
      </Head>
      <h2 className='mb-4 text-xl text-center tablet:text-left'>
        Select a theme
      </h2>
      <div className='grid grid-cols-3 gap-6 tiny:grid-cols-4 phone:grid-cols-5 tablet:grid-cols-6 desktop:grid-cols-8'>
        {COLLECTIONS.map((col, index) => (
          <a key={index} href={`/collection/${col.id}`}>
            <div
              className={`bg-[#34363a] overflow-hidden p-2 rounded-[1em] ease-in duration-100 hover:scale-110 hover:drop-shadow-2xl`}
            >
              <img
                src={col.logo}
                alt={col.name}
                className='rounded-lg aspect-square'
              ></img>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
