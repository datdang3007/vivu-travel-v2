import { Place, School, Favorite, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { POST_TAG_TYPE } from "src/constants";
import { COLOR_PALLETTE, COLOR_POST_TAGS } from "src/constants/color";

export const ProfileUserInfo = () => {
  return (
    <Grid
      item
      container
      xs={12}
      position={"relative"}
      padding={{ xs: "40px 0 60px", sm: 0 }}
    >
      <ButtonMenu>
        <MoreVert />
      </ButtonMenu>
      <Grid
        item
        container
        alignItems={"flex-start"}
        justifyContent={"center"}
        xs={12}
        sm={3.5}
      >
        <Avatar
          alt={"Felix Rostig"}
          src={
            "https://images.unsplash.com/profile-1540579635791-e37072eb85c1?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          }
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        mt={{ xs: "20px", sm: 0 }}
        padding={{ xs: "0 20px", sm: 0 }}
      >
        <Grid
          item
          container
          xs={12}
          justifyContent={{ xs: "center", sm: "flex-start" }}
        >
          <Typography fontSize={{ xs: "40px" }} fontWeight={"bold"}>
            Felix Rostig
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          mt={"8px"}
        >
          <Typography
            fontSize={{ xs: "16px" }}
            textAlign={{ xs: "center", sm: "left" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item container xs={12} mt={"16px"} rowGap={"10px"}>
          <IconInfo item container xs={12}>
            <Favorite sx={{ mr: "6px", color: "#FF7E9B" }} />
            <Typography fontSize={{ xs: "16px" }}>2.054</Typography>
          </IconInfo>
          <IconInfo item container xs={12}>
            <Place sx={{ mr: "6px", color: "#f35d78" }} />
            <Typography fontSize={{ xs: "16px" }}>Germany</Typography>
          </IconInfo>
          <IconInfo item container xs={12}>
            <School sx={{ mr: "6px", color: "#44c3e4" }} />
            <Typography fontSize={{ xs: "16px" }}>
              Ludwig Maximilian University of Munich
            </Typography>
          </IconInfo>
        </Grid>
        <Grid
          item
          container
          xs={12}
          mt={"24px"}
          columnGap={"8px"}
          rowGap={"8px"}
        >
          <ButtonType
            sx={{
              background: `${
                COLOR_POST_TAGS[POST_TAG_TYPE.DISCOVER]
              } !important`,
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
              }}
            >
              {POST_TAG_TYPE.DISCOVER}
            </Typography>
          </ButtonType>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ButtonMenu = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
});

const IconInfo = styled(Grid)({
  color: COLOR_PALLETTE.DIM_GRAY,
});

const ButtonType = styled(Button)({
  padding: "4px 8px",
  borderRadius: "4px",
  color: COLOR_PALLETTE.WHITE,
  transition: "0.2s",
  "&:hover": {
    opacity: "0.7",
  },
});
