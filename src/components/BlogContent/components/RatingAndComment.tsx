import { Chip, Grid } from "@mui/material";
import { CommentPlace } from "src/components/Comment";
import { RatingPlace } from "src/components/Rating";
import { COLOR_PALLETTE } from "../../../constants/color";

type Props = {
  placeId: string | number;
};

export const RatingAndComment = (props: Props) => {
  const { placeId } = props;
  return (
    <Grid item xs={12} mt={"30px"}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Chip
            label="Bình Luận & Đánh Giá"
            sx={{
              padding: "10px",
              fontWeight: "bold",
              color: COLOR_PALLETTE.PRIMARY,
            }}
          />
        </Grid>
        <RatingPlace />
      </Grid>
      <Grid item xs={12} mt={"20px"}>
        <CommentPlace placeId={placeId} />
      </Grid>
    </Grid>
  );
};
