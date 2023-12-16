import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FILTER_CODE } from "src/constants";
import { PATH } from "src/routes/path";
import { BoxImage } from "src/ui/Box/BoxImage";
import { SearchListProps } from "../../../types/Ui";

interface ItemSearchListComponentProps {
  title?: string;
  list?: any;
  category?: string;
}

export const ItemSearchListComponent = (
  props: ItemSearchListComponentProps
) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { title, list, category } = props;

  const setPrefix = useCallback((value: string) => {
    switch (value) {
      case FILTER_CODE.REGION:
        return PATH.REGION;
      case FILTER_CODE.TERRITORY:
        return PATH.TERRITORY;
      case FILTER_CODE.PROVINCE:
        return PATH.PROVINCE;
      case FILTER_CODE.PLACE:
        return PATH.PLACE;
      case FILTER_CODE.POST:
        return PATH.POST_DETAIL;
      default:
        return null;
    }
  }, []);

  const handleClickItem = useCallback(
    (id: string | number) => {
      if (!category) return null;
      let prefix = setPrefix(category);
      navigate(`${prefix}/${id}`, {
        replace: true,
      });
    },
    [category, navigate, setPrefix]
  );

  return (
    <Grid className="item-search-list" item xs={12} mt={"15px"}>
      <Grid item xs={12}>
        <Typography variant="tR16">{title}</Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} mt={"10px"}>
        {list.map((val: SearchListProps, idx: string) => (
          <Button
            key={val.id}
            fullWidth
            onClick={() => handleClickItem(val.id)}
            sx={{
              padding: "0",
            }}
          >
            <Grid
              item
              container
              alignItems={"center"}
              xs={12}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                marginTop: idx && "10px",
                transition: "0.3s",
                "&:hover": {
                  background: theme.palette.primary.main,
                  color: theme.palette.common.white,
                },
              }}
            >
              <Grid item xs={"auto"}>
                <Box sx={{ width: "60px", height: "60px" }}>
                  <BoxImage src={val.image} alt={val.name} />
                </Box>
              </Grid>
              <GridOneLine item xs>
                <Typography variant="tR16">{val.name}</Typography>
              </GridOneLine>
            </Grid>
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

const GridOneLine = styled(Grid)({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  textAlign: "left",
  paddingInline: "12px",
});
