import { ArrowForwardIos } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { COLOR_PALLETTE } from "src/constants/color";
import { PATH } from "src/routes/path";
import { BoxImage } from "src/ui";

const dataTemp = [
  {
    id: 1,
    title: "Lorem 01",
    createAt: "09/10/2023",
    username: "Reviewer 01",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
    img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed463e64b317b48197e2448_annie-spratt-cVEOh_JJmEE-unsplash.jpg",
    content: `
        This impressive paella is a perfect party.`,
  },
  {
    id: 2,
    title: "Lorem 02",
    createAt: "09/10/2023",
    username: "Reviewer 01",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
    img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed4643dec5df2a40dfcf30b_c-rayban-CIXoFys3gsw-unsplash.jpg",
    content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.`,
  },
  {
    id: 3,
    title: "Lorem 03",
    createAt: "09/10/2023",
    username: "Reviewer 01",
    avatar:
      "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
    img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed46653412d2b6239b5779d_sorasak-_UIN-pFfJ7c-unsplash.jpg",
    content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.`,
  },
];

export const GroupCardRecommend = () => {
  const navigate = useNavigate();

  const changeDirectionToPostList = useCallback(() => {
    navigate(PATH.POSTS);
  }, [navigate]);

  const changeDirectionToPost = useCallback(() => {
    navigate(PATH.POST_DETAIL);
  }, [navigate]);

  const ListCardComponent = useCallback(
    () =>
      dataTemp.map((val) => (
        <Grid key={val.id} item xs={12} sm={6} lg={4} padding={"10px"}>
          <CardContainer onClick={changeDirectionToPost}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%", aspectRatio: "3/2" }}>
                <BoxImage src={val.img} />
              </Box>
            </Grid>
            <Grid item xs={12} padding={"16px"}>
              <GridOneLine item xs={12}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: 20,
                      sm: 22,
                      xl: 24,
                    },
                  }}
                >
                  {val.title}
                </Typography>
              </GridOneLine>
              <GridOneLine item xs={12}>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                  }}
                >
                  {val.createAt}
                </Typography>
              </GridOneLine>
              <GridThreeLine item xs={12} mt={"16px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 14,
                      sm: 16,
                      xl: 18,
                    },
                  }}
                >
                  {val.content}
                </Typography>
              </GridThreeLine>
              <Grid
                item
                container
                alignItems={"center"}
                columnSpacing={"15px"}
                xs={12}
                mt={"20px"}
              >
                <Grid item xs={"auto"}>
                  <Avatar src={val.avatar}></Avatar>
                </Grid>
                <Grid item xs>
                  <Typography
                    fontWeight={"bold"}
                    sx={{
                      fontSize: {
                        xs: 14,
                        xl: 16,
                      },
                    }}
                  >
                    {val.username}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContainer>
        </Grid>
      )),
    [changeDirectionToPost]
  );

  return (
    <Grid item container xs={12}>
      {ListCardComponent()}
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={10.5} sm={6} xl={4}>
          <ButtonGoToList fullWidth onClick={changeDirectionToPostList}>
            <Typography
              sx={{
                textTransform: "none",
                fontSize: {
                  xs: 14,
                  sm: 16,
                  xl: 18,
                },
              }}
            >
              Xem Thêm
            </Typography>
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                top: "50%",
                right: "15px",
                alignItems: "center",
                transform: "translateY(-50%)",
              }}
            >
              <ArrowForwardIos
                sx={{
                  fontSize: {
                    xs: 14,
                    sm: 16,
                    xl: 18,
                  },
                }}
              />
            </Box>
          </ButtonGoToList>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CardContainer = styled(Card)({
  cursor: "pointer",
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: COLOR_PALLETTE.WHITE,
  border: "1px solid rgba(35, 34, 34, 0.1)",
  boxShadow: `1px 2px 15px 0 rgba(0, 0, 0, 0.1)`,
  "&:after": {
    content: `''`,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "4px",
    transition: "0.3s",
    transform: "translateY(4px)",
    background: COLOR_PALLETTE.PRIMARY,
  },
  "&:hover": {
    "&:after": {
      transform: "translateY(0)",
    },
  },
  ".MuiPaper-root": {
    borderRadius: "8px",
  },
});

const GridOneLine = styled(Grid)({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
});

const GridThreeLine = styled(Grid)(({ theme }) => ({
  height: "81px",
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  [theme.breakpoints.down("xl")]: {
    height: "72px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "63px",
  },
}));

const ButtonGoToList = styled(Button)(({ theme }) => ({
  position: "relative",
  marginTop: "50px",
  borderRadius: "34px",
  height: "60px",
  color: "#FFF",
  background: `${COLOR_PALLETTE.PRIMARY} !important`,
  transition: "0.3s",
  "&:hover": {
    opacity: 0.7,
  },
  [theme.breakpoints.down("xl")]: {
    height: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "46px",
  },
}));
