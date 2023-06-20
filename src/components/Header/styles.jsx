import { AppBar, Paper, styled } from "@mui/material"

export const Logo = styled('img')`
  height: 100%;
  object-fit: contain;
  object-position: center;
`
export const SearchInputContainer=styled(Paper)(({theme})=>`
    display:none;    
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
    ${theme.breakpoints.up('md')}{
        display:flex;
    }
`)
export const NavBar = styled(AppBar)(
  ({theme}) => `
    background-color:${theme.palette.info.dark};
    & .MuiToolbar-root{
        justify-content:space-between;
       ${theme.breakpoints.up('lg')} {
            padding-left:135px;
            padding-right:135px;
        }
    }
    & .menu-items{
        svg{
            color:white;
            font-size:25px;
        }
        .hamburger-icon{
            padding-left:${theme.spacing(2)};
            svg {
                font-size: 35px;
            }
        }
        .menu-button{
            color:white;
            & .title{
                font-weight:500;
                text-transform:initial;
            }
            ${theme.breakpoints.down('sm')}{
                flex-direction:column;
                .MuiButton-startIcon{
                    margin-right:0;
                }
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