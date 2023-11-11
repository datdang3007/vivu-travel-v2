import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Grid, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BlogContent,
  ContentOverview,
  GroupProvinceRecommend,
  GroupServiceRecommend,
  ImageStock,
} from "src/components/BlogContent";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { useMasterContext } from "src/context/MasterContext";
import { useCallAPIFind } from "src/hooks";
import { IProvince } from "src/interfaces";
import { PATH } from "src/routes/path";
import { BreadCrumbProps } from "src/types";
import { GetIdParams } from "src/utils/common";

export const Province = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isTabletMini } = useMasterContext();
  const provinceID = GetIdParams(location.pathname);
  const [data, setData] = useState<IProvince | null>(null);
  const { requestFindProvinceByID } = useCallAPIFind();

  const ChangeNavigate = useCallback(
    (pathname: string) => {
      navigate(pathname);
    },
    [navigate]
  );

  const HeaderBreadCrumbList = [
    {
      icon: <HomeOutlinedIcon sx={{ fontSize: "21px" }} />,
      title: "Trang Chủ",
      onClick: () => ChangeNavigate(PATH.HOME),
    },
    {
      title: data?.region.name,
      onClick: () => ChangeNavigate(`${PATH.REGION}/${data?.region.id}`),
    },
    {
      title: data?.territory.name,
      onClick: () => ChangeNavigate(`${PATH.TERRITORY}/${data?.territory.id}`),
    },
  ] as BreadCrumbProps[];

  useEffect(() => {
    requestFindProvinceByID(provinceID).then((result) => {
      setData(result);
    });
  }, [provinceID, requestFindProvinceByID]);

  if (!data) return null;

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
              <BlogContent HeaderBreadCrumbList={HeaderBreadCrumbList}>
                <ContentOverview
                  title={data.name}
                  image={data.image}
                  content={data.overview}
                />
              </BlogContent>
            </Grid>
            <Grid
              item
              container={isTabletMini && true}
              justifyContent={"space-between"}
              xs={12}
              md={4}
              xl={4}
            >
              <Grid item xs={12} sm={5.8} md={12} mt={{ xs: "40px", md: "0" }}>
                <GroupProvinceRecommend placeList={data.placeList ?? []} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={5.8}
                md={12}
                mt={{ xs: "40px", md: "20px" }}
              >
                <GroupServiceRecommend />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            mt={{ xs: "40px", md: "60px", lg: "80px" }}
            mb={{ xs: "0px", lg: "40px" }}
          >
            <ImageStock isShowName />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)(({ theme }) => ({
  background: COLOR_PALLETTE.PRIMARY,
  [theme.breakpoints.down("md")]: {
    background: COLOR_PALLETTE.WHITE,
  },
}));
