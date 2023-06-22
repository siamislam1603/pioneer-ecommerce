import {Container, Grid, Stack, Typography} from '@mui/material'
import TabsScrollButtons from '../TabsScrollButtons'
import ProductCard from './ProductCard'

const CategoricalProducts = () => {
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
        <TabsScrollButtons />
      </Stack>
      <Grid container spacing={5} my={5} px={{xs: 0, md: 5}}>
        {[...new Array(9)].map((_, i) => (
          <Grid item xs={12} tablet={6} lg={4} key={i}>
            <ProductCard
              title={'product ' + (i + 1)}
              discountPrice={Math.random() * (200 - 50) + 50}
              price={Math.random() * (400 - 300) + 300}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CategoricalProducts
