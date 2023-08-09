import { Box, Grid } from "@mui/material";
import { BackgroundText } from "../../ui/Text/BackgroundText";

export const Home = () => {
  return (
    <Grid item xs={12}>
      <Grid
        item
        xs={12}
        height={"80vh"}
        sx={{
          position: 'relative',
          zIndex: '-1',
          background:
            "url(https://images5.alphacoders.com/864/864641.jpg) no-repeat top/cover",
          boxShadow: `0px 0px 1000px 500px rgba(0, 0, 0, 0.3) inset`,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png"
          alt=""
          style={{
            position: "absolute",
            display: "block",
            // width: "100%",
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
          }}
        />
        <BackgroundText
          title="WELCOME TO VIET NAM !"
          slogan="Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới"
        />
      </Grid>
      <Grid item xs={12} height={'100vh'}>
          
      </Grid>
    </Grid>
  );
};
