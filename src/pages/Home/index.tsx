import { Box, Grid } from "@mui/material";

export const Home = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        background:
          "url(https://cdn.discordapp.com/attachments/1089123119668658206/1091207896345354320/46195.png) no-repeat top/cover",
        boxShadow: `0px 0px 1000px 500px rgba(0, 0, 0, 0.5) inset`,
      }}
    >
      <Box sx={{ width: "100%", height: "100vh" }}></Box>
    </Grid>
  );
};
