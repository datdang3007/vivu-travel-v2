import { Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";
import { CountryInfoProps } from "src/types";

export const CardCountryInfo = (props: CountryInfoProps) => {
  const { title, content, icon } = props;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      xl={2.75}
      sx={{
        padding: {
          xs: "20px",
          xl: "0",
        },
      }}
    >
      <CardDetail
        item
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        xs={12}
      >
        <Grid item xs={9}>
          <Grid item xs={12}>
            <Typography variant="tB18" color={COLOR_PALLETTE.DIM_GRAY}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={"5px"}>
            <Typography variant="tB24" color={COLOR_PALLETTE.BLACK}>
              {content}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <IconImage src={icon} alt="" />
        </Grid>
      </CardDetail>
    </Grid>
  );
};

const CardDetail = styled(Grid)({
  borderRadius: 4,
  padding: "20px 15px",
  boxShadow: `0px 0px 4px 1px rgba(0,0,0,0.16)`,
});

const IconImage = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
});
