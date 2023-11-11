import { Grid } from "@mui/material";
import { InputTextField } from "../Form";

export const InputProfile = () => {
  return (
    <Grid item xs={12} textAlign={"center"} marginTop={"48px"}>
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
    </Grid>
  );
};
