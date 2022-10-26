import LogoText from '../components/LogoText';
import HeaderBlaner from '../components/Header';
import ContactCard from '../components/ContactCard';
import LaunchAppButton from '../components/LaunchAppButton';
import Link from "next/link";
import router from "next/router";
import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">

            {/*导航栏*/}
            <HeaderBlaner/>
            <Head>
              <title>Inferer - user identity analysis service in web 3</title>
              {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
            </Head>


            {/* <div style={{width: "100%", height: "58.5px"}}/> */}

            {/*page 1*/}
            <div className="subpage_1">
                <div className="coming-container">
                    <span className="coming-container-text">:-) Coming Soon...</span>
                </div>
                <img src="/home_curve_yun.png" style={{marginTop: '0px', width: '100%', height: '100%'}}></img>
            </div>
            <style jsx>{`
            .subpage_1{
                text-align:center;
            }

            .coming-container{
                position: fixed;
                padding-top: 20%;
                margin: 0 40%;
                text-align: center;
            }

            .coming-container-text{
                color: white;
                font-size: 4vh;
                z-index: 999;
                margin: 0 auto;
            }

            @media (max-width:480px){
                .coming-container{
                    padding-top: 40%;
                }
  
              }

            `}</style>
            <style global jsx>{`
              body {
                width: 100%;
                background-color: #0d0b17;
              }
            `}</style>
        </div>
    );
}
