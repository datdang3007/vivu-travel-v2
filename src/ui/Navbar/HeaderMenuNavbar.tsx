import {
  AppBar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export const HeaderMenuNavbar = () => {
  const theme = useTheme();

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
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="tB14" color="inherit" component="div">
                Menu
              </Typography>
            </Grid>
            <IconButton edge="start" sx={{ padding: "5px" }}>
              <SearchIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
