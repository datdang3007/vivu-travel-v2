import { useMediaQuery } from "@mui/material";

export const useDeviceCheck = () => {
  const Desktop = useMediaQuery("(min-width: 1200px)");
  const Ipad = useMediaQuery("(min-width: 900px)");
  const IpadMini = useMediaQuery("(min-width: 600px)");

  const device = () => {
    if (Desktop) return "desktop";
    if (Ipad) return "iPad";
    if (IpadMini) return "iPadMini";
    else return "mobile";
  };

  return {
    device,
  };
};
