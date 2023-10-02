import { Box, Grid, Typography } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: COLOR_PALLETTE.PRIMARY,
        overflow: "hidden",
      }}
    >
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        sx={{
          padding: "20px",
          background: "rgba(0,0,0, .16)",
        }}
      >
        <Typography fontSize={"16px"} color={COLOR_PALLETTE.WHITE}>
          © 2023 Copyright: datdang3007@gmail.com
        </Typography>
      </Grid>
    </Box>
  );
};
