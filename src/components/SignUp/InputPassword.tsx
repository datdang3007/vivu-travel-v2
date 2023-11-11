import { Grid, IconButton, InputAdornment } from "@mui/material";
import { InputTextField } from "../Form";
import { useAuthSignUpContext } from "src/provider/register.provider";
import { useCallback, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { validateEmail, validatePassword } = useAuthSignUpContext();
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  // Event for password text field
  const handleClickShowPassword = useCallback(
    () => setShowPassword((show) => !show),
    []
  );
  const handleClickShowPasswordConfirm = useCallback(
    () => setShowPasswordConfirm((show) => !show),
    []
  );

  return (
    <>
      <Grid item xs={12} textAlign={"center"} marginTop={"48px"}>
        <InputTextField
          name={"email"}
          label="Email"
          type="email"
          variant="standard"
          fullWidth
          disabled
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
      <Grid item xs={12} textAlign={"center"} marginTop={"38px"}>
        <InputTextField
          name={"password"}
          label="Mật khẩu"
          variant="standard"
          fullWidth
          type={showPassword ? "text" : "password"}
          InputProps={{
            sx: {
              padding: "4px 8px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  sx={{
                    "&:hover": {
                      color: "black",
                    },
                  }}
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          rules={{
            required: {
              value: true,
              message: "Mật khẩu không được để trống",
            },
            validate: { validatePassword },
          }}
        />
      </Grid>
      <Grid item xs={12} textAlign={"center"} marginTop={"38px"}>
        <InputTextField
          name={"confirm_password"}
          label="Nhập lại mật khẩu"
          variant="standard"
          fullWidth
          type={showPasswordConfirm ? "text" : "password"}
          InputProps={{
            sx: {
              padding: "4px 8px",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  sx={{
                    "&:hover": {
                      color: "black",
                    },
                  }}
                  onClick={handleClickShowPasswordConfirm}
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          rules={{
            required: {
              value: true,
              message: "Mật khẩu xác nhận không được để trống",
            },
          }}
        />
      </Grid>
    </>
  );
};
