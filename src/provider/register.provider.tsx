import { useTheme } from "@emotion/react";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FORM_SIGN_UP_TYPE } from "src/constants";
import { useCallAPIAuth } from "src/hooks";
import { IAuthSignUp } from "src/interfaces";
import { PATH } from "src/routes/path";
import { showAlertError, showAlertSuccess } from "src/utils/alert";
import { rules } from "src/utils/validation";

interface Props {
  children: ReactNode;
}

type AuthSignUpContextProps = {
  theme: any;
  formType: string;
  validateEmail: any;
  onSubmit: () => void;
  validatePassword: any;
  changeDirectionToHome: () => void;
  changeDirectionToLoginPage: () => void;
  formSignUp: UseFormReturn<IAuthSignUp, any, undefined>;
};

const AuthSignUpContext = createContext<AuthSignUpContextProps | null>(null);

export const useAuthSignUpContext = () => {
  const ctx = useContext(AuthSignUpContext);

  if (!ctx) {
    throw new Error("need provider");
  }
  return ctx;
};

export const AuthSignUpProvider = ({ children }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { requestSignUp, requestCheckExistEmail } = useCallAPIAuth();
  const { validateEmail, validatePassword } = rules;
  const [formType, setFormType] = useState(FORM_SIGN_UP_TYPE.EMAIL);
  const formSignUp = useForm<IAuthSignUp>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
  });
  const { handleSubmit } = formSignUp;

  const onSubmit = handleSubmit(
    useCallback(
      async (data) => {
        const { email, username, password, confirm_password } = data;

        // Check email is exist
        if (email) {
          const isExist = await requestCheckExistEmail(email);
          if (isExist) {
            return showAlertError("Lỗi !", "Email đã tồn tại");
          }
        }

        // Change to page input password
        if (!password && !confirm_password) {
          return setFormType(FORM_SIGN_UP_TYPE.PASSWORD);
        }

        // Check validate password and confirm password
        if (password !== confirm_password) {
          return showAlertError("Lỗi !", "Mật khẩu xác minh không khớp");
        }

        // Change to page input username
        if (!username) {
          return setFormType(FORM_SIGN_UP_TYPE.USERNAME);
        }

        // Sign up successfully
        requestSignUp(data)
          .then(() => {
            showAlertSuccess("Tạo thành công", "Đã tạo tài khoản thành công!");
            setTimeout(() => {
              navigate(PATH.LOGIN);
            }, 2000);
          })
          .catch((error) => {
            console.error(error);
            showAlertError("Lỗi !", "Đã gặp lỗi khi tạo tài khoản");
          });
      },
      [navigate, requestCheckExistEmail, requestSignUp]
    )
  );

  // Navigate
  const changeDirectionToLoginPage = useCallback(() => {
    navigate(PATH.LOGIN);
  }, [navigate]);

  const changeDirectionToHome = useCallback(() => {
    navigate(PATH.HOME);
  }, [navigate]);

  const provideProps = useMemo(
    () => ({
      theme,
      onSubmit,
      formType,
      formSignUp,
      validateEmail,
      validatePassword,
      changeDirectionToHome,
      changeDirectionToLoginPage,
    }),
    [
      theme,
      onSubmit,
      formType,
      formSignUp,
      validateEmail,
      validatePassword,
      changeDirectionToHome,
      changeDirectionToLoginPage,
    ]
  );

  return (
    <AuthSignUpContext.Provider value={provideProps}>
      {children}
    </AuthSignUpContext.Provider>
  );
};
