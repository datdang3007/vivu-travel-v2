import { Grid, styled } from "@mui/material";
import { COMPONENT_SIZE } from "../../constants";
import { COLOR_PALLETTE } from "../../constants/color";
import {
  BlogContent,
  ContentOverview,
  GroupCardRecommend,
  ImageStock,
} from "../../components/BlogContent";
import { useCallback } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { BreadCrumbProps } from "../../types";
import { useMasterContext } from "@/context/MasterContext";

const ContentOverviewValue = {
  title: "Phố cổ Hội An",
  image:
    "https://cdn.discordapp.com/attachments/1091622222453559437/1105888087948677221/hoi-an-quang-nam-6.png",
  content: `
    Phố cổ Hội An nằm ở tỉnh Quảng Nam, Việt Nam, và là một trong những
    điểm du lịch nổi tiếng và phổ biến nhất của đất nước. Nó được coi là
    một di sản văn hóa thế giới bởi UNESCO và thu hút hàng triệu khách du
    lịch mỗi năm. Phố cổ Hội An có một lịch sử lâu đời và độc đáo. Nó đã
    từng là một cảng biển quan trọng trong thời kỳ Trung Quốc cổ đại và về
    sau trở thành một trung tâm thương mại quan trọng của khu vực Đông Nam
    Á. Từ thế kỷ XVI đến thế kỷ XIX, Hội An đã thu hút nhiều thương nhân
    nước ngoài, bao gồm người Nhật, người Hà Lan, người Bồ Đào Nha và
    người Trung Quốc, tạo nên một sự đa dạng văn hóa đặc trưng cho nơi
    này.
  `,
};

export const Province = () => {
  const { isTabletMini } = useMasterContext();

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
              <BlogContent HeaderBreadCrumbList={HeaderBreadCrumbList}>
                <ContentOverview
                  title={ContentOverviewValue.title}
                  image={ContentOverviewValue.image}
                  content={ContentOverviewValue.content}
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
                <GroupCardRecommend />
              </Grid>
              <Grid
                item
                xs={12}
                sm={5.8}
                md={12}
                mt={{ xs: "40px", md: "20px" }}
              >
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
