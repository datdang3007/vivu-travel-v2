import { Grid, styled } from "@mui/material";
import { COMPONENT_SIZE } from "../../constants";
import { COLOR_PALLETTE } from "../../constants/color";
import { BlogContent } from "../../components/BlogContent";
import { useCallback } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { BreadCrumbProps } from "../../types";

export const Province = () => {
  const ChangeNavigate = useCallback(() => {
    console.log("change navigate");
  }, []);

  const HeaderBreadCrumbList = [
    {
      icon: <HomeOutlinedIcon />,
      title: "Home",
      onClick: () => ChangeNavigate(),
    },
    {
      title: "Region",
      onClick: () => ChangeNavigate(),
    },
    {
      title: "Territory",
      onClick: () => ChangeNavigate(),
    },
    {
      title: "Province",
    },
  ] as BreadCrumbProps[];

  return (
    <Grid container>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      ></HeaderBackground>
      <Grid
        item
        container
        xs={12}
        mt={"80px"}
        mb={"40px"}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={9}>
          <Grid item container justifyContent={"space-between"} xs={12}>
            <Grid item xs={7.5}>
              <BlogContent HeaderBreadCrumbList={HeaderBreadCrumbList} />
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>

          {/* <Grid item xs={12}> Photo Stock</Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)({
  background: COLOR_PALLETTE.PRIMARY,
});
