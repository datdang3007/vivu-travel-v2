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
import { useCallAPICreate } from "src/hooks";
import { PATH } from "src/routes/path";
import { PostProps } from "src/types/Post";
import { showAlertSuccess } from "src/utils/alert";

// {
//     "linkBackground": "https://cdn.discordapp.com/attachments/1089123119668658206/1178199568781934683/fansipan.png?ex=657546db&is=6562d1db&hm=73ab000d9ed2009dadfc1fde0d6e992ebae068c529d8f939b4cb1f54057cdeaf&",
//     "postTitle": "a",
//     "postData": [
//         {
//             "id": 1,
//             "type": 1,
//             "content": "a"
//         },
//         {
//             "id": 2,
//             "type": 2,
//             "content": "a"
//         },
//         {
//             "id": 3,
//             "type": 2,
//             "content": "a"
//         },
//         {
//             "id": 4,
//             "type": 2,
//             "content": "a"
//         }
//     ]
// }

export const PostDetailPreview = () => {
  const navigate = useNavigate();
  const { requestCreatePost } = useCallAPICreate();
  const data = localStorage.getItem(LOCAL_STORAGE_TYPE.POST_DATA);

  const handleClickButtonSendPost = useCallback(
    (data: PostProps) => {
      const {
        linkBackground: image,
        postTitle: title,
        postData: contents,
      } = data;

      const convertData = {
        title,
        image,
        contents,
        status: PostStatus.New,
      };

      requestCreatePost(convertData).then(() => {
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
    [navigate, requestCreatePost]
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
