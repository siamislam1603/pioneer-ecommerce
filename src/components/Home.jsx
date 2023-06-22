import Banner from './Banner/Banner'
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
    </>
  )
}

export default Home
