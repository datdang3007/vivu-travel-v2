import { Grid, styled } from "@mui/material";
import { Map } from "@vis.gl/react-google-maps";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";

export const DirectionsService = () => {
  return (
    <Grid container>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      ></HeaderBackground>
      <Grid
        item
        container
        xs={12}
        mb={"40px"}
        mt={{ xs: "20px", sm: "40px", md: "80px" }}
      >
        <Grid container justifyContent={"center"}>
          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            sx={{
              width: "80%",
              height: "60vh",
            }}
          >
            <Map
              zoom={9}
              center={{
                lat: 53.54,
                lng: 10,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)(({ theme }) => ({
  background: COLOR_PALLETTE.PRIMARY,
  [theme.breakpoints.down("md")]: {
    background: COLOR_PALLETTE.WHITE,
  },
}));
