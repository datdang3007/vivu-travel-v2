import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Grid, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BlogContent,
  ContentDetail,
  ContentOverview,
  GroupPlaceRecommend,
  GroupServiceRecommend,
  ImageStock,
  RatingAndComment,
} from "src/components/BlogContent";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { useMasterContext } from "src/context/MasterContext";
import { useCallAPIFind } from "src/hooks";
import { IPlace, IPlaceCategory } from "src/interfaces";
import { PATH } from "src/routes/path";
import { BreadCrumbProps } from "src/types";
import { GetIdParams } from "src/utils/common";

export const Place = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isTabletMini } = useMasterContext();
  const placeID = GetIdParams(location.pathname);
  const [data, setData] = useState<IPlace | null>(null);
  const [dataImageStock, setDataImageStock] = useState<IPlace[] | null>(null);
  const {
    requestFindPlaceByID,
    requestFindPlaceByListID,
    requestFilterPlaceRecommend,
  } = useCallAPIFind();
  const [dataPlaceRecommend, setDataPlaceRecommend] = useState<IPlace[]>([]);

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
    {
      title: data?.province.name,
      onClick: () => ChangeNavigate(`${PATH.PROVINCE}/${data?.territory.id}`),
    },
  ] as BreadCrumbProps[];

  const renderContentComponent = useCallback(() => {
    return data?.contents?.map((val) => {
      const { id, type, content } = val;
      return <ContentDetail key={id} type={type} content={content} />;
    });
  }, [data]);

  useEffect(() => {
    requestFindPlaceByID(placeID).then((result) => {
      setData(result);
    });
  }, [placeID, requestFindPlaceByID]);

  useEffect(() => {
    requestFindPlaceByListID(placeID).then((result) => {
      setDataImageStock(result);
    });
  }, [placeID, requestFindPlaceByListID]);

  useEffect(() => {
    if (data) {
      const {
        id: placeId,
        region: { id: regionId },
        territory: { id: territoryId },
        province: { id: provinceId },
        category,
      } = data;
      const categoryIds = category?.map((ct: IPlaceCategory) => ct.id) ?? [];
      const dataFilter = {
        placeId: Number(placeId),
        regionId,
        territoryId,
        provinceId,
        categoryIds,
      };
      requestFilterPlaceRecommend(dataFilter).then((res) => {
        setDataPlaceRecommend(res);
      });
    }
  }, [data, requestFilterPlaceRecommend]);

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
            <Grid item xs={12} md={7.5}>
              <BlogContent HeaderBreadCrumbList={HeaderBreadCrumbList}>
                <Grid item xs={12}>
                  <ContentOverview
                    title={data.name}
                    image={data.image}
                    content={data.overview}
                  />
                  {renderContentComponent()}
                  <RatingAndComment placeId={placeID} />
                </Grid>
              </BlogContent>
            </Grid>
            <Grid
              item
              container={isTabletMini && true}
              justifyContent={"space-between"}
              xs={12}
              md={4}
            >
              <Grid item xs={12} sm={5.8} md={12} mt={{ xs: "40px", md: "0" }}>
                <GroupPlaceRecommend places={dataPlaceRecommend} />
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
            <ImageStock data={dataImageStock} />
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
