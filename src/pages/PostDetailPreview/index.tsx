import { Button, Grid, Typography, styled } from "@mui/material";
import {
  BackgroundWithText,
  PostContent,
} from "src/components/PostDetailPreview";
import { COMPONENT_SIZE, LOCAL_STORAGE_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";

export const PostDetailPreview = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_TYPE.POST_DATA);

  if (!data) return null;
  console.log(JSON.parse(data));

  const { linkBackground, postTitle, postData } = JSON.parse(data);

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
          <ButtonSendPost variant="contained" fullWidth>
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
