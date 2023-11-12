import { Grid } from "@mui/material";
import { BackgroundContent } from "../../components/Content";
import { FormTitle } from "../../components/Form/FormTitle";
import { GroupCardTerritory } from "../../components/Territory";
import { COLOR_PALLETTE } from "../../constants/color";
import {
  CardProvinceProps,
  CardTerritoryProps,
  FormTitleSearchProps,
} from "../../types";
import { useMasterContext } from "../../context/MasterContext";
import { GroupCardProvince } from "../../components/Province";
import { FormTitleWithSearch } from "../../components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { useCallAPIFind } from "src/hooks";
import { useLocation } from "react-router-dom";
import { GetIdParams } from "src/utils/common";
import { useEffect, useMemo, useState } from "react";
import { IRegion } from "src/interfaces";

export const Region = () => {
  const location = useLocation();
  const { isDesktop } = useMasterContext();
  const regionID = GetIdParams(location.pathname);
  const [data, setData] = useState<IRegion | null>(null);
  const { requestFindRegionByID } = useCallAPIFind();

  const methods = useForm<FormTitleSearchProps>({
    defaultValues: {
      formTitleSearchValue: "",
    },
  });

  const convertTerritoryList: CardTerritoryProps[] = useMemo(() => {
    if (!data) return [];
    return data?.territoryList?.map((territory) => {
      const {
        id,
        name,
        image,
        region: { name: regionName },
      } = territory;

      return {
        id,
        title: name,
        subTitle: regionName,
        src: image,
      };
    });
  }, [data]);

  const convertProvinceList: CardProvinceProps[] = useMemo(() => {
    if (!data) return [];
    return data?.provinceList?.map((province) => {
      const { id, name, image } = province;
      return { id, title: name, src: image };
    });
  }, [data]);

  useEffect(() => {
    requestFindRegionByID(regionID).then((result) => {
      setData(result);
    });
  }, [regionID, requestFindRegionByID]);

  if (!data) return null;

  return (
    <Grid item xs={12} mb={100}>
      <BackgroundContent
        height={"100vh"}
        title={data.name}
        slogan={data.slogan}
        backgroundImg={data.image}
      />
      <Grid
        item
        container
        justifyContent={"center"}
        xs={12}
        sx={{ background: COLOR_PALLETTE.CULTURED }}
      >
        <Grid item xs={12} sm={9.5} md={9} xl={7.5}>
          <FormTitle
            container
            title="Tổng Quan"
            subtitle={data.overview}
            titleSpacing="5px"
            isTitleCenter
            mt="80px"
            mb="80px"
            titleColor={COLOR_PALLETTE.PRIMARY}
          ></FormTitle>
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={12} sm={10} md={9.1}>
          <FormTitle
            container
            title="Vùng"
            subtitle="Mỗi vùng có những đặc trưng riêng về địa lý, khí hậu, văn hóa, lịch sử, kinh tế và ẩm thực"
            titleSpacing="5px"
            isTitleCenter={!isDesktop}
            mt="80px"
            mb="40px"
          >
            <GroupCardTerritory listTerritory={convertTerritoryList} />
          </FormTitle>
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={12} sm={10} md={9.1}>
          <FormProvider {...methods}>
            <Grid item xs={12} component={"form"}>
              <FormTitleWithSearch
                name="formTitleSearchValue"
                title="Tỉnh Thành"
                subtitle="Mỗi tỉnh thành đều mang trong mình những nét đẹp riêng"
                titleSpacing="5px"
                isTitleCenter={!isDesktop}
                mt="80px"
                mb="20px"
              >
                <GroupCardProvince listProvince={convertProvinceList} />
              </FormTitleWithSearch>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};
