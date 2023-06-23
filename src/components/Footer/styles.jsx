import { Box, Button, IconButton, styled } from "@mui/material";

export const FooterSection = styled(Box)(
  ({ theme }) => `
    background-color:${theme.palette.primary.light};
    &>.MuiContainer-root{
        background:url('../../../public/assets/images/footer-illustration.svg');
        background-size: cover;
        background-position:left;
    }
`
);
export const DownloadButton = styled(Button)(
  ({ theme }) => `
    margin-top:${theme.spacing(2)};
    color:white;
    text-transform:initial;
    border-color:white;
    border-radius:16px;
    padding:2px 10px;
    font-weight:400;
    gap:5px;
    .MuiButton-startIcon{
        margin-right:0;
    }
`
);
export const SocialButton = styled(IconButton)`
  padding: 0;
  svg {
    color: white;
  }
`;
