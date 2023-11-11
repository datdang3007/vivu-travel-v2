import { useMediaQuery, useTheme } from "@mui/material";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { LOCAL_STORAGE } from "src/constants/local_storage";
import { useCallAPIAuth } from "src/hooks";
import { IAuthUser } from "src/interfaces";

interface Props {
  children: ReactNode;
}

type SettingContextProps = {
  user: IAuthUser | null;
  isMobile: boolean;
  isTabletMini: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const MasterContext = createContext<SettingContextProps | null>(null);

export const useMasterContext = () => {
  const ctx = useContext(MasterContext);

  if (!ctx) {
    throw new Error("need provider");
  }
  return ctx;
};

export const MasterProvider = ({ children }: Props) => {
  const theme = useTheme();
  const location = useLocation();
  const [user, setUser] = useState<IAuthUser | null>(null);

  // Handle user data:
  const { requestGetUserProfile } = useCallAPIAuth();
  const handleSetUserData = useCallback(() => {
    requestGetUserProfile()
      .then((data) => {
        if (data) {
          localStorage.setItem(LOCAL_STORAGE.UserRole, "1");
        }
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [requestGetUserProfile]);

  // Define device:
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletMini = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const provideProps = useMemo(
    () => ({
      user,
      isMobile,
      isTabletMini,
      isTablet,
      isDesktop,
    }),
    [user, isMobile, isTabletMini, isTablet, isDesktop]
  );

  useEffect(() => {
    handleSetUserData();
  }, [location, handleSetUserData]);

  return (
    <>
      <MasterContext.Provider value={provideProps}>
        {children}
      </MasterContext.Provider>
    </>
  );
};
