import {Box, ButtonBase, Grid, Tab, Typography, useTheme} from '@mui/material'
import {ScrollableContainer} from '../../styles'
import {CardContainer, TrendingProductsTabs} from './styles'

const gradientBackgrounds = [
  'linear-gradient(234.3deg, #C0D4FE 16.99%, #ECF1FD 91.97%)',
  '#E9EBF0',
  '#F0EBFF',
  '#EBF9FF',
  '#E9F0FF',
]
const TrendingProducts = ({products, scrollButtonsRef}) => {
  const theme = useTheme()
  const scrollButtons = (props) => {
    const {direction, onClick, disabled, orientation, ...others} = props
    return (
      <ButtonBase
        direction={direction}
        onClick={onClick}
        disabled={disabled}
        orientation={orientation}
        ref={scrollButtonsRef[direction]}
        className={others.className}
        sx={{display: 'none'}}
      >
        {direction}
      </ButtonBase>
    )
  }
  return (
    <ScrollableContainer
      width={document.querySelector('.MuiContainer-root')?.offsetLeft ?? 0}
      maxWidth="xl"
      sx={{my: 8}}
    >
      <TrendingProductsTabs
        value={0}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        ScrollButtonComponent={scrollButtons}
      >
        {products.map((product, i) => (
          <Tab
            key={i}
            label={
              <CardContainer
                container
                bg_color={gradientBackgrounds[Math.floor(Math.random() * 5)]}
              >
                <Grid item xs={8} py={2}>
                  <Box>
                    <Typography variant="h6" gutterBottom fontFamily="Poppins" className="title">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      fontFamily="Poppins"
                      sx={{color: theme.palette.darkGreen.light}}
                    >
                      Starting
                    </Typography>
                  </Box>

                  <Typography variant="body1" mt={2} fontFamily="Poppins" className="price">
                    ${product.price}
                  </Typography>
                </Grid>
                <Grid item xs={4} position="relative">
                  <Box component="img" src={product.imgPath} alt="" />
                </Grid>
              </CardContainer>
            }
          />
        ))}
      </TrendingProductsTabs>
    </ScrollableContainer>
  )
}

export default TrendingProducts
