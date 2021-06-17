import Head from 'next/head'
import Header from '../components/IndexSections/Header'
import Gallery from '../components/IndexSections/Gallery'
import MenuCategories from '../components/IndexSections/MenuCategories'
import Values from '../components/IndexSections/Values'
import Contact from '../components/IndexSections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabores de Laura</title>
      </Head>

      <main className="min-h-screen">
        <Header />        
        <MenuCategories />
        <Values />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}