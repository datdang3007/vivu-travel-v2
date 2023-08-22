import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";
import { BoxImage } from "../../../ui";

export const ImageStockItem = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={12 / 5} padding={"20px 10px"}>
      <Grid item xs={12}>
        <Box width={1} sx={{ cursor: "zoom-in", aspectRatio: "1/1" }}>
          <BoxImage src="https://cdn.discordapp.com/attachments/1089123119668658206/1112782725687029942/lang-tranh-dong-ho-ivivu.png" />
        </Box>
      </Grid>
      <Grid item xs={12} mt={"10px"}>
        <Typography fontSize={"20px"} fontWeight={"bold"}>
          Làng tranh Đông Hồ
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ImageStock = () => {
  return (
    <Grid item xs={12}>
      <Grid
        item
        container
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        xs={12}
      >
        <Grid item xs>
          <Typography
            fontSize={{ xs: "28px", sm: "32px", md: "40px" }}
            fontWeight={"bold"}
          >
            Kho ảnh
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <ButtonSeeMore variant="outlined">
            <Typography fontSize={{ xs: "12px", sm: "16px" }}>
              Xem tất cả
            </Typography>
          </ButtonSeeMore>
        </Grid>
      </Grid>
      <Grid item container xs={12} mt={{ lg: "40px" }}>
        <ImageStockItem />
        <ImageStockItem />
        <ImageStockItem />
        <ImageStockItem />
        <ImageStockItem />
      </Grid>
    </Grid>
  );
};

const ButtonSeeMore = styled(Button)({
  borderRadius: "25px",
  borderColor: `${COLOR_PALLETTE.PRIMARY} !important`,
  ".MuiTypography-root": {
    color: COLOR_PALLETTE.PRIMARY,
    textTransform: "none",
  },
  "&:hover": {
    background: COLOR_PALLETTE.PRIMARY,
    ".MuiTypography-root": {
      color: COLOR_PALLETTE.WHITE,
    },
  },
});
