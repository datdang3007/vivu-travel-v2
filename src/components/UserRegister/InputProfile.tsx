import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { FormProvider, useForm } from "react-hook-form";
import { useCallback } from "react";
// import { useNavigateSearch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { InputTextField } from "../Form";
import { LOGO_BRAND } from "../../constants/img_common";
import { PATH } from "../../routes/path";

interface InputProfileProps {
  userEmail: string;
  userPassword: string;
}

interface ProfileProps {
  Image: string;
  userName: string;
}

export const InputProfile = ({
  userEmail,
  userPassword,
}: InputProfileProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const methods = useForm<ProfileProps>({
    defaultValues: {
      Image: "",
      userName: "",
    },
  });

  const onSubmit = methods.handleSubmit(
    useCallback(
      (values: any) => {
        const { Image, user_name } = values;
        console.log("profile", Image, user_name);

        const data = { user_email: userEmail, user_password: userPassword };
        const JsonData = JSON.stringify(data);
        localStorage.setItem("RegisterInfo", JsonData);
        navigate("/login");
      },
      [navigate, userEmail, userPassword]
    )
  );

  const changeDirectionToLoginPage = useCallback(() => {
    navigate(PATH.LOGIN);
  }, [navigate]);

  const changeDirectionToHome = useCallback(() => {
    navigate(PATH.HOME);
  }, [navigate]);

  return (
    <FormProvider {...methods}>
      <Container maxWidth="xs" component={"form"} onSubmit={onSubmit}>
        <Body>
          <CardForm
            sx={{
              boxShadow: {
                xs: "unset",
                sm: `0 5px 10px 0 rgba(0,0,0,.1)`,
              },
            }}
          >
            <Grid container>
              <Grid item xs={12} textAlign={"center"} marginTop={"20px"}>
                <Typography variant="tB30">Đăng Ký</Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent={"center"}
                xs={12}
                marginTop={"26px"}
              >
                <Grid item xs={4}>
                  <BoxLogo onClick={changeDirectionToHome}>
                    <img src={LOGO_BRAND.MAIN} alt="" />
                  </BoxLogo>
                </Grid>
              </Grid>
              <Grid item xs={12} textAlign={"center"} marginTop={"48px"}>
                <InputTextField
                  name={"user_name"}
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

              <Grid item xs={12} textAlign={"center"} marginTop={"50px"}>
                <RegisterButton type="submit" variant="contained" fullWidth>
                  <Typography variant="tR14" color={theme.palette.common.white}>
                    Đăng Ký
                  </Typography>
                </RegisterButton>
              </Grid>
              <Grid
                item
                container
                xs={12}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={"115px"}
              >
                <Typography variant="tR12">Bạn đã có tài khoản?</Typography>
                <Button onClick={changeDirectionToLoginPage}>
                  <Typography variant="tB14" color={theme.palette.primary.main}>
                    Đăng Nhập
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </CardForm>
        </Body>
      </Container>
    </FormProvider>
  );
};

const Body = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const CardForm = styled(Card)({
  background: "#FFF",
  boxShadow: `0 5px 10px 0 rgba(0,0,0,.1)`,
  padding: "55px",
});

const BoxLogo = styled(Box)({
  borderRadius: 8,
  overflow: "hidden",
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const RegisterButton = styled(Button)(({ theme }) => ({
  position: "relative",
  height: "50px",
  borderRadius: "40px",
  background: theme.palette.primary.main,
  overflow: "hidden",
  "&:hover": {
    background: `${theme.palette.primary.light} !important`,
    "&::before": {
      left: "120%",
      transform: "translateY(-50%)",
    },
  },
  "&::before": {
    content: `""`,
    position: "absolute",
    left: "-20%",
    top: "50%",
    width: "5px",
    height: "200%",
    background: "rgba(255,2255,255, .75)",
    boxShadow: "0 0 10px 10px rgba(255,255,255, .5)",
    transform: "translateY(-50%) rotate(-20deg)",
    transition: "0.6s",
  },
}));
