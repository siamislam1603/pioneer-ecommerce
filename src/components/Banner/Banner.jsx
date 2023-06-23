import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import Search from "../Header/Search";
import BannerCarousel from "./BannerCarousel";
import Categories from "./Categories";
import { BannerBg, BannerSection } from "./styles";

const Banner = () => {
  const theme = useTheme();
  const { data } = useSelector((state) => state.categories);
  return (
    <BannerSection>
      <Container maxWidth="xl">
        <Search
          styles={{
            display: useMediaQuery(theme.breakpoints.down("md"))
              ? "flex"
              : "none !important",
            width: "100%",
          }}
        />
        <Categories categories={data}></Categories>
        <Grid container spacing={1} mt={5} position="relative">
          <Grid item md={6}>
            <Typography
              variant="body2"
              fontFamily="Spectral"
              fontWeight={500}
              mb={1}
            >
              100% QUALITY, 100% SATISFACTION
            </Typography>
            <Typography variant="h1" fontFamily="Spectral" fontWeight={800}>
              Where the world comes to shop.
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              fontFamily="Poppins"
              mt={3}
              sx={{ color: "mateBlack.dark" }}
            >
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={8}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "mateBlack.contrastText",
                  color: "white",
                  borderRadius: "42px",
                }}
              >
                Shop Now
              </Button>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "secondary.black" }}
                  fontFamily="Poppins"
                >
                  Start from
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{ color: "#2A2A2A" }}
                >
                  110.00$
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={useMediaQuery(theme.breakpoints.down("sm")) ? 0 : 2}
            >
              <BannerCarousel />
            </Grid>
          </Grid>
        </Grid>
        <BannerBg
          img_url={"../../public/assets/images/base.svg"}
          z_index={-1}
          background_position={"left"}
        />
      </Container>
      <BannerBg
        img_url={"../../public/assets/images/banner-gradient-bg.png"}
        z_index={-2}
        is_gradient_bg={"true"}
      />
    </BannerSection>
  );
};

export default Banner;
