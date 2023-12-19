import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { Fragment, useCallback, useState } from "react";
import { DialogPreviewImage } from "src/components/Dialog";
import { BoxImage } from "../../../ui";
import { PlaceItemProps } from "./ImageStock";

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

const GridOneLine = styled(Grid)({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
});
