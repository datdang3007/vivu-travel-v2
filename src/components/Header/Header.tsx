import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { HeaderMenuNavbar, HeaderMenuOption } from "../../ui";
import {
  BUTTON_VARIANT,
  HEADER_LIST_OPTION,
  STYLE_POSITION,
} from "../../constants";
import { useMemo, useCallback } from "react";
import { HeaderProps, ListOptionProps } from "../../types";

export const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const { isMenu } = props;
  const testEvent = useCallback(() => {
    console.log("test");
  }, []);

  const ListOption: ListOptionProps = useMemo(
    () => ({
      [HEADER_LIST_OPTION.LEFT]: [
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Miền",
          event: testEvent,
          textVariant: "tB18",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: theme.palette.primary.light,
        },
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Vùng",
          event: testEvent,
          textVariant: "tB18",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: theme.palette.primary.light,
        },
      ],
      [HEADER_LIST_OPTION.RIGHT]: [
        {
          variant: BUTTON_VARIANT.TEXT,
          title: "Đăng Ký",
          event: testEvent,
          textVariant: "tB16",
          padding: "2px 18px",
          textColor: theme.palette.common.white,
          textColorHover: theme.palette.primary.light,
        },
        {
          variant: BUTTON_VARIANT.CONTAINED,
          title: "Đăng Nhập",
          event: testEvent,
          textVariant: "tB16",
          borderRadius: "15px",
          padding: "2px 18px",
          color: theme.palette.common.white,
          hoverColor: theme.palette.primary.main,
          textColor: "black",
          textColorHover: theme.palette.common.white,
        },
      ],
    }),
    [
      testEvent,
      theme.palette.common.white,
      theme.palette.primary.light,
      theme.palette.primary.main,
    ]
  );

  const NavbarComponent = useCallback(() => {
    return isMenu ? (
      <Grid item xs={12} sx={{ padding: "5px 0 30px" }}>
        <HeaderMenuNavbar />
      </Grid>
    ) : (
      <Container
        maxWidth={"xl"}
        sx={{
          padding: "30px 0",
          [theme.breakpoints.down("xl")]: {
            padding: "30px",
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
          <Grid item lg={4}></Grid>
          <Grid item lg={3.5}>
            <HeaderMenuOption
              position={STYLE_POSITION.RIGHT}
              listOption={ListOption[HEADER_LIST_OPTION.RIGHT]}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }, [ListOption, isMenu, theme.breakpoints]);

  return (
    <Box width={1} position={"fixed"}>
      {NavbarComponent()}
    </Box>
  );
};
