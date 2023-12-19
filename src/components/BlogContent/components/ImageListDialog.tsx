import { Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useCallback, useState } from "react";
import { DialogPreviewImage } from "src/components/Dialog";
import { BoxImage } from "../../../ui";
import { PlaceItemProps } from "./ImageStock";

type Props = {
  open: boolean;
  eventToggle: () => void;
  images: PlaceItemProps[];
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ImageListDialog = (props: Props) => {
  const { open, eventToggle, images } = props;
  const [link, setLink] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpenDialog = useCallback((url: string) => {
    setLink(url);
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const ImageListComponent = useCallback(() => {
    return images.map((item) => {
      return (
        <Grid key={item.link} xs={12} sm={4} md={3} xl={2} padding={"10px"}>
          <Box width={1} sx={{ overflow: "hidden", aspectRatio: "1/1" }}>
            <Tooltip title={item.name}>
              <Button
                fullWidth
                onClick={() => handleOpenDialog(item.link)}
                sx={{ cursor: "zoom-in", height: 1, padding: 0 }}
              >
                <BoxImage isCursorPointer src={item.link} alt={item.name} />
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      );
    });
  }, [handleOpenDialog, images]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={eventToggle}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Grid item container justifyContent={"center"} xs={12}>
            <Grid item container alignItems={"center"} xs={11} xl={11.5}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={eventToggle}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Kho ảnh
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <ImageListContainer item container justifyContent={"center"} xs={12}>
        <Grid container height={"fit-content"}>
          {ImageListComponent()}
        </Grid>
      </ImageListContainer>
      <DialogPreviewImage
        open={openDialog}
        onClose={handleCloseDialog}
        url={link}
      />
    </Dialog>
  );
};

const ImageListContainer = styled(Grid)({
  padding: "30px",
  maxHeight: "calc(100vh - 64px)",
  overflowY: "auto",
});
