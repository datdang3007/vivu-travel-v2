import { Grid } from "@mui/material";
import { BackgroundContent } from "../../components/Content";
import IconAcreageImg from "../../assets/img/Icon_Acreage.png";
import IconBeachLengthImg from "../../assets/img/Icon_Beach_Length.png";
import IconPopulationImg from "../../assets/img/Icon_Population.png";
import IconGDPImg from "../../assets/img/Icon_GDP.png";
import { CardTerritoryProps, CountryInfoProps } from "../../types";
import { GroupCardCountryInfo } from "./components/GroupCardCountryInfo";
import { FormTitle } from "../../components/Form/FormTitle";
import { GroupCardRegion } from "../../components/Region";
import { GroupCardTerritory } from "../../components/Territory";
import { COLOR_PALLETTE } from "../../constants/color";

const ListCountryInfo = [
  {
    title: "Diện Tích",
    content: "331,212 Km²",
    icon: IconAcreageImg,
  },
  {
    title: "Dân Số",
    content: "~98 Triệu",
    icon: IconPopulationImg,
  },
  {
    title: "Độ Dài Bờ Biển",
    content: "~3,260 km",
    icon: IconBeachLengthImg,
  },
  {
    title: "GDP",
    content: "~343 Tỷ USD",
    icon: IconGDPImg,
  },
] as CountryInfoProps[];

// title="Bắc Trung Bộ"
// subTitle="Biển Thiên Cầm , Hà Tĩnh"
// src={
//   "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png"
// }

const listTerritory = [
  {
    id: "1",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "2",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "3",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "4",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "5",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "6",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "7",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
  {
    id: "8",
    title: "Bắc Trung Bộ",
    subTitle: "Biển Thiên Cầm , Hà Tĩnh",
    src: "https://cdn.discordapp.com/attachments/1085804453246009374/1100720331615907890/16478241753573.png",
  },
] as CardTerritoryProps[];

export const Home = () => {
  return (
    <Grid item xs={12} mb={100}>
      <BackgroundContent
        height={"100vh"}
        isShowBottomImg
        title="WELCOME TO VIET NAM !"
        slogan="Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới"
        backgroundImg={"https://images5.alphacoders.com/864/864641.jpg"}
      />
      <Grid item container justifyContent={"center"} xs={12} mb={60}>
        <Grid item xs={11} sm={10} md={9.1} xl={9}>
          <FormTitle
            container
            justifyContent={"space-between"}
            title="Thống Kê"
            isTitleCenter
            mt="40px"
            mb="40px"
          >
            <GroupCardCountryInfo ListCountryInfo={ListCountryInfo} />
          </FormTitle>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        xs={12}
        paddingBottom={60}
        sx={{
          background: COLOR_PALLETTE.BG_GRAY,
        }}
      >
        <Grid item xs={11} sm={10} md={9.1}>
          <FormTitle
            container
            title="Miền"
            subtitle="Được phân chia dựa trên địa lý, văn hóa, lịch sử và đặc điểm kinh tế"
            titleSpacing="5px"
            isTitleCenter
            mt="40px"
            mb="40px"
          >
            <GroupCardRegion />
          </FormTitle>
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={11} sm={10} md={9.1}>
          <FormTitle
            container
            title="Vùng"
            subtitle="Mỗi vùng có những đặc trưng riêng về địa lý, khí hậu, văn hóa, lịch sử, kinh tế và ẩm thực"
            titleSpacing="5px"
            isTitleCenter
            mt="40px"
            mb="40px"
          >
            <GroupCardTerritory listTerritory={listTerritory} />
          </FormTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};
