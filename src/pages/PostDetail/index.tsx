import { Grid, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FormTitle } from "src/components/Form";
import {
  BackgroundWithText,
  GroupCardRecommend,
  PostContent,
} from "src/components/PostDetail";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { useCallAPIFind } from "src/hooks";
import { GetIdParams } from "src/utils/common";

export const PostDetail = () => {
  const location = useLocation();
  const postId = GetIdParams(location.pathname);
  const { requestFindPostByID } = useCallAPIFind();
  const [postData, setDate] = useState();

  useEffect(() => {
    requestFindPostByID(postId).then((data) => {
      setDate(data);
    });
  }, [postId, requestFindPostByID]);

  if (!postData) return null;
  const { title, image, created_at, creator, contents } = postData;
  return (
    <Grid container>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      />
      <Grid
        item
        container
        xs={12}
        paddingBottom={"40px"}
        sx={{
          background: COLOR_PALLETTE.CULTURED,
        }}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={11} xl={10.5}>
          <BackgroundWithText image={image} title={title} date={created_at} />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={12}
          sm={10.5}
          marginTop={"-80px"}
        >
          <PostContent creator={creator} contents={contents} />
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} sm={10.5}>
          <Grid item xs={10.5} sm={11}>
            <FormTitle
              container
              title="Có Thể Bạn Sẽ Thích"
              mt="60px"
              mb="20px"
            >
              <GroupCardRecommend postId={postId} />
            </FormTitle>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)(({ theme }) => ({
  background: COLOR_PALLETTE.PRIMARY,
  [theme.breakpoints.down("md")]: {
    background: COLOR_PALLETTE.WHITE,
  },
}));
