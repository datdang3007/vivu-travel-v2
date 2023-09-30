import { BoxImage } from "@/ui";
import { Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Dialog,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Slide,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useCallback } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
];

type Props = {
  open: boolean;
  eventToggle: () => void;
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
  const { open, eventToggle } = props;

  const ImageListComponent = useCallback(() => {
    return itemData.map((item) => (
      <ImageListItem key={item.img}>
        <Box width={1} height={1} sx={{ overflow: "hidden" }}>
          <BoxImage isCursorPointer src={item.img} alt={item.title} />
        </Box>
        <ImageListItemBar
          title={item.title}
          subtitle={<span>by: {item.author}</span>}
          position="below"
        />
      </ImageListItem>
    ));
  }, []);

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
        <Grid item xs={12}>
          <ImageList cols={5} sx={{ width: "100%", height: "100%" }}>
            {ImageListComponent()}
          </ImageList>
        </Grid>
      </ImageListContainer>
    </Dialog>
  );
};

const ImageListContainer = styled(Grid)({
  padding: "30px",
  height: "calc(100vh - 64px)",
  overflowY: "auto",
});
