import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import {
  ClickAwayListener,
  Grid,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { SearchListProps } from "../../types/Ui";
import { SearchListComponent } from "./components/SearchListComponent";

type Props = {
  options?: any[];
  methods: any;
};

export const HeaderMenuSearch = (props: Props) => {
  const theme = useTheme();
  const { options, methods } = props;
  const [searchList, setSearchList] = useState<SearchListProps[]>();
  const [openSearchList, setOpenSearchList] = useState(false);

  const handleClickAway = useCallback(() => {
    setOpenSearchList(false);
  }, []);

  const handleFocusSearch = useCallback(() => {
    setOpenSearchList(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: any) => {
      const key = e.key;
      if (key === "Enter") {
        e.preventDefault();
        methods.setValue("searchValue", e.target.value);
      }
    },
    [methods]
  );

  useEffect(() => {
    setSearchList(openSearchList ? options : undefined);
  }, [openSearchList, options]);

  return (
    <Grid item xs={12} sx={{ position: "relative" }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <TextField
            variant="outlined"
            autoComplete="off"
            onFocus={handleFocusSearch}
            onKeyDown={handleKeyDown}
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
  boxShadow: "0 6px 6px 2px rgba(0,0,0, .16)",
  ".item-search-list": {
    "&:first-of-type": {
      marginTop: "0px",
    },
  },
});
