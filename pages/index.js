import Layout from '../components/Layout'
import Header from '../components/Header'
import Body from '../components/Body'

// import more as needed...

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <Body />
        {/* <SectionAbout /> */}
        {/* <SectionNarratives /> */}
        {/* <SectionTiles /> */}
        
        

      </main>
      <footer>{/* optional */}</footer>
    </Layout>
  )
}