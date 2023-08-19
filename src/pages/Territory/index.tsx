import { Grid } from "@mui/material";
import { BackgroundContent } from "../../components/Content";
import { FormTitle } from "../../components/Form/FormTitle";
import { COLOR_PALLETTE } from "../../constants/color";
import { CardProvinceProps, FormTitleSearchProps } from "../../types";
import { useMasterContext } from "../../context/MasterContext";
import { GroupCardProvince } from "../../components/Province";
import { FormTitleWithSearch } from "../../components/Form";
import { FormProvider, useForm } from "react-hook-form";

const listProvince = [
  {
    id: "1",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "2",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "3",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "4",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "5",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "6",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "7",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
  {
    id: "8",
    title: "Lào Cai",
    src: "https://cdn.discordapp.com/attachments/1091622222453559437/1105876836824666233/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU_com-20.png",
  },
] as CardProvinceProps[];

export const Territory = () => {
  const { isDesktop } = useMasterContext();

  const methods = useForm<FormTitleSearchProps>({
    defaultValues: {
      formTitleSearchValue: "",
    },
  });

  return (
    <Grid item xs={12} mb={100}>
      <BackgroundContent
        height={"100vh"}
        title="Bắc Trung Bộ"
        slogan="Nơi hội tụ giữa sông núi và con người tinh hoa"
        backgroundImg={
          "https://cdn.discordapp.com/attachments/1085804453246009374/1100340027306811453/Bac_Trung_Bo.png"
        }
      />
      <Grid
        item
        container
        justifyContent={"center"}
        xs={12}
        sx={{ background: COLOR_PALLETTE.CULTURED }}
      >
        <Grid item xs={11} sm={9.5} md={9} xl={7.5}>
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
        <Grid item xs={11} sm={10} md={9.1}>
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
                <GroupCardProvince listProvince={listProvince} />
              </FormTitleWithSearch>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};
