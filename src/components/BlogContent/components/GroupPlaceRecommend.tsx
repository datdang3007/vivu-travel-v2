import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";
import { CardPlaceRecommend } from "./CardPlaceRecommend";
import { IPlace } from "src/interfaces";
import { useCallback } from "react";

type Props = {
  places: IPlace[];
};

const maxItems = 5;
export const GroupPlaceRecommend = (props: Props) => {
  const { places } = props;

  const renderCardRecommend = useCallback(() => {
    return places.map((place, index) => {
      const { id, image, name = "", overview = "" } = place;
      if (index >= maxItems) return null;
      return (
        <CardPlaceRecommend
          id={id}
          title={name}
          content={overview}
          image={image}
          rate={0}
        />
      );
    });
  }, [places]);

  return (
    <Grid item xs={12}>
      <Grid item container justifyContent={"space-between"} xs={12}>
        <Grid item xs>
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            Địa Điểm Nổi Bật
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
        {renderCardRecommend()}
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
