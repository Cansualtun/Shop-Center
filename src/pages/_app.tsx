import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '@/store/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>  
  )
}

