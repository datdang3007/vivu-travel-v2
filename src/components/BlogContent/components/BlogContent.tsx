import { Grid } from "@mui/material";
import { BlogContentProps } from "../../../types";
import { BreadCrumb } from "../../../ui/BreadCrumb/BreadCrumb";
import { ContentOverview } from "./ContentOverview";
import { ContentDetail } from "./ContentDetail";

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

const ContentDetailValue = {
  image:
    "https://cdn.discordapp.com/attachments/1091622222453559437/1105888088393252904/Hoi-An-1.png",
  content: `
    Một trong những đặc điểm nổi bật của Phố cổ Hội An là kiến trúc độc
    đáo của các ngôi nhà cổ. Các ngôi nhà được xây dựng theo phong cách
    kiến trúc truyền thống Việt Nam, kết hợp với yếu tố kiến trúc Trung
    Quốc, Nhật Bản và châu u. Các ngôi nhà thường có mái ngói, các cửa sổ
    mở rộng và ban công bằng gỗ. Đường phố được bày trí theo kiểu lưới và
    được đánh số theo thứ tự, tạo ra một không gian rất hài hòa và dễ dàng
    đi lại. Ngoài kiến trúc độc đáo, Hội An còn nổi tiếng với các chợ
    truyền thống và các cửa hàng nhỏ. Du khách có thể tìm thấy nhiều sản
    phẩm thủ công truyền thống như áo dài, đèn lồng, gốm sứ, nón lá và các
    loại thực phẩm địa phương. Điểm thú vị là vào buổi tối, các đèn lồng
    màu sắc được treo trên các con phố, tạo nên một không gian lãng mạn và
    phù hợp cho việc đi dạo.
  `,
};

export const BlogContent = (props: BlogContentProps) => {
  const { HeaderBreadCrumbList } = props;

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <BreadCrumb list={HeaderBreadCrumbList} />
      </Grid>
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
      </Grid>
    </Grid>
  );
};
