import { Grid, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { FormTitleWithSearchAndSelect } from "src/components/Form";
import { GroupCardPost } from "src/components/Posts";
import { ProfileUserInfo } from "src/components/Profile";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { FormTitleSearchProps } from "src/types";

export const Profile = () => {
  const methods = useForm<FormTitleSearchProps>({
    defaultValues: {
      formTitleSearchValue: "",
      type: "",
    },
  });

  return (
    <Grid container mb={"40px"}>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      ></HeaderBackground>
      <Grid item xs={12} container justifyContent={"center"}>
        <Grid
          item
          xs={12}
          md={11}
          xl={6}
          sx={{
            padding: { xs: 0, sm: "60px 0" },
          }}
        >
          <ProfileUserInfo />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent={"center"}
        sx={{
          paddingBottom: "60px",
        }}
      >
        <Grid item xs={11} xl={9}>
          <FormProvider {...methods}>
            <Grid item xs={12} component={"form"}>
              <FormTitleWithSearchAndSelect
                name="formTitleSearchValue"
                title="Bài Viết"
                mb={"0"}
              >
                <Grid item container xs={12} mt={{ xs: "20px", sm: "40px" }}>
                  <Grid item xs={12}>
                    <GroupCardPost />
                  </Grid>
                </Grid>
              </FormTitleWithSearchAndSelect>
            </Grid>
          </FormProvider>
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
