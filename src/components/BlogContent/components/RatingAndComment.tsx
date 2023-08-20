import { Avatar, Chip, Grid, Rating, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const RatingAndComment = () => {
  return (
    <Grid item xs={12} mt={"30px"}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Chip
            label="Bình Luận & Đánh Giá"
            sx={{
              padding: "10px",
              fontWeight: "bold",
              color: COLOR_PALLETTE.PRIMARY,
            }}
          />
        </Grid>
        <Grid
          item
          container
          alignItems={"flex-end"}
          justifyContent={"space-between"}
          xs={12}
          mt={"10px"}
        >
          <Grid
            item
            container
            columnGap={"5px"}
            alignItems={"center"}
            xs={"auto"}
          >
            <Grid item xs={"auto"}>
              <Typography>Đánh giá:</Typography>
            </Grid>
            <Grid item xs={"auto"}>
              <Rating name="place-rating" defaultValue={0} precision={0.5} />
            </Grid>
          </Grid>
          <Grid item xs={"auto"}>
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Typography
                color={"green"}
                fontSize={{
                  xs: "20px",
                }}
                fontWeight={"bold"}
              >
                0/5
              </Typography>
              <Rating name="place-rating" defaultValue={1} max={1} readOnly />
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={"14px"} color={COLOR_PALLETTE.DARK_GRAY}>
                (0 người đánh giá)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={"20px"}>
        <CommentContainer item xs={12}>
          <CommentHeader item xs={12}>
            <Typography fontSize={"20px"}>Bình Luận</Typography>
          </CommentHeader>
          <CommentContent>
            <Grid
              item
              container
              xs={12}
              alignItems={"flex-start"}
              columnGap={"10px"}
            >
              <Grid item xs="auto">
                <CustomAvatar variant="rounded"></CustomAvatar>
              </Grid>
              <Grid item xs>
                <Comment item xs={12}>
                  <Typography>trả lời bình luận kiểu gì :v</Typography>
                </Comment>
                <Grid item xs={12} sx={{ padding: "4px" }}>
                  <IconLike />
                </Grid>
              </Grid>
            </Grid>
          </CommentContent>
        </CommentContainer>
      </Grid>
    </Grid>
  );
};

const CommentContainer = styled(Grid)({
  overflow: "hidden",
});

const CommentHeader = styled(Grid)({
  padding: "8px 16px",
  background: COLOR_PALLETTE.PRIMARY,
  color: COLOR_PALLETTE.WHITE,
  borderRadius: `8px 8px 0 0`,
});

const CommentContent = styled(Grid)({
  padding: "16px",
  border: `1px solid ${COLOR_PALLETTE.BLACK}`,
  borderTop: "unset",
});

const CustomAvatar = styled(Avatar)({
  width: "50px",
  height: "50px",
});

const Comment = styled(Grid)({
  padding: "12px 16px",
  borderRadius: "4px",
  border: `1px solid ${COLOR_PALLETTE.DIM_GRAY}`,
});

const IconLike = styled(ThumbUpIcon)({

});
