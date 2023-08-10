import { Grid } from "@mui/material";
import { BackgroundContent } from "../../components/Content";
import IconAcreageImg from "../../assets/img/Icon_Acreage.png";
import IconBeachLengthImg from "../../assets/img/Icon_Beach_Length.png";
import IconPopulationImg from "../../assets/img/Icon_Population.png";
import IconGDPImg from "../../assets/img/Icon_GDP.png";
import { CountryInfoProps } from "../../types";
import { GroupCardCountryInfo } from "./components/GroupCardCountryInfo";
import { FormTitle } from "../../components/Form/FormTitle";

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

export const Home = () => {
  return (
    <Grid item xs={12}>
      <BackgroundContent
        height={"80vh"}
        isShowBottomImg
        title="WELCOME TO VIET NAM !"
        slogan="Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới"
        backgroundImg={"https://images5.alphacoders.com/864/864641.jpg"}
      />
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={11} sm={10} md={9.1}>
          <FormTitle container title="Thống Kê" isTitleCenter mb="15px">
            <GroupCardCountryInfo ListCountryInfo={ListCountryInfo} />
          </FormTitle>
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item xs={11} sm={10} md={8}>
          <FormTitle
            container
            title="Miền"
            subtitle="Được phân chia dựa trên địa lý, văn hóa, lịch sử và đặc điểm kinh tế"
            titleSpacing="5px"
            isTitleCenter
            mt="80px"
            mb="15px"
          >
            test
          </FormTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};
