import { Button, Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/routes/path";

export const Page404 = () => {
  const navigate = useNavigate();

  const onClickBackHome = useCallback(() => {
    navigate(PATH.HOME, { replace: true });
  }, [navigate]);

  return (
    <Grid
      item
      xs={12}
      container
      height={"95vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        item
        sx={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={"auto"}
          sx={{
            zIndex: -1,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            fontSize={{
              xs: "37.5vw",
              sm: "28vw",
              lg: "13vw",
            }}
            sx={{
              color: "#ECECEC",
              fontWeight: 900,
            }}
          >
            404
          </Typography>
        </Grid>
        <Grid item xs={"auto"}>
          <Typography
            fontSize={{
              xs: "5.5vw",
              sm: "4vw",
              lg: "2.6vw",
            }}
            sx={{
              color: "#000",
              fontWeight: 900,
            }}
          >
            WE ARE SORRY, PAGE NOT FOUND!
          </Typography>
        </Grid>
        <Grid
          item
          xs={"auto"}
          maxWidth={{
            xs: "90vw",
            sm: "60vw",
            lg: "42vw",
          }}
        >
          <Typography
            fontSize={{
              xs: "2.5vw",
              sm: "1.5vw",
              lg: "0.9vw",
            }}
          >
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </Typography>
        </Grid>
        <Grid
          item
          xs={"auto"}
          sx={{
            position: "absolute",
            top: { xs: "150%", sm: "160%", lg: "150%" },
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button variant="contained" onClick={onClickBackHome}>
            <Typography
              textTransform={"none"}
              fontSize={{
                xs: "2.5vw",
                sm: "2vw",
                lg: "0.9vw",
              }}
            >
              Back to Home
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
