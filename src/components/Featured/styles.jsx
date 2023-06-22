import {Box, Card, Tabs, styled} from '@mui/material'

export const FeaturedProductsTabs = styled(Tabs)(
  ({theme}) => `
      .MuiTabs-indicator {
        display: none;
      }
      .MuiTab-root{
        padding-top:${theme.spacing(4)};
      }
    `
)
export const CardContainer = styled(Card)(
  ({theme}) => `
    position:relative;
    background: transparent;
    padding: 10px;
    width:270px;
    box-shadow: 0px 8px 18px -7px rgba(0, 0, 0, 0.10);
    border-radius:30px;
    img{
        width:100%;
        border-radius:16px;
        box-shadow: 0px 17px 44px -14px rgba(14, 75, 128, 0.12);
    }
    .MuiTypography-subtitle1{
        font-weight: 600;
        margin-top: ${theme.spacing(1.5)};
        small{
            color:${theme.palette.muted.light};
            font-weight:400;
        }
    }
    .price{
        color:${theme.palette.primary.light};
        font-weight:600;
        margin-top:${theme.spacing(4.5)};
    }
    .shadow-bg{
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height: 75%;
        z-index:-1;
        border: 1px solid ${theme.palette.secondary.light};
        border-radius: 30px;
        background: #FFFDFE;
    }
    ${theme.breakpoints.up('sm')}{
        width:310px;
    }
`
)
export const FeaturedProductsContainer=styled(Box)(({theme})=>`
    ${theme.breakpoints.up('sm')}{
        display:flex;
        flex-direction:row;
        align-items:center;
        gap: ${theme.spacing(5)};
    }
`)