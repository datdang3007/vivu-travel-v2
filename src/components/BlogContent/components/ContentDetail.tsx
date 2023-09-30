import { Grid, Typography } from "@mui/material";
import { BoxImage } from "../../../ui";
import { ContentDetailProps } from "../../../types";

export const ContentDetail = (props: ContentDetailProps) => {
  const { image, content } = props;
  
  return (
    <Grid item xs={12}>
      <Grid item xs={12} mt={"30px"}>
        <BoxImage src={image}></BoxImage>
      </Grid>
      <Grid item xs={12} mt={"30px"}>
        <Typography fontSize={{ xs: "16px", md: "18px" }}>{content}</Typography>
      </Grid>
    </Grid>
  );
};
