import { Box, Container, Grid, styled, useTheme } from "@mui/material";
import {
  HeaderMenuNavbar,
  HeaderMenuOption,
  HeaderMenuSearch,
  HeaderUserProfile,
} from "../../ui";
import {
  BUTTON_VARIANT,
  HEADER_LIST_OPTION,
  STYLE_POSITION,
} from "../../constants";
import { useMemo, useCallback } from "react";
import { HeaderProps, ListOptionProps, searchProps } from "../../types";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import { COLOR_PALLETTE } from "../../constants/color";

const listTransitionButtonComponent = [PATH.HOME, PATH.REGION, PATH.TERRITORY];

export const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { isMenu, user } = props;

  const isTransitionButton = useMemo(
    () => listTransitionButtonComponent.includes(location.pathname),
    [location]
  );

  const transitionTextColor = useMemo(
    () => (isTransitionButton ? COLOR_PALLETTE.PRIMARY : undefined),
    [isTransitionButton]
  );

  const changeDirection = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const testEvent = useCallback(() => {}, []);

  const defaultValuesLogin = useMemo(() => {
    let result = {
      searchValue: "",
    };
    return result;
  }, []);

  const methods = useForm<searchProps>({
    defaultValues: defaultValuesLogin,
  });

  const ListOption: ListOptionProps = useMemo(
    () => ({
      [HEADER_LIST_OPTION.LEFT]: [
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Miền",
          event: () => testEvent(),
          textVariant: "tB18",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: transitionTextColor,
        },
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Vùng",
          event: () => testEvent(),
          textVariant: "tB18",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: transitionTextColor,
        },
      ],
      [HEADER_LIST_OPTION.RIGHT]: [
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Đăng Ký",
          event: () => changeDirection(PATH.REGISTER),
          textVariant: "tB16",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: transitionTextColor,
        },
        {
          variant: BUTTON_VARIANT.CONTAINED,
          title: "Đăng Nhập",
          event: () => changeDirection(PATH.LOGIN),
          textVariant: "tB16",
          borderRadius: "15px",
          padding: "2px 18px",
          color: theme.palette.common.white,
          hoverColor: isTransitionButton
            ? COLOR_PALLETTE.PRIMARY
            : theme.palette.common.white,
          textColor: "black",
          textColorHover: isTransitionButton
            ? theme.palette.common.white
            : undefined,
        },
      ],
    }),
    [
      changeDirection,
      isTransitionButton,
      testEvent,
      theme.palette.common.white,
      transitionTextColor,
    ]
  );

  return (
    <FormProvider {...methods}>
      <HeaderContainer sx={{ position: isMenu ? "fixed" : "absolute" }}>
        {isMenu ? (
          <Grid item xs={12}>
            <HeaderMenuNavbar />
          </Grid>
        ) : (
          <Container
            maxWidth={"xl"}
            sx={{
              padding: "15px 0",
              [theme.breakpoints.down("xl")]: {
                padding: "15px 30px",
              },
            }}
          >
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              xs={12}
            >
              <Grid item lg={3.5}>
                <HeaderMenuOption
                  position={STYLE_POSITION.LEFT}
                  listOption={ListOption[HEADER_LIST_OPTION.LEFT]}
                />
              </Grid>
              <Grid item lg={4}>
                <HeaderMenuSearch />
              </Grid>
              <Grid item lg={3.5}>
                {user ? (
                  <HeaderUserProfile user={user} />
                ) : (
                  <HeaderMenuOption
                    position={STYLE_POSITION.RIGHT}
                    listOption={ListOption[HEADER_LIST_OPTION.RIGHT]}
                  />
                )}
              </Grid>
            </Grid>
          </Container>
        )}
      </HeaderContainer>
    </FormProvider>
  );
};

const HeaderContainer = styled(Box)({
  zIndex: 999,
  width: "100%",
  top: 0,
  left: 0,
});
