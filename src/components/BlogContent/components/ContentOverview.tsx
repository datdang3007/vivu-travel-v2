import { Grid, Skeleton, Typography, styled } from "@mui/material";
import { BoxImage } from "../../../ui";
import { ContentOverviewProps } from "../../../types";
import { useEffect, useState } from "react";
import { WaitForImageToLoad } from "src/utils/common";

export const ContentOverview = (props: ContentOverviewProps) => {
  const [url, setUrl] = useState<string>();
  const { title, image, content } = props;

  useEffect(() => {
    WaitForImageToLoad(image).then((result) => {
      if (result) {
        setUrl(result);
      }
    });
  }, [image]);

  if (!url) {
    return (
      <>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography
              fontSize={{
                xs: "40px",
              }}
              fontWeight={"bold"}
            >
              <Skeleton />
            </Typography>
          </Grid>
          <Grid item xs={12} mt={{ xs: "20px", lg: "30px" }}>
            <ImageSkeleton />
          </Grid>
          <Grid item xs={12} mt={"30px"}>
            <Typography fontSize={{ xs: "16px", md: "18px" }}>
              <Skeleton />
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  }

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
      <Grid item xs={12} mt={{ xs: "20px", lg: "30px" }}>
        <BoxImage src={url}></BoxImage>
      </Grid>
      <Grid item xs={12} mt={"30px"}>
        <Typography fontSize={{ xs: "16px", md: "18px" }}>{content}</Typography>
      </Grid>
    </Grid>
  );
};

const ImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "450px",
  transform: "unset",
});
