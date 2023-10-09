import { Box, Button, Dialog, Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "../../../constants/color";
import { BoxImage } from "../../../ui";
import { useCallback, useState } from "react";
import { ImageListDialog } from "./ImageListDialog";
import { DialogPreviewImage } from "src/components/Dialog";

type Props = {
  isShowName?: boolean;
};

export const ImageStockItem = (props: Props) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { isShowName } = props;

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, []);
  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  return (
    <>
      <Grid item xs={6} sm={4} md={3} xl={12 / 5} padding={"20px 10px"}>
        <Grid item xs={12}>
          <Box width={1} sx={{ aspectRatio: "1/1" }}>
            <Button
              fullWidth
              sx={{ cursor: "zoom-in", height: 1, padding: 0 }}
              onClick={handleOpenDialog}
            >
              <BoxImage src="https://cdn.discordapp.com/attachments/1089123119668658206/1112782725687029942/lang-tranh-dong-ho-ivivu.png" />
            </Button>
          </Box>
        </Grid>
        {isShowName && (
          <GridOneLine item xs={12} mt={"10px"}>
            <Typography
              fontSize={{ xs: "16px", sm: "20px" }}
              fontWeight={"bold"}
            >
              Làng tranh Đông Hồ
            </Typography>
          </GridOneLine>
        )}
      </Grid>
      <DialogPreviewImage
        open={openDialog}
        onClose={handleCloseDialog}
        url={
          "https://cdn.discordapp.com/attachments/1085804453246009374/1100340027306811453/Bac_Trung_Bo.png"
        }
      />
    </>
  );
};

export const ImageStock = (props: Props) => {
  const { isShowName } = props;
  const [showImageListDialog, setShowImageListDialog] =
    useState<boolean>(false);

  const eventToggleDialog = useCallback(() => {
    setShowImageListDialog((pre) => !pre);
  }, []);

  return (
    <Grid item xs={12}>
      <Grid
        item
        container
        justifyContent={"space-between"}
        alignItems={"flex-end"}
        xs={12}
      >
        <ImageListDialog
          open={showImageListDialog}
          eventToggle={eventToggleDialog}
        />
        <Grid item xs>
          <Typography
            fontSize={{ xs: "28px", sm: "32px", md: "40px" }}
            fontWeight={"bold"}
          >
            Kho ảnh
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <ButtonSeeMore variant="outlined" onClick={eventToggleDialog}>
            <Typography fontSize={{ xs: "12px", sm: "16px" }}>
              Xem tất cả
            </Typography>
          </ButtonSeeMore>
        </Grid>
      </Grid>
      <Grid item container xs={12} mt={{ lg: "40px" }}>
        <ImageStockItem isShowName={isShowName} />
        <ImageStockItem isShowName={isShowName} />
        <ImageStockItem isShowName={isShowName} />
        <ImageStockItem isShowName={isShowName} />
        <ImageStockItem isShowName={isShowName} />
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

const GridOneLine = styled(Grid)({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
});
