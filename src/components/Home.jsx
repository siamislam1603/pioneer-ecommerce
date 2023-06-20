import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import BannerCarousel from './BannerCarousel'
import Categories from './Categories/Categories'
import Search from './Header/Search'

const BannerSection = styled('div')(
  ({theme}) => `
  background:url('../../public/assets/images/banner-gradient-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding:${theme.spacing(2, 0, 15)};
`
)
const Home = () => {
  const theme = useTheme()
  return (
    <BannerSection>
      <Container maxWidth="xl">
        <Search
          styles={{
            display: useMediaQuery(theme.breakpoints.down('md')) ? 'flex' : 'none !important',
            width: '100%',
          }}
        />
        <Categories />
        <Grid container spacing={1} mt={5}>
          <Grid item md={6}>
            <Typography variant="body2" fontFamily="Spectral" fontWeight={500} mb={1}>
              100% QUALITY, 100% SATISFACTION
            </Typography>
            <Typography variant="h1" fontFamily="Spectral" fontWeight={800}>
              Where the world comes to shop.
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              fontFamily="Poppins"
              mt={3}
              sx={{color: 'mateBlack.dark'}}
            >
              Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a
              better outlook.
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={8}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'mateBlack.contrastText',
                  color: 'white',
                  borderRadius: '42px',
                }}
              >
                Shop Now
              </Button>
              <Box>
                <Typography variant="body2" sx={{color: 'secondary.black'}} fontFamily="Poppins">
                  Start from
                </Typography>
                <Typography variant="h4" fontWeight={600} sx={{color: '#2A2A2A'}}>
                  110.00$
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={2}>
              <BannerCarousel />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BannerSection>
  )
}

export default Home
