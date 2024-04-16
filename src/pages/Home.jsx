
import Highlight from '../components/commom/Highlight'
import ProductSection from '../components/commom/ProductSection'
import Supplier from '../components/carousel/Supplier'
import Banner from '../components/commom/Banner'
import BlogSection from '../components/commom/BlogSection'

function Home() {

  return (
    <>
      <Highlight />
      <ProductSection />
      <Supplier />
      <Banner imageUrl="/public/images/banners/b2.png" />
      <ProductSection />
      <BlogSection />
    </>
  )
}

export default Home
