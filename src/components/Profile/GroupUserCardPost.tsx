import { Avatar, Box, Card, Grid, Typography, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE, COLOR_POST_STATUS } from "src/constants/color";
import { PostStatus } from "src/constants/post_status";
import { useCallAPIFind } from "src/hooks";
import { IAuthUser } from "src/interfaces";
import { IPost } from "src/interfaces/post.interface";
import { PATH } from "src/routes/path";
import { BoxImage } from "src/ui";
import { FormatDate } from "src/utils/common";

type Props = {
  user?: IAuthUser | null;
};

export const GroupUserCardPost = (props: Props) => {
  const { user } = props;
  const navigate = useNavigate();
  const [postData, setPostData] = useState<IPost[]>();
  const { requestFindPostByUser } = useCallAPIFind();

  const changeDirectionToPost = useCallback(
    (id?: string | number) => {
      navigate(`${PATH.POST_DETAIL}/${id}`);
    },
    [navigate]
  );

  const ListCardComponent = useCallback(() => {
    if (!postData || postData?.length === 0) return null;
    return postData.map((post) => {
      const { id, title, image, status, created_at, creator, contents } = post;
      const detail =
        contents?.find((content) => content.type === POST_CATEGORY_TYPE.DETAIL)
          ?.content ?? "";
      const labelStatus =
        status === PostStatus.New ? "Đang chờ duyệt" : "Đã duyệt";

      return (
        <Grid key={id} item xs={12} sm={6} lg={4} xl={3} padding={"10px"}>
          <CardContainer onClick={() => changeDirectionToPost(id)}>
            <BoxStatus
              sx={{
                background:
                  status === PostStatus.New
                    ? COLOR_POST_STATUS.NEW
                    : COLOR_POST_STATUS.APPROVED,
              }}
            >
              <Typography
                sx={{
                  color: COLOR_PALLETTE.WHITE,
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                }}
              >
                {labelStatus}
              </Typography>
            </BoxStatus>
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
    if (user?.id) {
      const dataQuery = {
        id: Number(user?.id),
        status: `${PostStatus.New},${PostStatus.Approved}`,
      };
      requestFindPostByUser(dataQuery).then((data) => {
        setPostData(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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

const BoxStatus = styled(Box)({
  position: "absolute",
  top: "5px",
  left: "5px",
  padding: "2px 6px",
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
