import EastIcon from "@mui/icons-material/East";
import { Button, Grid, Typography } from "@mui/material";

const BrandingLayout = ({
  showDescriptionColumnFirst,
  descriptionData,
  styles,
  children,
}) => {
  const descriptionColumnIndex = showDescriptionColumnFirst ? 0 : 1;
  const { title, subTitle } = descriptionData;
  const classes = styles ?? {};
  return (
    <Grid container spacing={10} sx={{ ...classes }}>
      {[...new Array(2)].map((_, i) => (
        <Grid
          item
          key={i}
          xs={12}
          md={i === descriptionColumnIndex ? 4 : 8}
          xl={6}
          sx={{ alignSelf: "center" }}
          textAlign={{
            xs: i === descriptionColumnIndex ? "center" : "left",
            md: "left",
          }}
        >
          {i === descriptionColumnIndex ? (
            <>
              <Typography
                variant="h4"
                fontFamily="Spectral"
                fontWeight="fontWeightBold"
              >
                {title}
              </Typography>
              <Typography variant="body1" sx={{ color: "muted.dark", mt: 3 }}>
                {subTitle}
              </Typography>
              <Button
                sx={{ textTransform: "initial", color: "black", p: 0, mt: 10 }}
                endIcon={<EastIcon />}
              >
                See All
              </Button>
            </>
          ) : (
            children
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default BrandingLayout;
