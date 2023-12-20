import { DeleteForever, Subject, Title } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { PostDataProps } from "src/types/Post";
import { BoxImage } from "src/ui";
import { UploadFileToDiscordWebhook } from "src/utils/common";

type Props = {
  id: string | number;
  data: PostDataProps[];
  handleChange: (data: PostDataProps[]) => void;
};

export const PostImage = (props: Props) => {
  const { id, data, handleChange } = props;
  const fieldData = data.find((val) => val.id === id)?.content;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // OPEN / CLOSE MENU:
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const onChange = useCallback(
    (event: any) => {
      const file = event.target.files[0];
      if (!file) return;
      UploadFileToDiscordWebhook(file).then((linkUrl: any) => {
        if (!linkUrl) return;
        console.log(linkUrl);
        const currentData = [...data];
        const newData = currentData.map((val) => {
          if (val.id === id) {
            val.content = linkUrl as string;
          }
          return val;
        });
        handleChange(newData);
      });
    },
    [data, handleChange, id]
  );

  const onDelete = useCallback(() => {
    const currentData = [...data];
    const newData = currentData
      .filter((val) => val.id !== id)
      .map((val, index) => {
        val.id = index;
        return val;
      });
    handleChange(newData);
  }, [data, handleChange, id]);

  const handleChangeType = useCallback(
    (type: number) => {
      const currentData = [...data];
      const newData = currentData.map((val) => {
        if (val.id === id) {
          val.type = type;
          val.content = "";
        }
        return val;
      });
      handleChange(newData);
    },
    [data, handleChange, id]
  );

  const Options = useMemo(
    () => [
      {
        id: 1,
        icon: <Title />,
        text: "Tiêu đề",
        onClick: () => handleChangeType(POST_CATEGORY_TYPE.TITLE),
      },
      {
        id: 2,
        icon: <Subject />,
        text: "Nội dung",
        onClick: () => handleChangeType(POST_CATEGORY_TYPE.DETAIL),
      },
      { id: 3, icon: <DeleteForever />, text: "Xóa", onClick: onDelete },
    ],
    [handleChangeType, onDelete]
  );

  const OptionComponent = useCallback(
    () =>
      Options.map((val) => (
        <Option key={val.id} onClick={val.onClick} disableRipple>
          <Grid item container alignItems={"center"}>
            <Grid
              item
              container
              xs={"auto"}
              sx={{
                mr: "10px",
                alignItems: "center",
                ".MuiSvgIcon-root": {
                  color: COLOR_PALLETTE.PRIMARY,
                },
              }}
            >
              {val.icon}
            </Grid>
            <Grid item>
              <Typography paddingTop={"2px"} textTransform={"none"}>
                {val.text}
              </Typography>
            </Grid>
          </Grid>
        </Option>
      )),
    [Options]
  );

  return (
    <Container
      item
      container
      justifyContent={"center"}
      xs={12}
      columnSpacing={"8px"}
    >
      <Grid item xs>
        <TextField
          type="file"
          fullWidth
          label="Hình ảnh"
          placeholder="Nhập url.."
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
      </Grid>
      <Grid item>
        <ButtonHandle onClick={handleOpenMenu}>
          <Grid
            item
            container
            height={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <MenuIcon sx={{ color: COLOR_PALLETTE.WHITE }} />
          </Grid>
        </ButtonHandle>
        <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
          {OptionComponent()}
        </Menu>
      </Grid>
      {fieldData && (
        <Grid item xs={12} mt={"20px"}>
          <BoxImage src={fieldData}></BoxImage>
        </Grid>
      )}
    </Container>
  );
};

const Container = styled(Grid)({
  position: "relative",
  marginBottom: "20px",
  "&:hover": {
    borderColor: COLOR_PALLETTE.PRIMARY,
  },
});

const ButtonHandle = styled(Button)({
  width: "100%",
  height: "100%",
  minWidth: 0,
  background: `${COLOR_PALLETTE.PRIMARY} !important`,
  "&:hover": {
    opacity: "0.7",
  },
});

const Option = styled(MenuItem)({
  minWidth: "200px",
});
