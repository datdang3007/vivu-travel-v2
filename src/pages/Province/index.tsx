import { Grid, styled } from "@mui/material";
import { COMPONENT_SIZE } from "../../constants";
import { COLOR_PALLETTE } from "../../constants/color";
import {
  BlogContent,
  GroupCardRecommend,
  ImageStock,
} from "../../components/BlogContent";
import { useCallback } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { BreadCrumbProps } from "../../types";

export const Province = () => {
  const ChangeNavigate = useCallback(() => {
    console.log("change navigate");
  }, []);

  const HeaderBreadCrumbList = [
    {
      icon: <HomeOutlinedIcon sx={{ fontSize: "21px" }} />,
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
        mt={{ xs: "20px", sm: "40px", md: "80px" }}
        mb={"40px"}
        justifyContent={"center"}
      >
        <Grid item xs={11} md={11} xl={9}>
          <Grid item container justifyContent={"space-between"} xs={12}>
            <Grid item xs={12} md={7.5} xl={7.5}>
              <BlogContent HeaderBreadCrumbList={HeaderBreadCrumbList} />
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Grid item xs={12} mt={{ xs: "40px", md: "0" }}>
                <GroupCardRecommend />
              </Grid>
              <Grid item xs={12} mt={{ xs: "40px", md: "20px" }}>
                <GroupCardRecommend />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            mt={{ xs: "40px", md: "60px", lg: "80px" }}
            mb={{ xs: "0px", lg: "40px" }}
          >
            <ImageStock />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)({
  background: COLOR_PALLETTE.PRIMARY,
});
