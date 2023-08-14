import { useCallback } from "react";
import { HeaderProps } from "../../types";
import { Box, Button, Grid, Typography, styled, useTheme } from "@mui/material";
import { BoxImage } from "../../ui";
import { IconCart } from "../IconSVG";
import { COLOR_PALLETTE } from "../../constants/color";

export const Header = (props: HeaderProps) => {
  const { isMenu } = props;
  const theme = useTheme();

  const NavbarComponent = useCallback(() => {
    return isMenu ? (
      <Grid item xs={12}>
        {/* <HeaderMenuNavbar /> */}
      </Grid>
    ) : (
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid
          xs={11.3}
          sx={{
            padding: "12px 0",
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
            xl={12}
          >
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              xs={3.75}
            >
              <Grid item xs="auto">
                <Box sx={{ height: "35px" }}>
                  <BoxImage
                    src={
                      "https://assets.website-files.com/5ed1cf34bf802c5f339f8167/5ed470098a3127c849761c7a_TravelTell_White_Logo-p-500.png"
                    }
                  />
                </Box>
              </Grid>
              <Grid item container alignItems={"center"} xs={4.5}>
                <Box paddingTop={"7px"}>
                  <IconCart color={theme.palette.common.white} />
                </Box>
                <Box paddingTop={"7px"}>
                  <Typography
                    color={theme.palette.common.white}
                    fontSize={"12px"}
                    fontFamily={`'Josefin Sans', sans-serif;`}
                    ml={"5px"}
                    fontWeight={"bold"}
                  >
                    0
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item container justifyContent={"flex-start"} xs={2.3}>
              <Button sx={{ margin: "5px" }}>
                <Typography
                  color={COLOR_PALLETTE.BLACK}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Khám Phá
                </Typography>
              </Button>
              <Button sx={{ margin: "5px" }}>
                <Typography
                  color={COLOR_PALLETTE.BLACK}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Cửa Hàng
                </Typography>
              </Button>
              <Button sx={{ margin: "5px" }}>
                <Typography
                  color={COLOR_PALLETTE.BLACK}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                >
                  Liên Hệ
                </Typography>
              </Button>
            </Grid>
            <Grid item container justifyContent={"flex-end"} xs={3.75}>
              <Button>
                <Typography
                  color={COLOR_PALLETTE.BLACK}
                  fontSize={"14px"}
                  fontWeight={"bold"}
                >
                  Đăng Ký
                </Typography>
              </Button>
              <Button
                sx={{
                  background: COLOR_PALLETTE.BLACK,
                  padding: "9px 20px",
                  marginLeft: "12px",
                }}
              >
                <Typography
                  color={theme.palette.common.white}
                  fontSize={"14px"}
                  fontWeight={"bold"}
                >
                  Đăng Nhập
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }, [isMenu, theme.breakpoints, theme.palette.common.white]);

  return <HeaderContainer>{NavbarComponent()}</HeaderContainer>;
};

const HeaderContainer = styled(Box)({
  zIndex: 999,
  position: "absolute",
  width: "100%",
  top: 0,
  left: 0,
  // background: "blue",
});
