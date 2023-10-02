import { Grid, GridProps, Typography, useTheme } from "@mui/material";
import { BackgroundTextProps } from "../../types/Ui";

export const BackgroundText = (props: BackgroundTextProps & GridProps) => {
  const theme = useTheme();
  const { isHomePage, title, slogan } = props;
  return (
    <Grid
      item
      container
      alignItems={"center"}
      justifyContent={"center"}
      xs={12}
      height={
        isHomePage
          ? { xs: "97.5%", sm: "95%", xl: "87.5%" }
          : { xs: "97.5%", sm: "95%", xl: "100%" }
      }
    >
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item container justifyContent={"center"} xs={11}>
          <Typography
            sx={{
              fontSize: isHomePage
                ? {
                    xs: 30,
                    sm: 45,
                    md: 55,
                    xl: 60,
                  }
                : {
                    xs: 40,
                    sm: 65,
                    md: 85,
                    xl: 90,
                  },
              fontWeight: "bold",
              fontStyle: "normal",
              color: theme.palette.common.white,
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={11} sm={8} xl={11}>
          <Typography
            sx={{
              fontSize: isHomePage
                ? {
                    xs: 15,
                    sm: 20,
                    md: 25,
                  }
                : {
                    xs: 15,
                    sm: 20,
                    md: 30,
                  },
              fontStyle: "normal",
              color: theme.palette.common.white,
              textAlign: "center",
              mt: {
                xs: 0,
                sm: 5,
                xl: 0,
              },
            }}
          >
            {slogan}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
