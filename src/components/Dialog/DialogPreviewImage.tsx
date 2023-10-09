import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, Grid, IconButton, useTheme } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";

type Props = {
  open: boolean;
  onClose: () => void;
  url?: string;
};

export const DialogPreviewImage = (props: Props) => {
  const theme = useTheme();
  const { open, onClose, url } = props;

  return (
    <Dialog open={open ?? false} fullWidth maxWidth="lg" onClose={onClose}>
      <Grid
        item
        container
        justifyContent={"flex-end"}
        padding={"10px"}
        xs={12}
        sx={{
          background: "#444444",
        }}
      >
        <IconButton size="medium" onClick={onClose}>
          <CloseIcon
            sx={{
              color: COLOR_PALLETTE.WHITE,
              width: theme.spacing(25),
              height: theme.spacing(25),
            }}
          />
        </IconButton>
      </Grid>
      <Box
        width={1}
        maxHeight={"calc(100vh - 63px)"}
        sx={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLOR_PALLETTE.WHITE,
          img: {
            maxWidth: "100%",
            maxHeight: "100%",
          },
        }}
      >
        <img src={url} alt="" />
      </Box>
    </Dialog>
  );
};
