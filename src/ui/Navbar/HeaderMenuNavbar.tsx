import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useState } from "react";

export const HeaderMenuNavbar = () => {
  const theme = useTheme();
  const [headerDropdown, setHeaderDropdown] = useState<HTMLElement | null>(
    null
  );
  const open = Boolean(headerDropdown);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHeaderDropdown(event.currentTarget);
  };
  const handleClose = () => {
    setHeaderDropdown(null);
  };

  const searchInput = useCallback(() => {
    const searchValue = prompt("Tìm kiếm:");
    console.log(searchValue);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "unset", boxShadow: "unset", padding: "0 20px" }}
      >
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
                id="header-button"
                color="inherit"
                aria-label="menu"
                aria-controls={open ? "header-dropdown" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="tB14" color="inherit" component="div">
                Menu
              </Typography>
            </Grid>
            <Menu
              id="header-dropdown"
              anchorEl={headerDropdown}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "header-button",
              }}
            >
              <MenuItem onClick={handleClose}>Miền</MenuItem>
              <MenuItem onClick={handleClose}>Vùng</MenuItem>
              <MenuItem onClick={handleClose}>Đăng Nhập</MenuItem>
              <MenuItem onClick={handleClose}>Đăng Ký</MenuItem>
            </Menu>
            <IconButton
              edge="start"
              sx={{ padding: "5px" }}
              onClick={searchInput}
            >
              <SearchIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
