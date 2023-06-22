import { Grid, styled } from "@mui/material";

export const BrandingCompaniesCard=styled(Grid)(({theme})=>`
    display:flex;
    flex-direction:row;
    alignItems:center;
    flex-wrap:wrap;
    justify-content:center;
    gap:${theme.spacing(5)};
    padding: 124px 19px !important;
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
    }
`)