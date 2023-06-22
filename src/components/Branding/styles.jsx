import { Box, styled } from "@mui/material";

export const BrandingCompaniesCard = styled(Box)(
  ({ theme }) => `
    display:flex;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;
    justify-content:center;
    gap:${theme.spacing(5)};
    padding: 124px 19px;
    position:relative;
    background:url('../../../public/assets/images/branding-bg.svg');
    background-position:center;
    background-repeat:no-repeat;
    .card{
        border-radius:25px;
        padding:${theme.spacing(4)};
        box-shadow: 5px 13px 18px -5px rgba(128, 128, 128, 0.10);
        backdrop-filter: blur(4.5px);
        img{
            border-radius:5px;
        }
        @media only screen and (max-width: 474px){
            width:calc(50% - 10px);
            padding: 15px;
        }
    }
    @media only screen and (max-width: 474px){
        gap:20px;
    }
`
);

export const BrandingSocialMedia = styled(Box)(
  ({ theme }) => `
    display:flex;
    justify-content:center;
    .img-wrapper{
        position:relative;
        padding-left:${theme.spacing(2)};
        padding-right:0;
        background:url('../../../public/assets/images/social-media-bg.svg');
        background-repeat:no-repeat;
        background-position:top center;
        text-align:center;
        ${theme.breakpoints.up("sm")}{
            text-align:unset;
            padding:${theme.spacing(11)};
        }
    }
    .people-img{
        max-width:100%;
        height:250px;
        object-fit:cover;
        object-position:center;
        border-radius:12px;
        ${theme.breakpoints.up("sm")}{
            max-width:418px;
            height:413px;
        }
    }
    .MuiStack-root{
        width:100%;
        ${theme.breakpoints.up("sm")}{
            position:absolute;
            bottom:0;
            transform:translateY(-${theme.spacing(2)});
            padding-left:${theme.spacing(3)};
            left:0;
            gap:${theme.spacing(2.5)};
        }
        .MuiPaper-root{
            background:#e3f7f6;
            border-radius:12px;
            padding:14px;
            margin:${theme.spacing(1.25)};
            text-align:left;
            @media only screen and (max-width: 375px){
                width:100%;
            }
            ${theme.breakpoints.up("sm")}{
                margin:0;
            }
            svg{
                color:${theme.palette.info.main};
                font-size:26px;
            }
            .MuiCardContent-root{
                padding-bottom:${theme.spacing(1)};
                .social-media{
                    height:26px;
                    object-fit:contain;
                    object-position:center;
                }
                .product-img{
                    width:100%;
                    object-fit:contain;
                    object-position:center;
                    border-radius:6px;
                    margin-bottom:${theme.spacing(1)};
                }
            }
        }
    }
    ${theme.breakpoints.up("md")}{
        justify-content:end;
    }
`
);
