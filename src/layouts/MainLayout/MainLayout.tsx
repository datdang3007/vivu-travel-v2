import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { useMasterContext } from "../../context/MasterContext";
import { Footer } from "../../components/Footer";

export const MainLayout = () => {
  const { isMobile, isTabletMini, user } = useMasterContext();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Header isMenu={isMobile || isTabletMini} user={user} />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
