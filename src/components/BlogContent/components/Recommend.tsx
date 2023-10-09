import {
  Box,
  Button,
  Grid,
  Rating,
  Skeleton,
  Typography,
  styled,
} from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";
import { BoxImage } from "../../../ui";
import { CardRecommendProps } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PATH } from "src/routes/path";

const CardRecommendValue = {
  title: "Làng tranh Đông Hồ",
  rate: 4,
  image:
    "https://cdn.discordapp.com/attachments/1085804453246009374/1099951600707051570/lang-tranh-dong-ho-6_1678375739.png",
  content: `
    Làng tranh Đông Hồ ở đâu hay làng tranh Đông Hồ ở tỉnh nào là câu
    hỏi được nhiều du khách quan tâm khi tìm hiểu về
  `,
};

export const CardRecommend = (props: CardRecommendProps) => {
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

export const GroupCardRecommend = () => {
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
        <CardRecommend
          title={CardRecommendValue.title}
          content={CardRecommendValue.content}
          image={CardRecommendValue.image}
          rate={CardRecommendValue.rate}
        />
        <CardRecommend
          title={CardRecommendValue.title}
          content={CardRecommendValue.content}
          image={CardRecommendValue.image}
          rate={CardRecommendValue.rate}
        />
        <CardRecommend
          title={CardRecommendValue.title}
          content={CardRecommendValue.content}
          image={CardRecommendValue.image}
          rate={CardRecommendValue.rate}
        />
      </Grid>
    </Grid>
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
