import '../styles/globals.css'
import '../components/HeroBanner/HeroBanner.css'

import {Layout} from '../components/index'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
