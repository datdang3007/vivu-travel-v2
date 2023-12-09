import ReplyIcon from "@mui/icons-material/Reply";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar, Grid, Tooltip, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";
import { IAuthUser } from "src/interfaces";

type Props = {
  creator: IAuthUser;
  content: string;
  createdAt: string;
};

export const Content = (props: Props) => {
  const { content, creator, createdAt } = props;

  return (
    <Grid item container xs={12} alignItems={"flex-start"} columnGap={"10px"}>
      <Grid item xs="auto">
        <Tooltip title={creator?.username}>
          <CustomAvatar
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
          </CustomAvatar>
        </Tooltip>
      </Grid>
      <Grid container item xs rowGap={"4px"}>
        <Grid container>
          <Typography fontWeight={"bold"}>{creator?.username}</Typography>
        </Grid>
        <Comment item xs={12}>
          <Typography>{content}</Typography>
        </Comment>
        <Grid
          item
          container
          alignItems={"flex-end"}
          xs={12}
          columnGap={"20px"}
          sx={{ padding: "4px" }}
        >
          <GridAction
            item
            container
            alignItems={"flex-end"}
            columnGap={"3px"}
            xs="auto"
          >
            <Typography fontSize={"14px"}>0</Typography>
            <IconLike />
          </GridAction>
          <GridAction
            item
            container
            alignItems={"flex-end"}
            columnGap={"3px"}
            xs="auto"
          >
            <Typography fontSize={"14px"}>Trả lời</Typography>
            <IconReply />
          </GridAction>
          <Grid item container xs="auto">
            <Typography fontSize={"14px"}>{createdAt}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const CustomAvatar = styled(Avatar)({
  width: "40px",
  height: "40px",
});

const Comment = styled(Grid)({
  padding: "12px 16px",
  borderRadius: "4px",
  border: `1px solid ${COLOR_PALLETTE.DIM_GRAY}`,
});

const GridAction = styled(Grid)({
  cursor: "pointer",
  ".MuiSvgIcon-root": {
    color: COLOR_PALLETTE.DARK_GRAY,
  },
  "&:hover": {
    ".MuiSvgIcon-root": {
      color: COLOR_PALLETTE.PRIMARY,
    },
  },
});

const IconLike = styled(ThumbUpIcon)({
  width: "18px",
  aspectRatio: "1/1",
  transition: "0.2s",
});

const IconReply = styled(ReplyIcon)({
  cursor: "pointer",
  width: "22px",
  aspectRatio: "1/1",
  transition: "0.2s",
});
