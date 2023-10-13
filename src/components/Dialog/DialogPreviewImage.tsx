import { Box, Dialog } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";

type Props = {
  open: boolean;
  onClose: () => void;
  url?: string;
};

export const DialogPreviewImage = (props: Props) => {
  const { open, onClose, url } = props;

  return (
    <Dialog
      open={open ?? false}
      maxWidth="lg"
      onClose={onClose}
      sx={{
        ".MuiPaper-root": {
          margin: { xs: 0, sm: "10px" },
          width: "95%",
        },
      }}
    >
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
            objectFit: "contain",
          },
        }}
      >
        <img src={url} alt="" />
      </Box>
    </Dialog>
  );
};
