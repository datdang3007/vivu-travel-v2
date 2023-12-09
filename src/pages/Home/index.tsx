import { Grid } from "@mui/material";
import IconAcreageImg from "../../assets/img/Icon_Acreage.png";
import IconBeachLengthImg from "../../assets/img/Icon_Beach_Length.png";
import IconGDPImg from "../../assets/img/Icon_GDP.png";
import IconPopulationImg from "../../assets/img/Icon_Population.png";
import { BackgroundContent } from "../../components/Content";
import { FormTitle } from "../../components/Form/FormTitle";
import { GroupCardRegion } from "../../components/Region";
import { GroupCardTerritory } from "../../components/Territory";
import { COLOR_PALLETTE } from "../../constants/color";
import { CardTerritoryProps, CountryInfoProps } from "../../types";
import { GroupCardCountryInfo } from "./components/GroupCardCountryInfo";
import { GroupCardPost } from "./components/GroupCardPost";
import { GroupCardTravelTeller } from "./components/GroupCardTravelTeller";
import { useCallApiList } from "src/hooks";
import { useMemo } from "react";

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
  const { territoryList, loadingTerritoryList } = useCallApiList();

  const convertTerritoryList: CardTerritoryProps[] = useMemo(() => {
    return territoryList.map((territory) => {
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
  }, [territoryList]);

  return (
    <Grid item xs={12}>
      <BackgroundContent
        isHomePage
        height={"100vh"}
        isShowBottomImg
        title="VIỆT NAM"
        slogan="Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới"
        backgroundImg={"https://images5.alphacoders.com/864/864641.jpg"}
      />

      {/* CARD INFO */}
      <Grid item container justifyContent={"center"} xs={12} paddingBottom={60}>
        <Grid item xs={12} sm={10} md={9.1} xl={9}>
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

      {/* CARD REGION */}
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
        <div id="section-region"></div>
        <Grid item xs={12} sm={10} md={9.1}>
          <FormTitle
            container
            title="Miền"
            subtitle="Được phân chia dựa trên địa lý, văn hóa, lịch sử và đặc điểm kinh tế"
            titleSpacing="5px"
            isTitleCenter
            mt="60px"
            mb="40px"
          >
            <GroupCardRegion />
          </FormTitle>
        </Grid>
      </Grid>

      {/* CARD TERRITORY */}
      <Grid item container justifyContent={"center"} xs={12} paddingBottom={60}>
        <div id="section-territory"></div>
        <Grid item xs={12} sm={10} md={9.1}>
          <FormTitle
            container
            title="Vùng"
            subtitle="Mỗi vùng có những đặc trưng riêng về địa lý, khí hậu, văn hóa, lịch sử, kinh tế và ẩm thực"
            titleSpacing="5px"
            isTitleCenter
            mt="60px"
            mb="40px"
          >
            <GroupCardTerritory
              listTerritory={convertTerritoryList}
              loading={loadingTerritoryList}
            />
          </FormTitle>
        </Grid>
      </Grid>

      {/* CARD TRAVEL TELLER */}
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
        <Grid item xs={12} sm={10} md={9.1}>
          <FormTitle
            container
            title="Top Người Viết Bài"
            isTitleCenter
            mt="60px"
            mb="20px"
          >
            <GroupCardTravelTeller />
          </FormTitle>
        </Grid>
      </Grid>

      {/* CARD POST */}
      <Grid item container justifyContent={"center"} xs={12} paddingBottom={60}>
        <div id="section-posts"></div>
        <Grid item xs={12} sm={10} md={9.1}>
          <FormTitle
            container
            title="Bài Viết Nổi Bật"
            titleSpacing="5px"
            isTitleCenter
            mt="60px"
            mb="20px"
          >
            <GroupCardPost />
          </FormTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};
