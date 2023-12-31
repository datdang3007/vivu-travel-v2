import { Button, Grid, TextField, Typography, styled } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_TYPE, POST_CATEGORY_TYPE } from "src/constants";
import { PATH } from "src/routes/path";
import { PostDataProps, PostProps } from "src/types/Post";
import { AlertError } from "src/utils/alert";
import { NewBox } from "./NewBox";
import { PostBackground } from "./PostBackground";
import { PostDetail } from "./PostDetail";
import { PostImage } from "./PostImage";
import { PostNote } from "./PostNote";
import { PostTitle } from "./PostTitle";

export const RichEditor = () => {
  const navigate = useNavigate();
  const [linkBackground, setLinkBackground] = useState<string>();
  const [postTitle, setPostTitle] = useState<string>("");
  const [postData, setPostData] = useState<PostDataProps[]>([]);

  // Set disable button preview:
  const canClickPreview = useMemo(
    () => postData.length >= 4,
    [postData.length]
  );

  // Function set link background:
  const handleSetLinkBackground = useCallback((link: string) => {
    setLinkBackground(link);
  }, []);

  // Function set post title:
  const handleSetPostTitle = useCallback((event: any) => {
    setPostTitle(event.target.value);
  }, []);

  // Function set post data:
  const handleSetPostData = useCallback((data: PostDataProps[]) => {
    setPostData(data);
  }, []);

  // Define post category:
  const postCategoryComponent = useCallback(
    (id: string | number) => {
      return {
        [POST_CATEGORY_TYPE.TITLE]: (
          <PostTitle id={id} data={postData} handleChange={handleSetPostData} />
        ),
        [POST_CATEGORY_TYPE.DETAIL]: (
          <PostDetail
            id={id}
            data={postData}
            handleChange={handleSetPostData}
          />
        ),
        [POST_CATEGORY_TYPE.NOTE]: (
          <PostNote id={id} data={postData} handleChange={handleSetPostData} />
        ),
        [POST_CATEGORY_TYPE.IMAGE]: (
          <PostImage id={id} data={postData} handleChange={handleSetPostData} />
        ),
      };
    },
    [handleSetPostData, postData]
  );

  // Define post data to component:
  const handlePostComponent = useCallback(
    (data: PostDataProps) => {
      const type = data?.type;
      if (!type) return null;
      const id = data.id;
      const postComponent =
        postCategoryComponent(id)[type as POST_CATEGORY_TYPE];
      return (
        <Grid key={data.id} item xs={12}>
          {postComponent}
        </Grid>
      );
    },
    [postCategoryComponent]
  );

  // Render post data to component:
  const renderPostData = useCallback(
    () => postData.map((val) => handlePostComponent(val)),
    [handlePostComponent, postData]
  );

  // Event when click button preview:
  const eventPreview = useCallback(() => {
    const isEmpty = !!postData.filter((val) => val.content === "").length;

    if (isEmpty || !linkBackground || postTitle === "")
      return AlertError({ text: "Các mục không được để trống" });

    const dataPost: PostProps = {
      linkBackground: linkBackground,
      postTitle,
      postData,
    };

    localStorage.setItem(
      LOCAL_STORAGE_TYPE.POST_DATA,
      JSON.stringify(dataPost)
    );

    navigate(PATH.POST_DETAIL_PREVIEW);
  }, [linkBackground, navigate, postData, postTitle]);

  return (
    <Grid item container xs={12}>
      <Grid item container xs={12} mb={"20px"}>
        <TextField
          fullWidth
          type="text"
          label="Tiêu đề bài viết"
          value={postTitle}
          placeholder="Nhập tiêu đề bài viết.."
          onChange={handleSetPostTitle}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <PostBackground link={linkBackground} setLink={handleSetLinkBackground} />
      {renderPostData()}
      <NewBox data={postData} setData={handleSetPostData} />
      <Grid item container xs={12} mt={"40px"} justifyContent={"center"}>
        <Grid item xs={12} sm={5} lg={4}>
          <ButtonDemo
            disabled={!canClickPreview}
            onClick={eventPreview}
            variant="contained"
            fullWidth
          >
            <Typography textTransform={"none"}>Xem trước bài viết</Typography>
          </ButtonDemo>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonDemo = styled(Button)({
  padding: "10px",
});
