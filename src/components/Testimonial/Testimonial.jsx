import { Box, Container, Grid, Typography } from "@mui/material";
import TabsScrollButtons from "../TabsScrollButtons";
import { UserSection } from "./styles";

const Testimonial = () => {
  return (
    <Container maxWidth="xl" sx={{ pl: 0, my: 20 }}>
      <Grid container spacing={{xs:10,sm:5,md:10}}>
        <UserSection item xs={12} sm={7} md={6}>
          <Box className="img-wrapper">
            <Box component="img" src="assets/images/user.png" alt="" />
          </Box>
        </UserSection>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          alignSelf="center"
          sx={{ ml: { xs: 2, sm: 0 } }}
        >
          <Typography
            variant="h6"
            fontWeight="fontWeightBold"
            sx={{ color: "black" }}
          >
            Justin Pierre
          </Typography>
          <Typography variant="body1" sx={{ color: "muted.light" }} mt={1}>
            Products Seller
          </Typography>
          <Typography
            variant="h6"
            fontWeight="fontWeightRegular"
            sx={{ fontStyle: "italic" }}
            my={6}
          >
            “In 2 years, my business went from just me and my Shop site to 40
            employees, my own fulfillment center and over 22 million dollars in
            revenue.”
          </Typography>
          <TabsScrollButtons styles={{ justifyContent: "start" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
