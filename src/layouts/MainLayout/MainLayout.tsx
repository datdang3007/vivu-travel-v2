import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { useDeviceCheck } from "../../hooks/useCheckDevice";

export const MainLayout = () => {
  const { device } = useDeviceCheck();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Header isMenu={device() === "mobile"} />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
