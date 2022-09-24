import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';



function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='main'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>

    </ThemeProvider>
  )

}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
