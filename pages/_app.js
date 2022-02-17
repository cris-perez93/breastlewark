import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useSWR , {SWRConfig} from 'swr'

const fetcher = (...args) => fetch(...args).then(response => response.json());

function MyApp({ Component, pageProps }) {
  return(
    <SWRConfig value = {{fetcher}}>
       <Component {...pageProps} />
   </SWRConfig>
   )
}

export default MyApp
