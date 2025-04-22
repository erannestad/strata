import Layout from '../components/Layout'
import Header from '../components/Header'
import Body from '../components/Body'
import Canvas from '../components/Canvas'


// import more as needed...

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <Body />
        <Canvas />

        {/* <SectionAbout /> */}
        {/* <SectionNarratives /> */}
        {/* <SectionTiles /> */}
        
      </main>
      <footer>{/* optional */}</footer>
    </Layout>
  )
}