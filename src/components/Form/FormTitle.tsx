import { Grid, GridProps, Typography, TypographyTypeMap } from "@mui/material";
import { FormTitleOptions } from "../../types/Form";

export const FormTitle = (props: FormTitleOptions & GridProps) => {
  const { title, children, size, mt, mb, isTitleCenter, ...rest } = props;
  
  return (
    <Grid item xs={12} mt={mt} {...rest}>
      <Grid
        item
        container
        justifyContent={isTitleCenter ? "center" : "flex-start"}
        xs={12}
      >
        <Typography
          variant={size as TypographyTypeMap["props"]["variant"]}
          mb={mb}
        >
          {title}
        </Typography>
      </Grid>
      {children}
    </Grid>
  );
};
