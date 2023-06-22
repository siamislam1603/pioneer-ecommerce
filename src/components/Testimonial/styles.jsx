import { Grid, styled } from "@mui/material";

export const UserSection = styled(Grid)(
  ({ theme }) => `
    display:flex;
    justify-content:end;
    align-items:center;
    background-color:#CEF0FF;
    border-radius:0 24px 24px 0;
    &.MuiGrid-item{
        padding:${theme.spacing(3.5)};
    }
    .img-wrapper{
        background:url('../../../public/assets/images/testimonial-illustration.svg')
    }
    img{
        max-width:440px;
        height: 530px;
        border-radius:24px;
        border:1px solid #b8e5f9;
        object-fit:cover;
        object-position:center;
        ${theme.breakpoints.down('lg')}{
            max-width:300px;
            object-fit:contain;
            height:auto;
        }
        @media only screen and (max-width: 375px){
            max-width:250px;
        }
    }
`
);
