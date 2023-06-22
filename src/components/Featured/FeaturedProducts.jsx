import {Box, ButtonBase, CardContent, CardMedia, Tab, Typography} from '@mui/material'
import OrderNow from './OrderNow'
import {CardContainer, FeaturedProductsTabs} from './styles'

const categories = ['perfumes', 'watch', 'lamps', 'headphones', 'cars', 'fruits', 'mobile', 'pc']
const FeaturedProducts = ({scrollButtonsRef}) => {
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
    <FeaturedProductsTabs
      value={0}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      ScrollButtonComponent={scrollButtons}
    >
      {[...new Array(9)].map((_, i) => (
        <Tab
          key={i}
          disableRipple={true}
          sx={{cursor: 'default'}}
          label={
            <>
              <CardContainer elevation={0}>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random/900x700/?${
                    categories[Math.floor(Math.random() * 4)]
                  }`}
                  alt=""
                />
                <CardContent sx={{px: 0, color: 'mateBlack.main'}}>
                  <Typography variant="h6" mt={2}>
                    Product {i + 1}
                  </Typography>
                  <Typography variant="subtitle1">
                    EAU DE PARFUM - M <small>- Man</small>
                  </Typography>
                  <Typography variant="body1" className="price">
                    $285.00 USD
                  </Typography>
                </CardContent>
                <Box className="shadow-bg"></Box>
              </CardContainer>
              <OrderNow />
            </>
          }
        />
      ))}
    </FeaturedProductsTabs>
  )
}

export default FeaturedProducts
