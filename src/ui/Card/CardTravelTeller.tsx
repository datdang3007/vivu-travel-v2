import {
  Avatar,
  Card,
  CardProps,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";
import { CardTravelTellerProps } from "src/types/Ui";

export const CardTravelTeller = (props: CardTravelTellerProps & CardProps) => {
  const { name, avatar, from, ...rest } = props;

  return (
    <CardContainer {...rest}>
      <Grid container>
        <Grid item container justifyContent={"center"} xs={12}>
          <Avatar alt={name} src={avatar} sx={{ width: 80, height: 80 }} />
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} mt={"15px"}>
          <Typography
            sx={{
              color: COLOR_PALLETTE.BLACK,
              fontWeight: "bold",
              fontSize: {
                xs: 18,
                sm: 20,
                xl: 22,
              },
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} mt={"5px"}>
          <Typography
            sx={{
              color: COLOR_PALLETTE.DIM_GRAY,
              fontSize: {
                xs: 14,
                sm: 16,
                xl: 18,
              },
            }}
          >
            {from}
          </Typography>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

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
