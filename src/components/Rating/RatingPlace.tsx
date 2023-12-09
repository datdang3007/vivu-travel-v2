import { Grid, Rating, Typography } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";

export const RatingPlace = () => {
  return (
    <Grid
      item
      container
      alignItems={"flex-end"}
      justifyContent={"space-between"}
      xs={12}
      mt={"10px"}
    >
      <Grid item container columnGap={"5px"} alignItems={"center"} xs={"auto"}>
        <Grid item xs={"auto"}>
          <Typography>Đánh giá:</Typography>
        </Grid>
        <Grid item xs={"auto"}>
          <Rating name="place-rating" defaultValue={0} precision={0.5} />
        </Grid>
      </Grid>
      <Grid item xs={"auto"}>
        <Grid item container alignItems={"center"} justifyContent={"flex-end"}>
          <Typography
            color={"green"}
            fontSize={{
              xs: "20px",
            }}
            fontWeight={"bold"}
          >
            0/5
          </Typography>
          <Rating name="place-rating" defaultValue={1} max={1} readOnly />
        </Grid>
        <Grid item xs={12}>
          <Typography fontSize={"14px"} color={COLOR_PALLETTE.DARK_GRAY}>
            (0 người đánh giá)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
