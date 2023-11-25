import { Grid, Skeleton, Typography, styled } from "@mui/material";

export const BaseSkeleton = () => {
  return (
    <Grid container>
      {/* Background */}
      <Grid item xs={12} height={"100vh"}>
        <BackgroundSkeleton />
      </Grid>

      {/* Overview */}
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={9.5} md={9} xl={7.5}>
          <Grid item mt="80px" mb="80px">
            {/* Title */}
            <Grid item container justifyContent={"center"}>
              <Grid item xs={12} md={6}>
                <Typography
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: 25,
                      sm: 30,
                      md: 35,
                    },
                  }}
                >
                  <Skeleton />
                </Typography>
              </Grid>
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <Typography
                component="div"
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                  },
                }}
              >
                <Skeleton />
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                  },
                }}
              >
                <Skeleton />
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                  },
                }}
              >
                <Skeleton />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Territory */}
      {/* <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={10} md={9.1}>
          <Grid item mt="80px" mb="80px">
            <Grid item xs={3} md={2}>
              <Typography
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: 25,
                    sm: 30,
                    md: 35,
                  },
                }}
              >
                <Skeleton />
              </Typography>
            </Grid>

            <Grid item xs={10} md={7}>
              <Typography
                component="div"
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 18,
                    md: 20,
                  },
                }}
              >
                <Skeleton />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

const BackgroundSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  transform: "unset",
});
