import {Box, Container, Stack, Typography} from '@mui/material'
import {useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import Categories from '../Banner/Categories'
import TabsScrollButtons from '../TabsScrollButtons'
import TrendingProducts from './TrendingProducts'

const Trending = () => {
  const {trending} = useSelector((state) => state.products)
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
          <Categories type="trending">
            <TabsScrollButtons handleScrollButtonClick={handleScrollButtonClick} />
          </Categories>
        </Stack>
      </Container>
      <TrendingProducts products={trending.products} scrollButtonsRef={scrollButtonsRef} />
    </Box>
  )
}

export default Trending
