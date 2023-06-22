import {Card, styled} from '@mui/material'

export const CategoricalProductCard = styled(Card)(
  ({theme}) => `
    padding:${theme.spacing(4)};
    padding-bottom:${theme.spacing(1)};
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 34px;
    img{
        border-radius:12px;
        object-position:center;
    }
    .MuiCardActions-root{
        justify-content:space-between;
        align-items:end;
        .cart-button{
            padding:${theme.spacing(1.5)};
            background-color:${theme.palette.secondary.main};
            svg{
                color:${theme.palette.darkGreen.main};
                font-size:26px;
            }
        }
    }
    .regular-price{
        font-weight:${theme.typography.fontWeightLight};
        color:${theme.palette.warning.light};
        text-decoration:line-through;
    }
`
)
