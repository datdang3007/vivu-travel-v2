import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useState } from "react";
import { HeaderSearch } from "../../components/Dialog/HeaderSearch";

const listOption = ["Miền", "Vùng", "Đăng nhập", "Đăng ký"];
const searchOption = {
  Miền: {
    "Miền Bắc": "Miền Bắc",
    "Miền Trung": "Miền Trung",
    "Miền Nam": "Miền Nam",
  },
  Vùng: {
    "Vùng ĐB Sông Hồng": "Vùng ĐB Sông Hồng",
    "Vùng ĐB Sông Cửu Long": "Vùng ĐB Sông Cửu Long",
  },
  "Tỉnh / Thành Phố": {
    "Hải Phòng": "Hải Phòng",
    "Hải Dương": "Hải Dương",
    "Bắc Ninh": "Bắc Ninh",
    "Hà Nội": "Hà Nội",
  },
  "Địa Điểm": {
    "Nhà Hát Lớn HP": "Nhà Hát Lớn HP",
    "Landmark 81": "Landmark 81",
  },
};

export const HeaderMenuNavbar = () => {
  const theme = useTheme();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleClick = () => {
    setShowDrawer(true);
  };
  const handleClose = () => {
    setShowDrawer(false);
  };

  const handleClickSearch = () => {
    setShowSearch(true);
  };
  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const listOptionComponent = useCallback(
    () => (
      <div style={{ width: "250px" }}>
        <List>
          {listOption.map((label, idx) => (
            <ListItem button key={idx} onClick={handleClose}>
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </div>
    ),
    []
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "unset", boxShadow: "unset", padding: "0 20px" }}
      >
        <HeaderSearch
          open={showSearch}
          handleShow={handleCloseSearch}
        />
        <Drawer open={showDrawer} onClose={handleClose}>
          {listOptionComponent()}
        </Drawer>
        <Toolbar variant="dense">
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            xs={12}
          >
            <Grid item container xs={"auto"} alignItems={"center"}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="tB14" color="inherit" component="div">
                Menu
              </Typography>
            </Grid>
            <IconButton
              edge="start"
              sx={{ padding: "5px" }}
              onClick={handleClickSearch}
            >
              <SearchIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
