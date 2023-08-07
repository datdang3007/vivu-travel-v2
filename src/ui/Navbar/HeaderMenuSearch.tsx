import {
  Box,
  CircularProgress,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import { InputTextField } from "../../components/Form";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { GEOGRAPHY_CATEGORY } from "../../constants";

interface SearchListProps {
  id: string | number;
  img: string;
  name: string;
  category: string;
}

export const HeaderMenuSearch = () => {
  const theme = useTheme();
  const [searchList, setSearchList] = useState<SearchListProps[]>();
  const [openSearchList, setOpenSearchList] = useState(false);

  const handleClickAway = useCallback(() => {
    setOpenSearchList(false);
    setSearchList(undefined);
  }, []);

  const handleFocusSearch = useCallback(() => {
    setOpenSearchList(true);
    setTimeout(() => {
      //   setSearchList([]);
      setSearchList([
        {
          id: "1",
          img: "https://picsum.photos/500/500",
          name: "test1",
          category: "region",
        },
        {
          id: "2",
          img: "https://picsum.photos/500/500",
          name: "test2",
          category: "territory",
        },
        {
          id: "3",
          img: "https://picsum.photos/500/500",
          name: "test3",
          category: "province",
        },
        {
          id: "4",
          img: "https://picsum.photos/500/500",
          name: "test4",
          category: "province",
        },
        {
          id: "5",
          img: "https://picsum.photos/500/500",
          name: "test5",
          category: "place",
        },
      ]);
    }, 2000);
  }, []);

  const listComponentPush = useCallback(
    (title: string, listKey: string, list: any) => {
      return (
        <Grid
          key={listKey}
          className="item-search-list"
          item
          xs={12}
          mt={"15px"}
        >
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
    },
    [theme.palette.common.white, theme.palette.primary.main]
  );

  const searchListComponent = useCallback(() => {
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
          listComponentPush(
            "Miền",
            GEOGRAPHY_CATEGORY.REGION,
            categorizedLists[GEOGRAPHY_CATEGORY.REGION]
          )
        );

      if (categorizedLists[GEOGRAPHY_CATEGORY.TERRITORY].length > 0)
        listResult.push(
          listComponentPush(
            "Vùng",
            GEOGRAPHY_CATEGORY.TERRITORY,
            categorizedLists[GEOGRAPHY_CATEGORY.TERRITORY]
          )
        );

      if (categorizedLists[GEOGRAPHY_CATEGORY.PROVINCE].length > 0)
        listResult.push(
          listComponentPush(
            "Tỉnh",
            GEOGRAPHY_CATEGORY.PROVINCE,
            categorizedLists[GEOGRAPHY_CATEGORY.PROVINCE]
          )
        );

      if (categorizedLists[GEOGRAPHY_CATEGORY.PLACE].length > 0)
        listResult.push(
          listComponentPush(
            "Địa Điểm",
            GEOGRAPHY_CATEGORY.PLACE,
            categorizedLists[GEOGRAPHY_CATEGORY.PLACE]
          )
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
          {listResult.length > 0 ? listResult : <Typography>Empty</Typography>}
        </ListSearchResult>
      </Grid>
    );
  }, [listComponentPush, searchList]);

  return (
    <Grid item xs={12} sx={{ position: "relative" }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <InputTextField
            name={"searchValue"}
            variant="outlined"
            autoComplete="off"
            onFocus={handleFocusSearch}
            fullWidth
            placeholder="Tìm kiếm..."
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    cursor: "pointer",
                    background: theme.palette.common.white,
                    height: "100%",
                    marginLeft: "unset",
                    padding: "3.5px 15px",
                  }}
                >
                  <SearchIcon sx={{ color: theme.palette.common.black }} />
                </InputAdornment>
              ),
              sx: {
                fontSize: "16px",
                borderRadius: "15px",
                overflow: "hidden",
                borderColor: "unset !important",
                padding: "unset",
                input: {
                  padding: "4px 15px",
                  background: theme.palette.common.white,
                  color: theme.palette.common.black,
                  borderRadius: "0px !important",
                },
                fieldset: {
                  border: "unset !important",
                },
              },
            }}
          />
        </div>
      </ClickAwayListener>
      <Dropdown
        style={{
          display: openSearchList ? "block" : "none",
          background: theme.palette.common.white,
        }}
      >
        {searchListComponent()}
      </Dropdown>
    </Grid>
  );
};

const Dropdown = styled("div")({
  position: "absolute",
  top: "125%",
  width: "100%",
  padding: `15px 0`,
  borderRadius: "15px",
  ".item-search-list": {
    "&:first-of-type": {
      marginTop: "0px",
    },
  },
});

const Image = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
});

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
