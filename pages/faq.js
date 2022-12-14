import LogoText from '../components/LogoText';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import H5Faq from '../components/h5/faq/index'
import Link from "next/link";
import router from "next/router";
import Head from 'next/head';

export default function Home() {
    return (
      <>
      <Head>
        <title>Inferer - user idendity service in web3</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <div className="faq-bg h5-wrap sm:min-w-[1200px]">
        <H5Faq />
      </div>
      </>
    );
}
