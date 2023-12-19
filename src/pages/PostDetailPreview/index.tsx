import { Button, Grid, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundWithText,
  PostContent,
} from "src/components/PostDetailPreview";
import { COMPONENT_SIZE, LOCAL_STORAGE_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { PostStatus } from "src/constants/post_status";
import { Role } from "src/constants/role";
import { useMasterContext } from "src/context/MasterContext";
import { useCallAPICreate } from "src/hooks";
import { PATH } from "src/routes/path";
import { PostProps } from "src/types/Post";
import { showAlertSuccess } from "src/utils/alert";

export const PostDetailPreview = () => {
  const navigate = useNavigate();
  const { user } = useMasterContext();
  const { requestCreatePost } = useCallAPICreate();
  const data = localStorage.getItem(LOCAL_STORAGE_TYPE.POST_DATA);

  const handleClickButtonSendPost = useCallback(
    (data: PostProps) => {
      if (!user || user.role !== Role.Teller) {
        return;
      }

      const { email: creator } = user;
      const {
        linkBackground: image,
        postTitle: title,
        postData: contents,
      } = data;

      const convertData = {
        title,
        image,
        contents,
        creator,
        status: PostStatus.New,
      };

      requestCreatePost(convertData).then((res) => {
        console.log(res);

        showAlertSuccess(
          "Gửi bài viết thành công",
          "Vui lòng đợi phản hồi qua email"
        );
        setTimeout(() => {
          localStorage.removeItem(LOCAL_STORAGE_TYPE.POST_DATA);
          navigate(PATH.HOME);
        }, 2000);
      });
    },
    [navigate, requestCreatePost, user]
  );

  if (!data) return null;
  const dataPost = JSON.parse(data);
  const { linkBackground, postTitle, postData } = dataPost;

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
      ></HeaderBackground>
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
          <BackgroundWithText image={linkBackground} title={postTitle} />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={12}
          sm={10.5}
          marginTop={"-80px"}
        >
          <PostContent data={postData} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        paddingBottom={"40px"}
        justifyContent={"center"}
        sx={{
          background: COLOR_PALLETTE.CULTURED,
        }}
      >
        <Grid item xs={10} sm={5} lg={3}>
          <ButtonSendPost
            fullWidth
            variant="contained"
            onClick={() => handleClickButtonSendPost(dataPost)}
          >
            <Typography textTransform={"none"}>Gửi bài viết</Typography>
          </ButtonSendPost>
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

const ButtonSendPost = styled(Button)({
  padding: "10px",
});
