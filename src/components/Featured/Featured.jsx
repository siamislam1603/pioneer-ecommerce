import EastIcon from '@mui/icons-material/East'
import {Box, Button, Container, Stack, Typography} from '@mui/material'
import {useEffect, useRef, useState} from 'react'
import {ScrollableContainer} from '../../styles'
import TabsScrollButtons from '../TabsScrollButtons'
import FeaturedProducts from './FeaturedProducts'
import {FeaturedProductsContainer} from './styles'

const Featured = () => {
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
    <Box my={10}>
      <Container maxWidth="xl">
        <Stack
          direction={{sm: 'row', xs: 'column'}}
          justifyContent="space-between"
          alignItems={{xs: 'center', sm: 'end'}}
        >
          <Box display={{xs: 'none', sm: 'block'}} />
          <Typography
            variant="h4"
            align="center"
            fontFamily="Spectral"
            fontWeight="fontWeightBold"
            maxWidth={360}
          >
            Featured Product For Pre-Order
          </Typography>
          <Button endIcon={<EastIcon />} sx={{textTransform: 'initial', color: 'black'}}>
            Discover Our Products
          </Button>
        </Stack>
      </Container>
      <ScrollableContainer
        maxWidth="xl"
        width={document.querySelector('.MuiContainer-root')?.offsetLeft ?? 0}
        sx={{my: 8}}
      >
        <FeaturedProductsContainer>
          <TabsScrollButtons handleScrollButtonClick={handleScrollButtonClick} />
          <FeaturedProducts scrollButtonsRef={scrollButtonsRef} />
        </FeaturedProductsContainer>
      </ScrollableContainer>
    </Box>
  )
}

export default Featured
