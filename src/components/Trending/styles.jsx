import {Grid, Tabs, styled} from '@mui/material'

export const CardContainer = styled(Grid)(
  ({theme, bg_color}) => `
      width:250px;
      text-transform:initial;
      text-align:left;
      padding-left:${theme.spacing(3)};
      padding-right:${theme.spacing(2)};
      background: ${bg_color};
      box-shadow: 5px 13px 18px -5px rgba(128, 128, 128, 0.1);
      backdrop-filter: blur(${bg_color.includes('linear-gradient') ? 0 : 4.5}px);
      border-radius: 25px;
      flex-grow:1;
      .MuiGrid-item{
          display: flex; 
          flex-direction: column;
          justify-content: space-between;
      }
      img{
          height: 100%;
          object-fit: contain;
          position: absolute;
          right: 0;
          transform: translateY(-40px);
      }
      .price{
          color:${theme.palette.warning.light};
          font-weight:600;
      }
      .title{
          color:${theme.palette.mateBlack.light};
      }
  `
)
export const TrendingProductsTabs = styled(Tabs)(
  ({theme}) => `
    .MuiTabs-indicator {
      display: none;
    }
    .MuiTab-root{
      padding-top:${theme.spacing(4)};
    }
  `
)
