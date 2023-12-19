import { Favorite, MoreVert, Place } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useState } from "react";
import { COLOR_PALLETTE } from "src/constants/color";
import { IAuthUser } from "src/interfaces";
import { DialogEditProfile } from "../Dialog";

type Props = {
  user: IAuthUser | null;
  isOwner: boolean;
};

export const ProfileUserInfo = (props: Props) => {
  const { user, isOwner } = props;
  const [openDialogEdit, setOpenDialogEdit] = useState<boolean>(false);
  const handleOpenDialogEdit = useCallback(() => setOpenDialogEdit(true), []);
  const handleCloseDialogEdit = useCallback(() => setOpenDialogEdit(false), []);

  if (!user) return null;
  const { avatar = "", username, country, description = "", like } = user;

  return (
    <Grid
      item
      container
      xs={12}
      position={"relative"}
      padding={{ xs: "40px 0 60px", sm: 0 }}
    >
      {isOwner && (
        <Tooltip title="Chỉnh sửa thông tin">
          <ButtonMenu onClick={handleOpenDialogEdit}>
            <MoreVert />
          </ButtonMenu>
        </Tooltip>
      )}
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
            <Typography fontSize={{ xs: "16px" }}>{country}</Typography>
          </IconInfo>
        </Grid>
      </Grid>
      <DialogEditProfile
        user={user}
        open={openDialogEdit}
        onClose={handleCloseDialogEdit}
      />
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
