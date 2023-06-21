import {Box, Button, Grid, Tab, Typography, useMediaQuery, useTheme} from '@mui/material'
import {useState} from 'react'
import {CarouselImg, StepperContainer, VerticalTabs} from './styles'

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const BannerCarousel = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const isExtraSmallVW = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Grid item xs={12} sm={8} position="relative">
        <CarouselImg>
          <Box component="img" src={images[activeStep].imgPath} alt={''} />
        </CarouselImg>
        <StepperContainer
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              NEXT
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              PREV
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} width={isExtraSmallVW ? 'calc(100vw - 32px)' : '100%'}>
        <VerticalTabs
          orientation={isExtraSmallVW ? 'horizontal' : 'vertical'}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {images.map((item, i) => (
            <Tab
              key={i}
              label={
                <Box width={isExtraSmallVW ? 150 : '100%'}>
                  <CarouselImg removeBorder={true}>
                    <Box component="img" src={item.imgPath} alt="" />
                  </CarouselImg>
                  <Typography variant="body2" mt={2} noWrap={isExtraSmallVW ? true : false}>
                    {item.label}
                  </Typography>
                </Box>
              }
            />
          ))}
        </VerticalTabs>
      </Grid>
    </>
  )
}

export default BannerCarousel
