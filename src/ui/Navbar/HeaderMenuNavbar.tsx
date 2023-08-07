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
import { useCallback, useMemo, useState } from "react";
import { HeaderSearch } from "../../components/Dialog/HeaderSearch";
import { listMenuOptionProps } from "../../types/Ui";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";

export const HeaderMenuNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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

  const changeDirection = useCallback(
    (path: string) => {
      setShowSearch(false);
      navigate(path);
    },
    [navigate]
  );

  const testEvent = useCallback(() => {}, []);

  const listOption = useMemo(
    () =>
      [
        { label: "Miền", event: () => testEvent() },
        { label: "Vùng", event: () => testEvent() },
        { label: "Đăng nhập", event: () => changeDirection(PATH.LOGIN) },
        { label: "Đăng ký", event: () => changeDirection(PATH.REGISTER) },
      ] as listMenuOptionProps[],
    [changeDirection, testEvent]
  ); 

  const listOptionComponent = useCallback(
    () => (
      <div style={{ width: "250px" }}>
        <List>
          {listOption.map((option, idx) => (
            <ListItem button key={idx} onClick={option.event}>
              <ListItemText primary={option.label} />
            </ListItem>
          ))}
        </List>
      </div>
    ),
    [listOption]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "unset", boxShadow: "unset", padding: "0 20px" }}
      >
        <HeaderSearch open={showSearch} handleShow={handleCloseSearch} />
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
