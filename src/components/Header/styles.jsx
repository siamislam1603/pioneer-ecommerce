import { AppBar, styled } from "@mui/material"

export const Logo = styled('img')`
  height: 100%;
  object-fit: contain;
  object-position: center;
`
export const NavBar = styled(AppBar)(
  ({theme}) => `
    background-color:${theme.palette.info.dark};
    & .MuiToolbar-root{
        padding-left:135px;
        padding-right:135px;
        justify-content:space-between;
    }
    & .search-input-container{
        .MuiInputBase-input{
            font-family:Inter;
            padding-bottom:0;
        }
        .search-button{
            background: #4DC3F7;
            border-radius: 20px;
            padding: 7px 30px;
            color: white;
        }
    }
    & .menu-items{
        svg{
            font-size:25px;
        }
        .hamburger-icon svg{
            font-size: 35px;
        }
        .menu-button{
            color:white;
            & .title{
                font-weight:500;
                text-transform:initial;
            }
        }
        .MuiBadge-badge{
            background-color:#FFC221;
            min-width:16px;
            height:16px;
        }
    }
`
)