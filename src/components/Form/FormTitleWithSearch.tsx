import {
  Grid,
  GridProps,
  InputLabelProps,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { FormTitleWithSearchOptions } from "../../types/Form";
import { InputTextField } from "./InputTextField";
import { FieldValues, UseControllerProps } from "react-hook-form";

export const FormTitleWithSearch = (
  props: FormTitleWithSearchOptions &
    GridProps &
    InputLabelProps &
    TextFieldProps &
    UseControllerProps<FieldValues>
) => {
  const {
    title,
    subtitle,
    titleColor,
    children,
    mt,
    mb,
    titleSpacing,
    isTitleCenter,
    name,
    control,
    rules,
    variant,
    ...InputRest
  } = props;

  return (
    <Grid item container xs={12} mt={mt}>
      <Grid item xs={12} mb={mb}>
        <Grid item xs={12} md={6}>
          <Grid
            item
            container
            justifyContent={isTitleCenter ? "center" : "flex-start"}
            xs={12}
          >
            <Typography
              textAlign={isTitleCenter ? "center" : undefined}
              sx={{
                color: titleColor,
                fontSize: {
                  xs: 25,
                  sm: 30,
                  md: 35,
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
            <Grid item xs={11}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <InputTextField name="test" {...InputRest} />
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};
