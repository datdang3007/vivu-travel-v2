import { Grid, Typography } from "@mui/material";
import { BoxImage } from "../../../ui";
import { ContentDetailProps } from "../../../types";
import { useCallback } from "react";
import { PLACE_CONTENT_TYPE } from "src/constants";

export const ContentDetail = (props: ContentDetailProps) => {
  const { type, content } = props;

  const renderContent = useCallback(() => {
    switch (type) {
      case PLACE_CONTENT_TYPE.TEXT:
        return <BoxImage src={content} />;
      case PLACE_CONTENT_TYPE.IMAGE:
        return (
          <Typography fontSize={{ xs: "16px", md: "18px" }}>
            {content}
          </Typography>
        );
    }
  }, [content, type]);

  return (
    <Grid item xs={12} mt={"30px"}>
      {renderContent()}
    </Grid>
  );
};
