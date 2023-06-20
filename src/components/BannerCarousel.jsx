import {Box, Button, Grid, MobileStepper, Tab, Tabs, Typography, styled, useMediaQuery, useTheme} from '@mui/material'
import {useState} from 'react'

const images = [
  'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
]
const verticalImages = [
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
const StepperContainer = styled(MobileStepper)(
  ({theme}) => `
    background-color:transparent;
    margin: ${theme.spacing(5, 0)};
    & .MuiButtonBase-root{
        color:${theme.palette.info.main} !important;
        :disabled{
            opacity:.6;
        }
    }
    & .MuiMobileStepper-dot{
        background-color: ${theme.palette.info.light};
        &.MuiMobileStepper-dotActive{
            background-color: ${theme.palette.info.main};
        }
    }
`
)
const CarouselImg = styled(Box)(
  ({theme, removeBorder}) => `
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    overflow: hidden; 
    border:${removeBorder ? 'none' : `14px solid ${theme.palette.info.light}`};
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ${theme.breakpoints.down('sm')}{
        padding-top: ${removeBorder ? 0 : '100%'};
        border-radius: ${removeBorder ? 0 : '50%'};
    }
`
)
const VerticalTabs=styled(Tabs)(({theme})=>`
    max-height: 570px;
    .Mui-disabled{
        display:none;
    }
    .MuiTabScrollButton-root{
        background-color: ${theme.palette.mateBlack.dark};
        width:34.5px;
        height:34.5px;
        border-radius:100%;
        align-self:center;
        svg{
            color:white;
        }
    }
    ${theme.breakpoints.down('sm')}{

        img{
            position: relative !important;
            width: 150px !important;
            height: 150px !important;
        }
    }

    
`)
const BannerCarousel = () => {
    const theme=useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  return (
    <>
      <Grid item xs={12} sm={8} position="relative">
        <CarouselImg>
          <Box component="img" src={images[activeStep]} alt={''} />
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
      <Grid item xs={12} sm={4}>
        <VerticalTabs orientation={useMediaQuery(theme.breakpoints.down('sm')) ? 'horizontal' : "vertical"} variant="scrollable">
          {verticalImages.map((item, i) => (
            <Tab
              key={i}
              label={
                <>
                  <CarouselImg removeBorder={true}>
                    <Box component="img" src={item.imgPath} alt="" />
                  </CarouselImg>
                  <Typography variant="body2" mt={2}>
                    {item.label}
                  </Typography>
                </>
              }
            />
          ))}
        </VerticalTabs>
      </Grid>
    </>
  )
}

export default BannerCarousel
