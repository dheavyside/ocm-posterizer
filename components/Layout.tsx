import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
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
