import { Image } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useCallback } from "react";
import { BoxImage } from "src/ui";
import { UploadFileToDiscordWebhook } from "src/utils/common";

type Props = {
  link?: string;
  setLink: (link: string) => void;
};

export const PostBackground = (props: Props) => {
  const { link, setLink } = props;

  const openSelectFile = useCallback(() => {
    document.getElementById("input-background")?.click();
  }, []);

  const onChange = useCallback(
    (event: any) => {
      const file = event.target.files[0];
      if (!file) return;
      UploadFileToDiscordWebhook(file).then((linkUrl: any) => {
        if (!linkUrl) return;
        console.log(linkUrl);
        setLink(linkUrl as string);
      });
    },
    [setLink]
  );

  return (
    <Grid item xs={12} mb={"20px"}>
      <TextField
        id="input-background"
        type="file"
        fullWidth
        label="Hình ảnh"
        placeholder="Nhập url.."
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          display: "none",
        }}
      />
      {link ? (
        <ImageContainer>
          <Button
            onClick={openSelectFile}
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <BoxImage src={link}></BoxImage>
          </Button>
        </ImageContainer>
      ) : (
        <ButtonNew variant="outlined" fullWidth onClick={openSelectFile}>
          <Grid item container alignItems={"center"} justifyContent={"center"}>
            <Grid item container alignItems={"center"} xs={"auto"} mr={"5px"}>
              <Image />
            </Grid>
            <Grid item>
              <Typography paddingTop={"2px"} textTransform={"none"}>
                Ảnh nền
              </Typography>
            </Grid>
          </Grid>
        </ButtonNew>
      )}
    </Grid>
  );
};

const ButtonNew = styled(Button)(({ theme }) => ({
  borderStyle: "dashed !important",
  height: "500px",
  [theme.breakpoints.down("xl")]: {
    height: "475px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "275px",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  boxSizing: "border-box",
  width: "100%",
  height: "500px",
  [theme.breakpoints.down("xl")]: {
    height: "475px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "275px",
  },
}));
