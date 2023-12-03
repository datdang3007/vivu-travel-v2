import { Avatar, Box, Card, Grid, Typography, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { PostStatus } from "src/constants/post_status";
import { useCallAPIFind } from "src/hooks";
import { IPost } from "src/interfaces/post.interface";
import { PATH } from "src/routes/path";
import { BoxImage } from "src/ui";
import { FormatDate } from "src/utils/common";

// const dataTemp = [
//   {
//     id: 1,
//     type: POST_TAG_TYPE.ENTERTAINMENT,
//     title: "Lorem 01",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed463e64b317b48197e2448_annie-spratt-cVEOh_JJmEE-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party.`,
//   },
//   {
//     id: 2,
//     type: POST_TAG_TYPE.EXPERIENCE,
//     title: "Lorem 02",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed4643dec5df2a40dfcf30b_c-rayban-CIXoFys3gsw-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the
//         mussels, if you like.`,
//   },
//   {
//     id: 3,
//     type: POST_TAG_TYPE.DISCOVER,
//     title: "Lorem 03",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed46653412d2b6239b5779d_sorasak-_UIN-pFfJ7c-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the
//         mussels, if you like.`,
//   },
//   {
//     id: 4,
//     type: POST_TAG_TYPE.CULTURE,
//     title: "Lorem 04",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed463e64b317b48197e2448_annie-spratt-cVEOh_JJmEE-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party.`,
//   },
//   {
//     id: 5,
//     type: POST_TAG_TYPE.HISTORY,
//     title: "Lorem 05",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed4643dec5df2a40dfcf30b_c-rayban-CIXoFys3gsw-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the
//         mussels, if you like.`,
//   },
//   {
//     id: 6,
//     type: POST_TAG_TYPE.HISTORY,
//     title: "Lorem 06",
//     createAt: "09/10/2023",
//     username: "Reviewer 01",
//     avatar:
//       "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
//     img: "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed46653412d2b6239b5779d_sorasak-_UIN-pFfJ7c-unsplash.jpg",
//     content: `
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the
//         mussels, if you like.`,
//   },
// ];

export const GroupCardPost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState<IPost[]>();
  const { requestFindPostByStatus } = useCallAPIFind();

  const changeDirectionToPost = useCallback(
    (id?: string | number) => {
      navigate(`${PATH.POST_DETAIL}/${id}`);
    },
    [navigate]
  );

  const ListCardComponent = useCallback(() => {
    if (!postData || postData?.length === 0) return null;
    return postData.map((post) => {
      const { id, title, image, created_at, creator, contents } = post;
      const detail =
        contents?.find((content) => content.type === POST_CATEGORY_TYPE.DETAIL)
          ?.content ?? "";
      // const tagColor = COLOR_POST_TAGS[val.type];
      return (
        <Grid key={id} item xs={12} sm={6} lg={4} xl={3} padding={"10px"}>
          <CardContainer onClick={() => changeDirectionToPost(id)}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%", aspectRatio: "3/2" }}>
                <BoxImage src={image} />
              </Box>
            </Grid>
            <Grid item xs={12} padding={"16px"}>
              <GridOneLine item xs={12}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      xl: 22,
                    },
                  }}
                >
                  {title}
                </Typography>
              </GridOneLine>
              <GridOneLine item xs={12}>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                  }}
                >
                  {FormatDate(created_at)}
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
                  {detail}
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
                  <Avatar
                    alt={creator?.username}
                    src={creator?.avatar}
                    sx={{
                      fontWeight: "bold",
                      background: COLOR_PALLETTE.PRIMARY,
                      color: COLOR_PALLETTE.WHITE,
                    }}
                  >
                    {creator?.avatar ??
                      creator?.username.split("")[0].toLocaleUpperCase()}
                  </Avatar>
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
                    {creator?.username}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContainer>
        </Grid>
      );
    });
  }, [changeDirectionToPost, postData]);

  useEffect(() => {
    requestFindPostByStatus(PostStatus.Approved).then((data) => {
      setPostData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid item container xs={12}>
      {ListCardComponent()}
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
