import { SearchListProps } from "../../../types/Ui";
import { GEOGRAPHY_CATEGORY } from "../../../constants";
import { ItemSearchListComponent } from "./ItemSearchListComponent";
import { Box, CircularProgress, Grid, Typography, styled } from "@mui/material";

interface SearchListComponentProps {
  searchList?: SearchListProps[];
}

export const SearchListComponent = (props: SearchListComponentProps) => {
  const { searchList } = props;

  let listResult = [];
  if (searchList) {
    const categorizedLists = searchList.reduce(
      (result, val) => {
        result[val.category as GEOGRAPHY_CATEGORY].push(val);
        return result;
      },
      {
        [GEOGRAPHY_CATEGORY.REGION]: [] as SearchListProps[],
        [GEOGRAPHY_CATEGORY.TERRITORY]: [] as SearchListProps[],
        [GEOGRAPHY_CATEGORY.PROVINCE]: [] as SearchListProps[],
        [GEOGRAPHY_CATEGORY.PLACE]: [] as SearchListProps[],
      }
    );

    if (categorizedLists[GEOGRAPHY_CATEGORY.REGION].length > 0)
      listResult.push(
        <ItemSearchListComponent
          title="Miền"
          key={GEOGRAPHY_CATEGORY.REGION}
          list={categorizedLists[GEOGRAPHY_CATEGORY.REGION]}
        />
      );

    if (categorizedLists[GEOGRAPHY_CATEGORY.TERRITORY].length > 0)
      listResult.push(
        <ItemSearchListComponent
          title="Vùng"
          key={GEOGRAPHY_CATEGORY.TERRITORY}
          list={categorizedLists[GEOGRAPHY_CATEGORY.TERRITORY]}
        />
      );

    if (categorizedLists[GEOGRAPHY_CATEGORY.PROVINCE].length > 0)
      listResult.push(
        <ItemSearchListComponent
          title="Tỉnh"
          key={GEOGRAPHY_CATEGORY.PROVINCE}
          list={categorizedLists[GEOGRAPHY_CATEGORY.PROVINCE]}
        />
      );

    if (categorizedLists[GEOGRAPHY_CATEGORY.PLACE].length > 0)
      listResult.push(
        <ItemSearchListComponent
          title="Địa Điểm"
          key={GEOGRAPHY_CATEGORY.PLACE}
          list={categorizedLists[GEOGRAPHY_CATEGORY.PLACE]}
        />
      );
  }

  return !searchList ? (
    <Grid
      item
      container
      alignItems={"center"}
      justifyContent={"center"}
      xs={12}
    >
      <Box>
        <CircularProgress size={30} />
      </Box>
    </Grid>
  ) : (
    <Grid item container justifyContent={"center"} xs={12}>
      <ListSearchResult item xs={11.5}>
        {listResult.length > 0 ? (
          listResult
        ) : (
          <Typography variant="tR14">Empty</Typography>
        )}
      </ListSearchResult>
    </Grid>
  );
};

const ListSearchResult = styled(Grid)({
  maxHeight: "370px",
  overflowX: "unset",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});
