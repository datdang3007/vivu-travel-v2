import { Grid } from "@mui/material";
import { useAuthSignUpContext } from "src/provider/register.provider";
import { InputTextField } from "../Form";

export const InputEmail = () => {
  const { validateEmail } = useAuthSignUpContext();

  return (
    <Grid item xs={12} textAlign={"center"} marginTop={"48px"}>
      <InputTextField
        name="email"
        label="Email"
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
            message: "Email không được để trống",
          },
          validate: { validateEmail },
        }}
      />
    </Grid>
  );
};
