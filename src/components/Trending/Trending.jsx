import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {Box, Container, Stack, Typography} from '@mui/material'
import Categories from '../Banner/Categories'
import TrendingProducts from './TrendingProducts'
import {TabsButton} from './styles'

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
            <Stack direction="row" spacing={1} alignItems="center">
              <TabsButton className="disabled" size="small">
                <ChevronLeftIcon />
              </TabsButton>
              <TabsButton size="small">
                <ChevronRightIcon />
              </TabsButton>
            </Stack>
          </Categories>
        </Stack>
      </Container>
      <TrendingProducts products={data} />
    </Box>
  )
}

export default Trending
