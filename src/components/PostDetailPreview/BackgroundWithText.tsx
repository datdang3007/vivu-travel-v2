import { COLOR_PALLETTE } from "@/constants/color";
import { BoxImage } from "@/ui";
import { Box, Grid, Typography, styled } from "@mui/material";
import dayjs from "dayjs";

type Props = {
  image: string;
  title: string;
};

export const BackgroundWithText = (props: Props) => {
  const { image, title } = props;

  const date = dayjs().format("DD/MM/YYYY");

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
          <BoxImage src={image} />
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
            {title}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"}>
          <Typography
            color={COLOR_PALLETTE.WHITE}
            fontWeight="bold"
            fontSize={"16px"}
          >
            {date}
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
  height: "500px",
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
