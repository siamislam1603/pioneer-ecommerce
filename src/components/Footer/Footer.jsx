import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { DownloadButton, FooterSection, SocialButton } from "./styles";
const socialIcons = [
  { icon: <FacebookIcon /> },
  { icon: <InstagramIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <PinterestIcon /> },
];
const footerData = [
  { Shop: ["Gift cards", "SnipShop blog"] },
  { Sell: ["Sell on SnipShop", "Tearms", "Forums", "Affiliates"] },
  {
    About: [
      "SnipShop, Inc.",
      "Policies",
      "Investors",
      "Careers",
      "Press",
      "Impact",
    ],
  },
  { Help: ["Help center", "Trust and safety", "Privacy settings"] },
];
const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Grid container spacing={5}>
          {footerData.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={3}>
              <Typography
                fontWeight="fontWeightBold"
                variant="body1"
                color="white"
                mb={3}
              >
                {Object.keys(item)[0]}
              </Typography>
              {Object.values(item)[0].map((link, j) => (
                <Typography
                  key={j}
                  variant="body2"
                  my={1.5}
                  color="white"
                  fontWeight="fontWeightLight"
                >
                  {link}
                </Typography>
              ))}
              {i === footerData.length - 1 ? (
                <>
                  <DownloadButton
                    variant="outlined"
                    startIcon={
                      <Box component="img" src="assets/images/logo-badge.svg" />
                    }
                  >
                    Download the SnipShop App
                  </DownloadButton>
                  <Stack direction="row" alignItems="center" spacing={2} mt={2}>
                    {socialIcons.map((socialIcon, l) => (
                      <SocialButton key={l}>{socialIcon.icon}</SocialButton>
                    ))}
                  </Stack>
                </>
              ) : null}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "primary.dark", color: "white" }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            <Typography
              variant="body2"
              fontWeight="fontWeightLight"
              mb={{ xs: 1, sm: 0 }}
            >
              &copy; 2021-2023 SnipShop.com
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              {["Terms of use", "Privacy", "interest-based ads"].map(
                (text, k) => (
                  <Typography
                    key={k}
                    variant="body2"
                    fontWeight="fontWeightLight"
                  >
                    {text}
                  </Typography>
                )
              )}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </FooterSection>
  );
};

export default Footer;
