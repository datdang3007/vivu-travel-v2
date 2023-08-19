import { Grid, Typography } from "@mui/material";
import { BoxImage } from "../../../ui";
import { ContentOverviewProps } from "../../../types";

export const ContentOverview = (props: ContentOverviewProps) => {
  const { title, image, content } = props;

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Typography
          fontSize={{
            xs: "40px",
          }}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={"30px"}>
        <BoxImage src={image}></BoxImage>
      </Grid>
      <Grid item xs={12} mt={"30px"}>
        <Typography fontSize={"16px"}>{content}</Typography>
      </Grid>
    </Grid>
  );
};
