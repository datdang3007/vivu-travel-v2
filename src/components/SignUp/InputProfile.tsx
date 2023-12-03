import { Grid } from "@mui/material";
import { InputTextField } from "../Form";
import { useSelectCountryHook } from "src/hooks";

export const InputProfile = () => {
  const { SelectField: CountryOptionsComponent } = useSelectCountryHook();

  return (
    <Grid
      container
      item
      xs={12}
      textAlign={"center"}
      marginTop={"48px"}
      rowGap={"18px"}
    >
      <InputTextField
        name={"username"}
        label="Tên người dùng"
        variant="standard"
        fullWidth
        InputProps={{
          sx: {
            padding: "4px 8px",
          },
        }}
        rules={{
          required: {
            value: true,
            message: "Tên người dùng không được để trống",
          },
        }}
      />
      <InputTextField
        name="country"
        fullWidth
        select
        variant="standard"
        label="Quốc gia"
        rules={{
          required: "Quốc gia không được để trống",
        }}
      >
        {CountryOptionsComponent()}
      </InputTextField>
    </Grid>
  );
};
