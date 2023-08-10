import { Grid, Typography, useTheme } from "@mui/material";
import { BackgroundTextProps } from "../../types/Ui";

export const BackgroundText = (props: BackgroundTextProps) => {
  const theme = useTheme();
  const { title, slogan } = props;
  return (
    <Grid
      item
      container
      height={1}
      alignItems={"center"}
      justifyContent={"center"}
      xs={12}
    >
      <Grid item container justifyContent={"center"} xs={12}>
        <Grid item container justifyContent={"center"} xs={11}>
          <Typography
            sx={{
              fontSize: {
                xs: 25,
                sm: 40,
                md: 45,
                xl: 50,
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
              fontSize: {
                xs: 15,
                md: 30,
                xl: 30,
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
