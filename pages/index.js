import Head from 'next/head'
import Header from '../components/IndexSections/Header'
import Gallery from '../components/IndexSections/Gallery'
import MenuCategories from '../components/IndexSections/MenuCategories'
import Values from '../components/IndexSections/Values'
import Contact from '../components/IndexSections/Contact'
import Testimony from '../components/IndexSections/Testimony'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabores de Laura: Pastelería & Repostería</title>
        <meta name="description" content="Venta de tortas, cupcakes, tartaletas y más. La mejor calidad en los Altos Mirandinos." />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="min-h-screen">
        <Header />        
        <MenuCategories />
        <Values />
        <Testimony />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}