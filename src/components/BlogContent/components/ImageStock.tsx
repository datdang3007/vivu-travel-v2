import { Button, Grid, Typography, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { IPlace } from "src/interfaces";
import { COLOR_PALLETTE } from "../../../constants/color";
import { ImageListDialog } from "./ImageListDialog";
import { ImageStockItem } from "./ImageStockItem";
import { ImageStockShowMore } from "./ImageStockShowMore";

export interface PlaceItemProps {
  id: string | number;
  name: string;
  link: string;
}

type ImageStockProps = {
  isShowName?: boolean;
  data?: IPlace[] | null;
};

const limitShortImages = 5;
export const ImageStock = (props: ImageStockProps) => {
  const { isShowName, data } = props;
  const [images, setImages] = useState<PlaceItemProps[]>([]);
  const [showImageListDialog, setShowImageListDialog] =
    useState<boolean>(false);

  const eventToggleDialog = useCallback(() => {
    setShowImageListDialog((pre) => !pre);
  }, []);

  const renderImageStockItems = useCallback(() => {
    const defineShortImages = [...images].splice(0, limitShortImages);
    return defineShortImages.map((image, index) => {
      if (index === limitShortImages - 1) {
        return (
          <ImageStockShowMore
            key={`${image.id} - ${image.name}`}
            data={image}
            isShowName={isShowName}
            onOpenDialog={eventToggleDialog}
          />
        );
      }
      return (
        <ImageStockItem
          key={`${image.id} - ${image.name}`}
          data={image}
          isShowName={isShowName}
        />
      );
    });
  }, [eventToggleDialog, images, isShowName]);

  useEffect(() => {
    if (!data) return;
    const listImages: PlaceItemProps[] = [];
    data.forEach((place) => {
      const { name, image_stock } = place;
      image_stock?.forEach((imageStock) => {
        const { id, link } = imageStock;
        listImages.push({ id, name, link });
      });
    });

    setImages(listImages);
  }, [data]);

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
          images={images}
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
