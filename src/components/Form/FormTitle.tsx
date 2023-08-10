import { Grid, GridProps, Typography, TypographyTypeMap } from "@mui/material";
import { FormTitleOptions } from "../../types/Form";

export const FormTitle = (props: FormTitleOptions & GridProps) => {
  const {
    title,
    subtitle,
    children,
    mt,
    mb,
    titleSpacing,
    isTitleCenter,
    ...rest
  } = props;

  return (
    <Grid item xs={12} mt={mt} {...rest}>
      <Grid item xs={12} mb={mb}>
        <Grid
          item
          container
          justifyContent={isTitleCenter ? "center" : "flex-start"}
          xs={12}
        >
          <Typography
            textAlign={isTitleCenter ? "center" : undefined}
            sx={{
              fontSize: {
                xs: 25,
                sm: 30,
                md: 36,
              },
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={isTitleCenter ? "center" : "flex-start"}
          xs={12}
        >
          <Typography
            mt={titleSpacing}
            textAlign={isTitleCenter ? "center" : undefined}
            sx={{
              fontSize: {
                xs: 15,
                sm: 18,
                md: 20,
              },
            }}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};
