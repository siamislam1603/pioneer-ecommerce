import {Container, Grid, Stack, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPaginatedProducts} from '../../actions/home'
import TabsScrollButtons from '../TabsScrollButtons'
import ProductCard from './ProductCard'

const CategoricalProducts = () => {
  const {categorical} = useSelector((state) => state.products)
  const {limit, currentPage, products, total} = categorical
  const dispatch = useDispatch()
  const handleScrollButtonClick = (direction) => {
    const productsLen = products.length
    const updatedCurrentPage = currentPage - (direction === 'right' ? -1 : 1)
    if (products.length === currentPage * limit + limit && productsLen < total && direction==='right') {
      dispatch(
        fetchPaginatedProducts({
          limit,
          skip: productsLen,
          type: 'categorical',
          currentPage: updatedCurrentPage,
          products,
        })
      )
    } else dispatch({type: 'set_categorical_products', payload:{currentPage: updatedCurrentPage}})
  }
  return (
    <Container maxWidth="xl" sx={{my: 20}}>
      <Typography
        variant="h4"
        fontFamily="Spectral"
        fontWeight={700}
        sx={{color: 'mateBlack.dark'}}
        mb={3}
      >
        Shop by Category
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          maxWidth={300}
          sx={{color: 'mateBlack.dark'}}
          variant="body1"
          fontFamily="Poppins"
          fontWeight="400"
        >
          Life is hard enough already. Let us make it a little easier.
        </Typography>
        <TabsScrollButtons
          scrollButtonsDisabled={{
            left: currentPage === 0,
            right: (currentPage * limit + limit) >= total,
          }}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </Stack>
      <Grid container spacing={5} my={5} px={{xs: 0, md: 5}}>
        {products.slice(currentPage * limit, currentPage * limit + limit).map((product, i) => (
          <Grid item xs={12} tablet={6} lg={4} key={i}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CategoricalProducts
