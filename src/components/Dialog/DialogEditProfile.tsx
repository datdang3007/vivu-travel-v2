import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LOCAL_STORAGE } from "src/constants/local_storage";
import { useCallAPIAuth, useSelectCountryHook } from "src/hooks";
import { IAuthUser } from "src/interfaces";
import { showAlertSuccess } from "src/utils/alert";
import { FormUploadImage, InputTextField } from "../Form";

type Props = {
  user: IAuthUser;
  open: boolean;
  onClose: () => void;
};

const initForm = {
  username: "",
  avatar: "",
  country: "",
  description: "",
};

export const DialogEditProfile = (props: Props) => {
  const { user, open, onClose } = props;
  const { SelectField: CountryOptionsComponent } = useSelectCountryHook();
  const { requestEditUserProfile } = useCallAPIAuth();

  const formEditProfile = useForm({
    defaultValues: initForm,
  });
  const { reset, handleSubmit } = formEditProfile;

  const onSubmit = handleSubmit(
    useCallback(
      (values) => {
        const { id, email } = user;
        const dataSubmit = { id, email, ...values };
        requestEditUserProfile(dataSubmit)
          .then((res) => {
            showAlertSuccess(
              "Cập nhật thành công",
              "đã cập nhật Thông tin người dùng!"
            );
            localStorage.setItem(LOCAL_STORAGE.AccessToken, res.access_token);
            onClose();
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((err) => {
            console.error("error: ", err);
          });
      },
      [onClose, requestEditUserProfile, user]
    )
  );

  useEffect(() => {
    if (!open) {
      const { username, avatar, country, description } = user;
      const data = {
        username,
        avatar,
        country,
        description,
      };
      reset(data);
    }
  }, [open, reset, user]);

  return (
    <FormProvider {...formEditProfile}>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={onClose}
        disableScrollLock
        component={"form"}
        onSubmit={onSubmit}
      >
        <DialogTitle>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: 16,
                sm: 18,
                md: 20,
              },
            }}
          >
            Chỉnh sửa thông tin cá nhân
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container rowGap={"18px"}>
            <InputTextField
              name="username"
              variant="standard"
              label="Tên người dùng"
              fullWidth
              rules={{
                required: {
                  value: true,
                  message: "Tên người dùng không được để trống",
                },
              }}
            />
            <InputTextField
              name="description"
              variant="standard"
              label="Mô tả"
              fullWidth
            />
            <InputTextField
              name="country"
              fullWidth
              select
              variant="standard"
              label="Quốc gia"
              rules={{
                required: "Quốc gia không được để trống",
              }}
            >
              {CountryOptionsComponent()}
            </InputTextField>
            <FormUploadImage
              name="avatar"
              fullWidth
              variant="standard"
              label="Ảnh đại diện"
              rules={{
                required: "Giá trị không được để trống",
              }}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            <Typography textTransform={"none"}>Hủy</Typography>
          </Button>
          <Button variant="contained" type="submit" color="primary">
            <Typography textTransform={"none"}>Lưu</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
};
