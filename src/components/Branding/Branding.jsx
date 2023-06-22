import {Box, Button, Card, CardMedia, Container, Grid, Typography} from '@mui/material'
import {BrandingCompaniesCard} from './styles'
import EastIcon from '@mui/icons-material/East';
const categories = [
  'mobile-brand-logo',
  'car-brand-logo',
  'football-kits-brand-logo',
  'pc-brand-logo',
  'food-brand-logo',
  'tech-brand-logo',
]
const Branding = () => {
  return (
    <Box mt={15} mb={10} py={20} sx={{backgroundColor: 'info.contrastText'}}>
      <Container maxWidth="xl">
        <Grid container spacing={10}>
          <BrandingCompaniesCard item xs={6}>
            {categories.map((item, i) => (
              <Card key={i} sx={{width: 182}} className="card" elevation={0}>
                <CardMedia
                  component="img"
                  width={'100%'}
                  height={120}
                  image={`https://source.unsplash.com/random/900x700/?${categories[i]}`}
                />
              </Card>
            ))}
            <Box className='branding-bg'/>
          </BrandingCompaniesCard>
          <Grid item xs={6} sx={{alignSelf:'center'}}>
            <Typography variant='h4' fontFamily='Spectral' fontWeight='fontWeightBold'>Explore Most Popular Brands</Typography>
            <Typography variant='body1' sx={{color:'muted.dark',mt:3}}>Life is hard enough already. Let us make it a little easier.</Typography>
            <Button sx={{textTransform:'initial',color:'black', p:0,mt:10}} endIcon={<EastIcon/>}>See All</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Branding
