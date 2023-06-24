import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {fetchHomeData} from '../actions/home'
import Banner from './Banner/Banner'
import Branding from './Branding/Branding'
import CategoricalProducts from './CategoricalProducts/CategoricalProducts'
import Featured from './Featured/Featured'
import Footer from './Footer/Footer'
import LoaderLayout from './LoaderLayout'
import Testimonial from './Testimonial/Testimonial'
import Trending from './Trending/Trending'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeData())
  }, [dispatch])
  return (
    <LoaderLayout>
      <Banner />
      <Trending />
      <CategoricalProducts />
      <Featured />
      <Branding />
      <Testimonial />
      <Footer />
    </LoaderLayout>
  )
}

export default Home
