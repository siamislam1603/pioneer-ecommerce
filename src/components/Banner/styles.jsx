import {Box, MobileStepper, Tabs, styled} from '@mui/material'

export const BannerSection = styled('div')(
  ({theme}) => `
    position:relative;
    padding:${theme.spacing(2, 0, 15)};
    ${theme.breakpoints.down('md')}{
        padding-bottom:${theme.spacing(2)};
    }
  `
)

export const BannerBg=styled(Box)(({theme,zIndex,imgUrl,backgroundPosition,isGradientBg})=>`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url(${imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${backgroundPosition ?? 'bottom'};
    z-index:${zIndex};
    ${theme.breakpoints.down('md')}{
        background-position: ${isGradientBg ? 'right' : (backgroundPosition ?? 'bottom')};
    }
    ${theme.breakpoints.up('xl')}{
        background-position:bottom;
    }
`)

export const StepperContainer = styled(MobileStepper)(
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
export const CarouselImg = styled(Box)(
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
          ${theme.breakpoints.down('sm')}{
            position: ${removeBorder ? 'relative' : 'absolute'};
            width: ${removeBorder ? '150px' : '100%'};
            height: ${removeBorder ? '150px' : '100%'};
            border-radius: ${removeBorder ? '100%' : 0};
        }
      }
      ${theme.breakpoints.down('sm')}{
        padding-top: ${removeBorder ? 0 : '100%'};
        border-radius: ${removeBorder ? 0 : '50%'};
    }
  `
)
export const VerticalTabs = styled(Tabs)(
  ({theme}) => `
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
        margin-bottom: ${theme.spacing(10)};
      }
  `
)
