import {
  Box,
  Divider,
  Grid,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { SearchListProps } from "../../../types/Ui";

interface ItemSearchListComponentProps {
  title?: string;
  listKey?: string;
  list?: any;
}

export const ItemSearchListComponent = (
  props: ItemSearchListComponentProps
) => {
  const theme = useTheme();
  const { title, list } = props;
  return (
    <Grid className="item-search-list" item xs={12} mt={"15px"}>
      <Grid item xs={12}>
        <Typography variant="tR16">{title}</Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} mt={"10px"}>
        {list.map((val: SearchListProps, idx: string) => (
          <Grid
            key={val.id}
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
            <Box sx={{ width: "60px", height: "60px" }}>
              <Image src={val.img} alt={val.name} />
            </Box>
            <Box ml={"12px"}>
              <Typography variant="tR16">{val.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Image = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
});
