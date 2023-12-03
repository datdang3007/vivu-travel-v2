import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { Fragment, useCallback, useState } from "react";
import { DialogPreviewImage } from "src/components/Dialog";
import { COLOR_PALLETTE } from "../../../constants/color";
import { BoxImage } from "../../../ui";
import { ImageListDialog } from "./ImageListDialog";
import { IPlace } from "src/interfaces";

interface PlaceItemProps {
  id: string | number;
  name: string;
  link: string;
}

type ImageStockItemProps = {
  isShowName?: boolean;
  data: PlaceItemProps;
};

export const ImageStockItem = (props: ImageStockItemProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { isShowName, data } = props;
  const { id, name, link } = data;

  const handleOpenDialog = useCallback(() => {
    setOpenDialog(true);
  }, []);
  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  return (
    <Fragment key={id}>
      <Grid item xs={6} sm={4} md={3} xl={12 / 5} padding={"20px 10px"}>
        <Grid item xs={12}>
          <Box width={1} sx={{ aspectRatio: "1/1" }}>
            <Button
              fullWidth
              sx={{ cursor: "zoom-in", height: 1, padding: 0 }}
              onClick={handleOpenDialog}
            >
              <BoxImage src={link} />
            </Button>
          </Box>
        </Grid>
        {isShowName && (
          <GridOneLine item xs={12} mt={"10px"}>
            <Typography
              fontSize={{ xs: "16px", sm: "20px" }}
              fontWeight={"bold"}
            >
              {name}
            </Typography>
          </GridOneLine>
        )}
      </Grid>
      <DialogPreviewImage
        open={openDialog}
        onClose={handleCloseDialog}
        url={link}
      />
    </Fragment>
  );
};

type ImageStockProps = {
  isShowName?: boolean;
  data?: IPlace[] | null;
};

export const ImageStock = (props: ImageStockProps) => {
  const { isShowName, data } = props;
  const [showImageListDialog, setShowImageListDialog] =
    useState<boolean>(false);

  const eventToggleDialog = useCallback(() => {
    setShowImageListDialog((pre) => !pre);
  }, []);

  const renderImageStockItems = useCallback(() => {
    return data?.map((place) => {
      const { name, image_stock } = place;
      return image_stock?.map((imageStock) => {
        const { id, link } = imageStock;
        const dataImageStock: PlaceItemProps = { id, name, link };
        return <ImageStockItem isShowName={isShowName} data={dataImageStock} />;
      });
    });
  }, [data, isShowName]);

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
        {renderImageStockItems()}
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
