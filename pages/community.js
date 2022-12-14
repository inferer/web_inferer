import LogoText from '../components/LogoText';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import {useState} from "react";
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { notification } from "antd";
import Head from 'next/head';
import H5Community from '../components/h5/community';
import LazyImage from '../components/LazyImage'
import Menu from '../components/pc/Menu';
import PCCommunity from '../components/pc/community';
import H5Footer from '../components/h5/H5Footer';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = async () => {
        // console.log("onSubmit")
        const SearchService = require("../api/SearchService");

        if(inputValue == "") {
            openNotification("No Email Provided.", false)
            return
        }

        let searchService = new SearchService();
        let response = await searchService.subscribe({
            email: inputValue
        });

        console.log("onSubmit response = " +  JSON.stringify(response))

        setInputValue("")
        openNotification("Success!", true)
    }

    const openNotification = (message, success) => {
        const args = {
            message: message,
            duration: 1.5,
            icon: success ? <CheckCircleOutlined style={{ color: '#618DFF' }} /> : <InfoCircleOutlined style={{ color: 'red' }} />,
            // style: {
            //     // width: 600,
            //     background: '#618DFF'
            // },
        };
        notification.open(args);
    };

    return (
        <>
        <Head>
            <title>Inferer - user idendity service in web3</title>
            {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        </Head>
        {/* <div className="hidden sm:block min-h-screen" style={{background: 'linear-gradient(127.27deg, #070E31 12.05%, #120622 91.72%)'}}>
            <PCCommunity />
        </div> */}
        <div className="faq-bg h5-wrap flex flex-col items-center justify-center sm:min-w-[1200px]">
          <H5Community 
            defaultValue={inputValue} 
            inputValueChange={setInputValue}
            onSubmit={email => {
            onSubmit()
          }}  />
          <H5Footer />
        </div>
        </>
    );
}
