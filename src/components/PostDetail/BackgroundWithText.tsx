import { Box, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";
import { BoxImage } from "src/ui";

export const BackgroundWithText = () => {
  return (
    <Grid item xs={12} position={"relative"}>
      <ImageContainer>
        <Box
          width={1}
          height={1}
          sx={{
            overflow: "hidden",
            borderRadius: {
              xs: "4px",
              sm: "0 0 4px 4px",
            },
          }}
        >
          <BoxImage src="https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed463e64b317b48197e2448_annie-spratt-cVEOh_JJmEE-unsplash.jpg" />
        </Box>
      </ImageContainer>
      <TitleContainer>
        <Grid item container justifyContent={"center"}>
          <Typography
            color={COLOR_PALLETTE.WHITE}
            fontWeight="bold"
            fontSize={{
              xs: "30px",
              sm: "36px",
              lg: "40px",
            }}
          >
            Lorem 01
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"}>
          <Typography
            color={COLOR_PALLETTE.WHITE}
            fontWeight="bold"
            fontSize={"16px"}
          >
            09/10/2023
          </Typography>
        </Grid>
      </TitleContainer>
    </Grid>
  );
};

const ImageContainer = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  boxSizing: "border-box",
  width: "100%",
  height: "550px",
  [theme.breakpoints.down("xl")]: {
    height: "475px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "275px",
    padding: "10px 20px",
  },
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
