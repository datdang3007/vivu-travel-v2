import { Add, InsertPhoto, Subject, Title } from "@mui/icons-material";
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { PostDataProps } from "src/types/Post";

type NewBoxProps = {
  data: PostDataProps[];
  setData: (data: PostDataProps[]) => void;
};

export const NewBox = (props: NewBoxProps) => {
  const { data, setData } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // OPEN / CLOSE MENU:
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // EVENT DROPDOWN CLICK:
  const handleAddNewData = useCallback(
    (type: number) => {
      const dataTitle = {
        id: data.length + 1,
        type: type,
        content: "",
      };
      const newData = [...data, { ...dataTitle }] as PostDataProps[];
      setData(newData);
      handleCloseMenu();
    },
    [data, setData]
  );

  const Options = useMemo(
    () => [
      {
        id: 1,
        icon: <Title />,
        text: "Tiêu đề",
        onClick: () => handleAddNewData(POST_CATEGORY_TYPE.TITLE),
      },
      {
        id: 2,
        icon: <Subject />,
        text: "Nội dung",
        onClick: () => handleAddNewData(POST_CATEGORY_TYPE.DETAIL),
      },
      {
        id: 3,
        icon: <InsertPhoto />,
        text: "Hình ảnh",
        onClick: () => handleAddNewData(POST_CATEGORY_TYPE.IMAGE),
      },
    ],
    [handleAddNewData]
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
    <Grid item xs={12}>
      <ButtonNew variant="outlined" fullWidth onClick={handleOpenMenu}>
        <Grid item container alignItems={"center"} justifyContent={"center"}>
          <Grid item container alignItems={"center"} xs={"auto"} mr={"5px"}>
            <Add />
          </Grid>
          <Grid item>
            <Typography paddingTop={"2px"} textTransform={"none"}>
              Thêm
            </Typography>
          </Grid>
        </Grid>
      </ButtonNew>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {OptionComponent()}
      </Menu>
    </Grid>
  );
};

const ButtonNew = styled(Button)({
  borderStyle: "dashed !important",
  padding: "15px",
});

const Option = styled(MenuItem)({
  minWidth: "200px",
});
