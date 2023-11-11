import { Place, School, Favorite, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { POST_TAG_TYPE } from "src/constants";
import { COLOR_PALLETTE, COLOR_POST_TAGS } from "src/constants/color";
import { useMasterContext } from "src/context/MasterContext";

export const ProfileUserInfo = () => {
  const { user } = useMasterContext();

  if (!user) return null;
  const { avatar = "", username, description = "", like } = user;
  return (
    <Grid
      item
      container
      xs={12}
      position={"relative"}
      padding={{ xs: "40px 0 60px", sm: 0 }}
    >
      <ButtonMenu>
        <MoreVert />
      </ButtonMenu>
      <Grid
        item
        container
        alignItems={"flex-start"}
        justifyContent={"center"}
        xs={12}
        sm={3.5}
      >
        <Avatar
          alt={username}
          src={avatar}
          sx={{
            width: 150,
            height: 150,
            fontSize: 60,
            fontWeight: "bold",
            background: COLOR_PALLETTE.PRIMARY,
            color: COLOR_PALLETTE.WHITE,
          }}
        >
          {avatar ?? username.split("")[0].toLocaleUpperCase()}
        </Avatar>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        mt={{ xs: "20px", sm: 0 }}
        padding={{ xs: "0 20px", sm: 0 }}
      >
        <Grid
          item
          container
          xs={12}
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          <Typography fontSize={{ xs: "40px" }} fontWeight={"bold"}>
            {username}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          mt={"8px"}
        >
          <Typography
            fontSize={{ xs: "16px" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            {description ?? "Mô tả.."}
          </Typography>
        </Grid>
        <Grid item container xs={12} mt={"16px"} rowGap={"10px"}>
          <IconInfo item container xs={12}>
            <Favorite sx={{ mr: "6px", color: "#FF7E9B" }} />
            <Typography fontSize={{ xs: "16px" }}>{like}</Typography>
          </IconInfo>
          <IconInfo item container xs={12}>
            <Place sx={{ mr: "6px", color: "#f35d78" }} />
            <Typography fontSize={{ xs: "16px" }}>Germany</Typography>
          </IconInfo>
          <IconInfo item container xs={12}>
            <School sx={{ mr: "6px", color: "#44c3e4" }} />
            <Typography fontSize={{ xs: "16px" }}>
              Ludwig Maximilian University of Munich
            </Typography>
          </IconInfo>
        </Grid>
        <Grid
          item
          container
          xs={12}
          mt={"24px"}
          columnGap={"8px"}
          rowGap={"8px"}
        >
          <ButtonType
            sx={{
              background: `${
                COLOR_POST_TAGS[POST_TAG_TYPE.DISCOVER]
              } !important`,
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
              }}
            >
              {POST_TAG_TYPE.DISCOVER}
            </Typography>
          </ButtonType>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonMenu = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

const IconInfo = styled(Grid)({
  color: COLOR_PALLETTE.DIM_GRAY,
});

const ButtonType = styled(Button)({
  padding: "4px 8px",
  borderRadius: "4px",
  color: COLOR_PALLETTE.WHITE,
  transition: "0.2s",
  "&:hover": {
    opacity: "0.7",
  },
});
