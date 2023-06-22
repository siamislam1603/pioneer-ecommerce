import ControlPointIcon from '@mui/icons-material/ControlPoint'
import {CardActions, CardContent, CardMedia, IconButton, Stack, Typography} from '@mui/material'
import {CategoricalProductCard} from './styles'
const ProductCard = ({title, price, discountPrice}) => {
  return (
    <CategoricalProductCard elevation={0}>
      <CardMedia
        component="img"
        width={'100%'}
        height={200}
        image={'https://source.unsplash.com/random/900%C3%97700/?cars'}
        alt=""
      />
      <CardContent sx={{px: 0}}>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardActions sx={{px: 0}}>
        <Stack direction="row" spacing={2} alignItems="end">
          <Typography variant="body1" fontWeight="fontWeightLight" color="black">
            ${discountPrice.toFixed(2)}
          </Typography>
          <Typography variant="body1" className="regular-price">
            ${price.toFixed(2)}
          </Typography>
        </Stack>
        <IconButton className="cart-button">
          <ControlPointIcon />
        </IconButton>
      </CardActions>
    </CategoricalProductCard>
  )
}

export default ProductCard
