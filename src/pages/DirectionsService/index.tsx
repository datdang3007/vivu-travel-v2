import { Grid, styled } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { PROCESS_ENV } from "src/constants/env";

export const DirectionsService = () => {
  const Map = () => {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: PROCESS_ENV.GOOGLE_KEY }} // Replace with your API key
        defaultCenter={{ lat: 40.771, lng: -73.974 }}
        defaultZoom={13}
      />
    );
  };

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
        justifyContent={"center"}
        mt={{ xs: "20px", sm: "40px", md: "80px" }}
      >
        {/* Include the Map component */}
        <Map />
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
