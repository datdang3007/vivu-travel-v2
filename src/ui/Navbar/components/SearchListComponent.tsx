import { Box, CircularProgress, Grid, Typography, styled } from "@mui/material";
import { FILTER_CODE } from "../../../constants";
import { SearchListProps } from "../../../types/Ui";
import { ItemSearchListComponent } from "./ItemSearchListComponent";

interface SearchListComponentProps {
  searchList?: SearchListProps[];
}

export const SearchListComponent = (props: SearchListComponentProps) => {
  const { searchList } = props;

  let listResult = [];
  if (!!searchList && !!searchList?.length) {
    const categorizedLists = searchList?.reduce(
      (result, val) => {
        result[val.category as FILTER_CODE]?.push(val);
        return result;
      },
      {
        [FILTER_CODE.REGION]: [] as SearchListProps[],
        [FILTER_CODE.TERRITORY]: [] as SearchListProps[],
        [FILTER_CODE.PROVINCE]: [] as SearchListProps[],
        [FILTER_CODE.PLACE]: [] as SearchListProps[],
        [FILTER_CODE.POST]: [] as SearchListProps[],
      }
    );

    if (categorizedLists[FILTER_CODE.REGION].length > 0)
      listResult?.push(
        <ItemSearchListComponent
          title="Miền"
          key={FILTER_CODE.REGION}
          category={FILTER_CODE.REGION}
          list={categorizedLists[FILTER_CODE.REGION]}
        />
      );

    if (categorizedLists[FILTER_CODE.TERRITORY].length > 0)
      listResult?.push(
        <ItemSearchListComponent
          title="Vùng"
          key={FILTER_CODE.TERRITORY}
          category={FILTER_CODE.TERRITORY}
          list={categorizedLists[FILTER_CODE.TERRITORY]}
        />
      );

    if (categorizedLists[FILTER_CODE.PROVINCE].length > 0)
      listResult?.push(
        <ItemSearchListComponent
          title="Tỉnh"
          key={FILTER_CODE.PROVINCE}
          category={FILTER_CODE.PROVINCE}
          list={categorizedLists[FILTER_CODE.PROVINCE]}
        />
      );

    if (categorizedLists[FILTER_CODE.PLACE].length > 0)
      listResult?.push(
        <ItemSearchListComponent
          title="Địa Điểm"
          key={FILTER_CODE.PLACE}
          category={FILTER_CODE.PLACE}
          list={categorizedLists[FILTER_CODE.PLACE]}
        />
      );

    if (categorizedLists[FILTER_CODE.POST].length > 0)
      listResult?.push(
        <ItemSearchListComponent
          title="Bài Viết"
          key={FILTER_CODE.POST}
          category={FILTER_CODE.POST}
          list={categorizedLists[FILTER_CODE.POST]}
        />
      );
  }

  return !searchList || !searchList?.length ? (
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
          <Typography variant="tR14">không có dữ liệu</Typography>
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
