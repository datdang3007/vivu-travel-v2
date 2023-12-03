import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLOR_PALLETTE } from "src/constants/color";
import { LOCAL_STORAGE } from "src/constants/local_storage";
import { Role } from "src/constants/role";
import { PATH } from "src/routes/path";
import { HeaderUserProfileProps, OptionProps } from "src/types";

export const HeaderUserProfile = (props: HeaderUserProfileProps) => {
  const { user } = props;
  const navigate = useNavigate();
  const { username = "", avatar = "", role = null } = user;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  // Handle toggle menu:
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // Handle event logout:
  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE.AccessToken);
    localStorage.removeItem(LOCAL_STORAGE.UserRole);
    navigate(PATH.LOGIN);
  }, [navigate]);

  // Handle navigate to profile page:
  const changeDirectionToUploadPost = useCallback(() => {
    navigate(PATH.UPLOAD_POST);
  }, [navigate]);

  // Handle navigate to profile page:
  const changeDirectionToProfile = useCallback(() => {
    navigate(PATH.PROFILE);
  }, [navigate]);

  // Define options
  const menuOption: OptionProps[] = useMemo(() => {
    const options = [
      {
        id: 1,
        label: username,
      },
      {
        id: 2,
        label: "Thông tin cá nhân",
        event: changeDirectionToProfile,
      },
      {
        id: 3,
        label: "Đăng xuất",
        hasDivider: true,
        event: handleLogout,
      },
    ];
    if (role === Role.Teller) {
      options.splice(2, 0, {
        id: 4,
        label: "Đăng bài",
        event: changeDirectionToUploadPost,
      });
    }
    return options;
  }, [
    changeDirectionToProfile,
    changeDirectionToUploadPost,
    handleLogout,
    role,
    username,
  ]);

  // Render option component
  const renderMenuOption = useCallback(() => {
    return menuOption.map((option) => {
      const { id, label, event, hasDivider } = option;
      return (
        <div key={id}>
          {hasDivider && <Divider />}
          <MenuItem onClick={event}>
            <Typography>{label}</Typography>
          </MenuItem>
        </div>
      );
    });
  }, [menuOption]);

  return (
    <Grid container justifyContent={"flex-end"}>
      <IconButton
        onClick={handleOpenMenu}
        sx={{
          padding: "0",
        }}
      >
        <Avatar
          alt={username}
          src={avatar}
          sx={{
            width: "35px",
            height: "35px",
            fontWeight: "bold",
            background: COLOR_PALLETTE.WHITE,
            color: COLOR_PALLETTE.PRIMARY,
          }}
        >
          {avatar ?? username.split("")[0].toLocaleUpperCase()}
        </Avatar>
      </IconButton>
      <CustomMenu
        anchorEl={anchorEl}
        open={openMenu}
        disablePortal
        disableScrollLock
        onClose={handleCloseMenu}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        slotProps={{
          paper: {
            elevation: 0,
          },
        }}
      >
        {renderMenuOption()}
      </CustomMenu>
    </Grid>
  );
};

const CustomMenu = styled(Menu)({
  ".MuiMenu-paper": {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: 10,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      background: COLOR_PALLETTE.WHITE,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
});
