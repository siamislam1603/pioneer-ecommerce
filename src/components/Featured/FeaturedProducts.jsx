import {Box, ButtonBase, CardContent, CardMedia, Tab, Typography} from '@mui/material'
import {useSelector} from 'react-redux'
import OrderNow from './OrderNow'
import {CardContainer, FeaturedProductsTabs} from './styles'
import { LineClamp } from '../../styles'

const FeaturedProducts = ({scrollButtonsRef}) => {
  const {featured} = useSelector((state) => state.products)
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
      {featured.products.map((product, i) => (
        <Tab
          key={i}
          disableRipple={true}
          sx={{cursor: 'default'}}
          label={
            <>
              <CardContainer elevation={0}>
                <CardMedia component="img" image={product.thumbnail} alt="" />
                <CardContent sx={{px: 0, color: 'mateBlack.main'}}>
                  <LineClamp line={2} variant="h6" mt={2}>
                    {product.title}
                  </LineClamp>
                  <LineClamp line={2} variant="subtitle1">{product.category}</LineClamp>
                  <Typography variant="body1" className="price">
                    ${product.price.toFixed(2)} USD
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
