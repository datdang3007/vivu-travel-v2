import { Box, Grid, Typography, styled } from "@mui/material";
import { Dayjs } from "dayjs";
import { COLOR_PALLETTE } from "src/constants/color";
import { BoxImage } from "src/ui";
import { FormatDate } from "src/utils/common";

type Props = {
  image: string;
  title: string;
  date?: string | Dayjs | Date;
};

export const BackgroundWithText = (props: Props) => {
  const { image, title, date } = props;

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
            {FormatDate(date)}
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
