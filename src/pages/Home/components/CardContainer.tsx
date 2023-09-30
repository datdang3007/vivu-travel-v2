import { Card } from "@mui/material";

const CardContainer = styled(Card)({
  cursor: "pointer",
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  padding: "30px",
  background: COLOR_PALLETTE.WHITE,
  border: "1px solid rgba(35, 34, 34, 0.05)",
  boxShadow: `1px 1px 15px 0 rgba(0, 0, 0, 0.03)`,
  "&:after": {
    content: `''`,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "4px",
    transition: "0.3s",
    transform: "translateY(4px)",
    background: COLOR_PALLETTE.PRIMARY,
  },
  "&:hover": {
    "&:after": {
      transform: "translateY(0)",
    },
  },
  ".MuiPaper-root": {
    borderRadius: "8px",
  },
});
