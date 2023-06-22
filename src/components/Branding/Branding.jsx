import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import BrandingLayout from "./BrandingLayout";
import { BrandingCompaniesCard, BrandingSocialMedia } from "./styles";
const categories = [
  "mobile-brand-logo",
  "car-brand-logo",
  "football-kits-brand-logo",
  "pc-brand-logo",
  "food-brand-logo",
  "tech-brand-logo",
];
const socialMedias = [
  { icon: <FacebookIcon /> },
  { icon: <InstagramIcon /> },
  { icon: <TwitterIcon /> },
];
const Branding = () => {
  return (
    <Box mt={15} mb={10} py={20} sx={{ backgroundColor: "info.contrastText" }}>
      <Container maxWidth="xl">
        <BrandingLayout
          descriptionData={{
            title: "Explore Most Popular Brands",
            subTitle:
              "Life is hard enough already. Let us make it a little easier.",
          }}
        >
          <BrandingCompaniesCard>
            {categories.map((_, i) => (
              <Card key={i} sx={{ width: 182 }} className="card" elevation={0}>
                <CardMedia
                  component="img"
                  width={"100%"}
                  height={120}
                  image={`https://source.unsplash.com/random/900x700/?${categories[i]}`}
                />
              </Card>
            ))}
          </BrandingCompaniesCard>
        </BrandingLayout>
        <BrandingLayout
          showDescriptionColumnFirst={true}
          descriptionData={{
            title: "Sell Easily on  Social-media",
            subTitle:
              "Life is hard enough already. Let us make it a little easier.",
          }}
          styles={{ mt: 15 }}
        >
          <BrandingSocialMedia>
            <Box className="img-wrapper">
              <Box
                component="img"
                src="https://source.unsplash.com/random/900x700/?people"
                alt=""
                className="people-img"
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: "center", sm: "start" }}
                flexWrap={{ xs: "wrap", sm: "nowrap" }}
              >
                {socialMedias.map(({ icon }, i) => (
                  <Card sx={{ width: 139 }} key={i} elevation={0}>
                    {icon}
                    <CardContent sx={{ px: 0 }}>
                      <Box
                        component="img"
                        alt=""
                        className="product-img"
                        src={`https://source.unsplash.com/random/900x700/?${categories[i]}`}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "black" }}
                        fontWeight="fontWeightRegular"
                      >
                        $12.00
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
          </BrandingSocialMedia>
        </BrandingLayout>
      </Container>
    </Box>
  );
};

export default Branding;
