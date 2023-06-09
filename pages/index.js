import Head from 'next/head'
import H5Home from '../components/h5/home/index';
import PCHome from '../components/pc/home';

export default function Home() {
    return (
      <>
        <Head>
          <title>Inferer - user idendity analysis service in web 3</title>
          {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        <div className=' hidden sm:block min-w-[1200px]'>
          <PCHome />
        </div>
        <div className="block sm:hidden h5-wrap bg-black">
          <H5Home />
        </div>
      </>

    );
}