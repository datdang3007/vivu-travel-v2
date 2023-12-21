import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useCallback, useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { FORM_SIGN_UP_TYPE } from "src/constants";
import { LOGO_BRAND } from "src/constants/img_common";
import { useAuthSignUpContext } from "src/provider/register.provider";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { InputProfile } from "./InputProfile";

export const SignUpContainer = () => {
  const {
    theme,
    onSubmit,
    formType,
    formSignUp,
    changeDirectionToHome,
    changeDirectionToLoginPage,
  } = useAuthSignUpContext();

  const submitLabel = useMemo(() => {
    if (formType !== FORM_SIGN_UP_TYPE.USERNAME) {
      return "Tiếp tục";
    }
    return "Đăng ký";
  }, [formType]);

  const renderFormComponent = useCallback(() => {
    switch (formType) {
      case FORM_SIGN_UP_TYPE.EMAIL:
        return <InputEmail />;
      case FORM_SIGN_UP_TYPE.PASSWORD:
        return <InputPassword />;
      case FORM_SIGN_UP_TYPE.USERNAME:
        return <InputProfile />;
    }
  }, [formType]);

  return (
    <FormProvider {...formSignUp}>
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
              {renderFormComponent()}
              <Grid item xs={12} textAlign={"center"} marginTop={"50px"}>
                <LoginButton fullWidth type="submit" variant="contained">
                  <Typography variant="tR14" color={theme.palette.common.white}>
                    {submitLabel}
                  </Typography>
                </LoginButton>
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
  cursor: "pointer",
  borderRadius: 8,
  overflow: "hidden",
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  position: "relative",
  height: "50px",
  borderRadius: "40px",
  background: theme.palette.primary.main,
  overflow: "hidden",
  "&:hover": {
    background: theme.palette.primary.light,
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
