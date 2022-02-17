import Head from "next/head";
import { Fragment } from "react";




const Layout = props => {
    return (
        <Fragment>
            <Head>
            <title>BrastlewarkGame</title>
            
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;900&display=swap" rel="stylesheet"/>
            </Head>

             <main>{props.children}</main>
            
        </Fragment>
      );
}
 
export default Layout;