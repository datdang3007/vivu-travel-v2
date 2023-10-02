import { Grid, styled } from "@mui/material";
import { FormTitle } from "src/components/Form";
import { RichEditor } from "src/components/UploadPost";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";

export const UploadPost = () => {
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
        mt={{ xs: "20px", sm: "40px", md: "80px" }}
        mb={"40px"}
        justifyContent={"center"}
      >
        <Grid item xs={11} sm={10} xl={9}>
          <FormTitle title="Upload Post" mb={"40px"}>
            <Grid item container justifyContent={"center"} xs={12}>
              <Grid item container xs={12} xl={10}>
                <RichEditor />
              </Grid>
            </Grid>
          </FormTitle>
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
