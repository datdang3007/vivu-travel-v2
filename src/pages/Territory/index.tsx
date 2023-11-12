import { Grid } from "@mui/material";
import { BackgroundContent } from "../../components/Content";
import { FormTitle } from "../../components/Form/FormTitle";
import { COLOR_PALLETTE } from "../../constants/color";
import { CardProvinceProps, FormTitleSearchProps } from "../../types";
import { useMasterContext } from "../../context/MasterContext";
import { GroupCardProvince } from "../../components/Province";
import { FormTitleWithSearch } from "../../components/Form";
import { FormProvider, useForm } from "react-hook-form";
import { GetIdParams } from "src/utils/common";
import { useLocation } from "react-router-dom";
import { useCallAPIFind } from "src/hooks";
import { useEffect, useMemo, useState } from "react";
import { ITerritory } from "src/interfaces";

export const Territory = () => {
  const location = useLocation();
  const { isDesktop } = useMasterContext();
  const territoryID = GetIdParams(location.pathname);
  const [data, setData] = useState<ITerritory | null>(null);
  const { requestFindTerritoryByID } = useCallAPIFind();

  const methods = useForm<FormTitleSearchProps>({
    defaultValues: {
      formTitleSearchValue: "",
    },
  });

  const convertProvinceList: CardProvinceProps[] = useMemo(() => {
    if (!data) return [];
    return data?.provinceList?.map((province) => {
      const { id, name, image } = province;
      return { id, title: name, src: image };
    });
  }, [data]);

  useEffect(() => {
    requestFindTerritoryByID(territoryID).then((result) => {
      setData(result);
    });
  }, [requestFindTerritoryByID, territoryID]);

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
            subtitle="Miền Bắc của Việt Nam là một khu vực đa dạng với núi, đồng bằng, và khu vực ven biển, có diện tích khoảng 180.000 kilômét vuông và dân số trên 30 triệu người. Bao gồm các vùng phụ Miền Tây Bắc, Miền Đông Bắc, và Đồng Bằng Sông Hồng, với thủ đô Hà Nội. Miền Bắc có lịch sử và văn hóa phong phú, nổi tiếng với ẩm thực đặc trưng như phở, bún chả, và bánh cuốn."
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
