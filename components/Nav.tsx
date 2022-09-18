import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className='bg-[#16181d] text-white'>
      <div className='max-w-max mx-auto flex flex-row justify-start items-center h-[60px] space-x-5 > * + *'>
        <div>
          <h1 className='ml-4 text-3xl'>Posterizer</h1>
        </div>

        <Link href='/'>
          <a
            className={`hover:text-[#69f5ff] hover:scale-110 ease-in-out duration-300 ${
              currentRoute === '/' ? 'text-[#69f5ff]' : 'text-white'
            }`}
          >
            Create!
          </a>
        </Link>
        <Link href='/history'>
          <a
            className={`hover:text-[#69f5ff] hover:scale-110 ease-in-out duration-300 ${
              currentRoute === '/history' ? 'text-[#69f5ff]' : 'text-white'
            }`}
          >
            History
          </a>
        </Link>
      </div>
    </nav>
  );
}
