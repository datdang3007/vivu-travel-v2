import { Breadcrumbs, Grid, Typography, styled } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { BreadCrumbComponentProps } from "../../types";
import { COLOR_PALLETTE } from "../../constants/color";

export const BreadCrumb = (props: BreadCrumbComponentProps) => {
  const { list } = props;

  const breadCrumbs = useCallback(
    () =>
      list.map((val, index) => (
        <ItemLink key={val.title} to="#" onClick={val.onClick}>
          <Grid item container xs="auto">
            {val.icon}
            <Typography>{val.title}</Typography>
          </Grid>
        </ItemLink>
      )),
    [list]
  );

  return (
    <>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="small"
            sx={{ color: `${COLOR_PALLETTE.DARK_GRAY} !important` }}
          />
        }
        aria-label="breadcrumb"
      >
        {breadCrumbs()}
      </Breadcrumbs>
    </>
  );
};

const ItemLink = styled(Link)({
  textDecoration: "none",
  color: COLOR_PALLETTE.DARK_GRAY,
  fontSize: "14px",
  transition: "0.2s",
  "&:hover": {
    color: COLOR_PALLETTE.PRIMARY,
  },
});
