import {Box, Container, Stack, Typography} from '@mui/material'
import {useEffect, useRef, useState} from 'react'
import Categories from '../Banner/Categories'
import TabsScrollButtons from '../TabsScrollButtons'
import TrendingProducts from './TrendingProducts'

const categories = ['Fashion', 'Technology', 'Interiors', 'Food & Drink']
const data = [
  {imgPath: 'assets/images/trending-1.svg', title: 'Seven Zero Five', price: 10.0},
  {imgPath: 'assets/images/trending-2.svg', title: 'Clock', price: 20.0},
  {imgPath: 'assets/images/trending-3.svg', title: 'Curology', price: 30.0},
  {imgPath: 'assets/images/trending-4.svg', title: 'Chair', price: 40.0},
  {imgPath: 'assets/images/trending-5.svg', title: 'Curology', price: 50.0},
  {imgPath: 'assets/images/trending-1.svg', title: 'Seven Zero Five', price: 10.0},
  {imgPath: 'assets/images/trending-2.svg', title: 'Clock', price: 20.0},
  {imgPath: 'assets/images/trending-3.svg', title: 'Curology', price: 30.0},
  {imgPath: 'assets/images/trending-4.svg', title: 'Chair', price: 40.0},
  {imgPath: 'assets/images/trending-5.svg', title: 'Curology', price: 50.0},
]
const Trending = () => {
  const leftScrollRef = useRef(),
    rightScrollRef = useRef()
  const [scrollButtonsRef, setScrollButtonsRef] = useState({left: null, right: null})
  useEffect(() => {
    setScrollButtonsRef({left: leftScrollRef, right: rightScrollRef})
  }, [])
  const handleScrollButtonClick = (direction) => {
    scrollButtonsRef[direction]?.current.click()
  }
  return (
    <Box my={15}>
      <Container maxWidth="sm" sx={{color: 'mateBlack.dark'}}>
        <Typography variant="h4" align="center" fontFamily="Spectral" fontWeight={700}>
          Shop Our Trending Products
        </Typography>
        <Typography variant="subtitle1" fontFamily="Poppins" align="center" fontWeight={400} mt={2}>
          Life is hard enough already. Let us make it a little easier.
        </Typography>
      </Container>
      <Container maxWidth={'xl'} sx={{mt: 5}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box></Box>
          <Categories categories={categories}>
            <TabsScrollButtons handleScrollButtonClick={handleScrollButtonClick} />
          </Categories>
        </Stack>
      </Container>
      <TrendingProducts products={data} scrollButtonsRef={scrollButtonsRef} />
    </Box>
  )
}

export default Trending
