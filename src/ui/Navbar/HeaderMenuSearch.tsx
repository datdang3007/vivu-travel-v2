import {
  ClickAwayListener,
  Grid,
  InputAdornment,
  useTheme,
} from "@mui/material";
import { InputTextField } from "../../components/Form";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { SearchListProps } from "../../types/Ui";
import { SearchListComponent } from "./components/SearchListComponent";

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
        <SearchListComponent searchList={searchList} />
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
