import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";

export const GroupServiceRecommend = () => {
  return (
    <Grid item xs={12}>
      <Grid item container justifyContent={"space-between"} xs={12}>
        <Grid item xs>
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            Dịch Vụ Nổi Bật
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <ButtonSeeMore>
            <Typography fontSize={"16px"} textTransform={"none"}>
              xem thêm
            </Typography>
          </ButtonSeeMore>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={"10px"}>
        <BottomBorder />
      </Grid>
      <Grid item xs={12}>
        {/* <CardServiceRecommend
          title={CardRecommendValue.title}
          content={CardRecommendValue.content}
          image={CardRecommendValue.image}
          rate={CardRecommendValue.rate}
        /> */}
      </Grid>
    </Grid>
  );
};

const ButtonSeeMore = styled(Button)({
  ".MuiTypography-root": {
    color: COLOR_PALLETTE.CHINESE_SILVER,
  },
  "&:hover": {
    ".MuiTypography-root": {
      color: COLOR_PALLETTE.PRIMARY,
    },
  },
});

const BottomBorder = styled(Box)({
  position: "relative",
  width: "100%",
  height: "2px",
  background: "rgba(0, 0, 0, 0.12)",
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "15%",
    height: "100%",
    background: COLOR_PALLETTE.BLACK,
  },
  "&::after": {
    content: `''`,
    position: "absolute",
    borderBottom: `8px solid transparent`,
    borderLeft: `8px solid ${COLOR_PALLETTE.BLACK}`,
  },
});
