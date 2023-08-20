import { Grid, styled } from "@mui/material";
import { COMPONENT_SIZE } from "../../constants";
import { COLOR_PALLETTE } from "../../constants/color";
import {
  BlogContent,
  ContentDetail,
  ContentOverview,
  GroupCardRecommend,
  ImageStock,
  RatingAndComment,
} from "../../components/BlogContent";
import { useCallback } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { BreadCrumbProps } from "../../types";

const ContentOverviewValue = {
  title: "Núi Fansipan",
  image: "https://meditours.vn/Uploaded/Users/tuyenlm/images/1709/fansipan.png",
  content: `
    Phan Xi Păng là ngọn núi cao nhất Việt Nam, nằm trong dãy Hoàng Liên Sơn ở vùng Tây Bắc của Tổ quốc. Đỉnh của nó nằm ở độ cao ấn tượng 3.143 mét (10.312 feet) so với mực nước biển, khiến nơi đây trở thành điểm đến phổ biến cho những người thích phiêu lưu và đi bộ đường dài.Fansipan thường được mệnh danh là “Nóc nhà Đông Dương” bởi đây là điểm cao nhất không chỉ của Việt Nam mà còn của các nước láng giềng Lào và Campuchia. Ngọn núi được bao quanh bởi những khu rừng tươi tốt và có tầm nhìn ngoạn mục ra những cảnh quan xung quanh.
  `,
};

const ContentDetailValue = {
  image:
    "https://top-10.vn/wp-content/uploads/2021/07/01-Fansipan-3-1024x576.jpg",
  content: `
    Fansipan cũng đã trở thành một điểm đến du lịch nổi tiếng trong những năm gần đây, với sự phát triển của hệ thống cáp treo Fansipan Legend mang đến cho du khách một chuyến đi ngắm cảnh lên đỉnh. Ở trên đỉnh, du khách có thể thưởng thức cảnh quan tuyệt đẹp, khám phá nhiều ngôi đền và đền thờ khác nhau và chụp ảnh tại điểm đánh dấu của đỉnh. Nhìn chung, Fansipan là điểm đến không thể bỏ qua của những người yêu thiên nhiên, ưa mạo hiểm và những ai muốn khám phá vẻ đẹp và sự đa dạng của các danh lam thắng cảnh Việt Nam.
  `,
};

export const Place = () => {
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
                <Grid item xs={12}>
                  <ContentOverview
                    title={ContentOverviewValue.title}
                    image={ContentOverviewValue.image}
                    content={ContentOverviewValue.content}
                  />
                  <ContentDetail
                    image={ContentDetailValue.image}
                    content={ContentDetailValue.content}
                  />
                  <RatingAndComment />
                </Grid>
              </BlogContent>
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
