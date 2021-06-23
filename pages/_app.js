import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdBanner from '../components/AdBanner'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AdBanner />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}

export default MyApp
