import '../styles/globals.css'
import { W3PocketContextProvider } from '@/components/W3Pocket'

function MyApp({ Component, pageProps }) {

  return (
    <W3PocketContextProvider>
      <Component {...pageProps} />
    </W3PocketContextProvider>
  )
}

export default MyApp
