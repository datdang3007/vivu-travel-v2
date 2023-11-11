import {
  Button,
  Grid,
  Rating,
  Skeleton,
  Typography,
  styled,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/routes/path";
import { COLOR_PALLETTE } from "../../../constants/color";
import { CardRecommendProps } from "../../../types";
import { BoxImage } from "../../../ui";

export const CardServiceRecommend = (props: CardRecommendProps) => {
  const navigate = useNavigate();
  const { title, rate, content, image } = props;

  const onClick = useCallback(() => {
    navigate(PATH.PLACE);
  }, [navigate]);

  return (
    <CardRecommendContainer item xs={12}>
      <Grid
        item
        container
        alignItems={"center"}
        xs={12}
        height={1}
        sx={{ background: COLOR_PALLETTE.CULTURED }}
      >
        <Grid item xs={3.5} height={1} sx={{ cursor: "pointer" }}>
          {image ? (
            <Button fullWidth sx={{ height: 1, padding: 0 }} onClick={onClick}>
              <BoxImage src={image} />
            </Button>
          ) : (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ transform: "unset" }}
            ></Skeleton>
          )}
        </Grid>
        <Grid
          item
          xs={8.5}
          padding={"10px"}
          sx={{ overflow: "hidden", maxHeight: "122px" }}
        >
          <Grid item xs={12}>
            <CardRecommendTitle>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
            </CardRecommendTitle>
          </Grid>
          <Grid item xs={12} mt={"5px"}>
            <Rating
              name="card-recommend-rate"
              value={rate}
              size="small"
              readOnly
            />
          </Grid>
          <CardRecommendContent item xs={12}>
            <Typography fontSize={"16px"} lineHeight={1}>
              {content}
            </Typography>
          </CardRecommendContent>
        </Grid>
      </Grid>
    </CardRecommendContainer>
  );
};

const CardRecommendContainer = styled(Grid)(({ theme }) => ({
  padding: "10px",
  height: "145px",
  [theme.breakpoints.between("xl", 1750)]: {
    height: "130px",
  },
  [theme.breakpoints.between(1200, 1400)]: {
    height: "125px",
  },
  [theme.breakpoints.between(1050, 1200)]: {
    height: "110px",
  },
  [theme.breakpoints.between(900, 1050)]: {
    height: "90px",
  },
  [theme.breakpoints.down(500)]: {
    height: "125px",
  },
}));

const CardRecommendTitle = styled(Grid)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
}));

const CardRecommendContent = styled(Grid)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  marginTop: "5px",
  WebkitLineClamp: 3,
  [theme.breakpoints.between("xl", 1750)]: {
    WebkitLineClamp: 2,
  },
  [theme.breakpoints.between(1200, 1400)]: {
    WebkitLineClamp: 2,
  },
  [theme.breakpoints.between(1050, 1200)]: {
    WebkitLineClamp: 1,
  },
  [theme.breakpoints.between(900, 1050)]: {
    display: "none",
  },
  [theme.breakpoints.down(500)]: {
    WebkitLineClamp: 2,
  },
}));
