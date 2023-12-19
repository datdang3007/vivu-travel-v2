import { Grid, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FormTitleWithSearch } from "src/components/Form";
import { GroupUserCardPost, ProfileUserInfo } from "src/components/Profile";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { useMasterContext } from "src/context/MasterContext";
import { useCallAPIFind } from "src/hooks";
import { IAuthUser } from "src/interfaces";
import { PATH } from "src/routes/path";
import { FormTitleSearchProps } from "src/types";
import { GetIdParams } from "src/utils/common";

export const ProfileUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user: currentUser } = useMasterContext();
  const userId = GetIdParams(location.pathname);
  const [user, setUser] = useState<IAuthUser | null>(null);
  const { requestFindUserById } = useCallAPIFind();
  const methods = useForm<FormTitleSearchProps>({
    defaultValues: {
      formTitleSearchValue: "",
    },
  });
  const { watch } = methods;
  const { formTitleSearchValue } = watch();

  const onSearch = useCallback(() => {
    console.log(formTitleSearchValue);
  }, [formTitleSearchValue]);

  useEffect(() => {
    if (!!currentUser && currentUser.id === userId) {
      navigate(`${PATH.PROFILE}`);
      return;
    }

    if (userId) {
      requestFindUserById(Number(userId)).then((data: IAuthUser | null) => {
        setUser(data);
      });
    }
  }, [currentUser, navigate, requestFindUserById, userId]);

  if (!user) return null;

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
          <ProfileUserInfo user={user} isOwner={false} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent={"center"}
        sx={{
          paddingBottom: "60px",
          minHeight: "calc(100vh - 351.5px)",
        }}
      >
        <Grid item xs={11} xl={9}>
          <FormProvider {...methods}>
            <Grid item xs={12} component={"form"}>
              <FormTitleWithSearch
                onSearch={onSearch}
                name="formTitleSearchValue"
                title="Bài Viết"
                mb={"0"}
              >
                <Grid item container xs={12} mt={{ xs: "20px", sm: "40px" }}>
                  <Grid item xs={12}>
                    <GroupUserCardPost user={user} isOwner={false} />
                  </Grid>
                </Grid>
              </FormTitleWithSearch>
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
