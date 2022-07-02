import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://bcjnp30m2bi4.usemoralis.com:2053/server"
      appId="Ri1psLecow9mFw9xXhr0cmYEtRAd8xxfwTWgXtun"
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
