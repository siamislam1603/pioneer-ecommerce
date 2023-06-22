import Banner from './Banner/Banner'
import Branding from './Branding/Branding'
import CategoricalProducts from './CategoricalProducts/CategoricalProducts'
import Featured from './Featured/Featured'
import Trending from './Trending/Trending'

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <CategoricalProducts />
      <Featured />
      <Branding/>
    </>
  )
}

export default Home
