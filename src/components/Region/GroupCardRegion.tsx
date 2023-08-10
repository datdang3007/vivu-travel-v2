import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";

export const GroupCardRegion = () => {
  return (
    <Grid
      item
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      xs={12}
    >
      <CardInfoAction
        xs={12}
        sm={6}
        xl={3.75}
        padding={{
          xs: "20px",
          xl: "0px",
        }}
        title={"Miền Bắc"}
        isTitleCenter
        src={
          "https://cdn.discordapp.com/attachments/1085804453246009374/1100330708679004231/image.png"
        }
      />
      <CardInfoAction
        xs={12}
        sm={6}
        xl={3.75}
        padding={{
          xs: "20px",
          xl: "0px",
        }}
        title={"Miền Trung"}
        isTitleCenter
        src={
          "https://cdn.discordapp.com/attachments/1089123119668658206/1105063159552815146/daragon-bridge-on-an-opening-day-cE1BAA7u-rE1BB93ng-C491C3A0-nE1BAB5ng-Danang-Discovery-4-famous-bridge-in-danang-Restaurant-near-me-dragon-bridge-history-a-new-iconic-image-of-danang.png"
        }
      />
      <CardInfoAction
        xs={12}
        sm={6}
        xl={3.75}
        padding={{
          xs: "20px",
          xl: "0px",
        }}
        title={"Miền Nam"}
        isTitleCenter
        src={
          "https://cdn.discordapp.com/attachments/1091622222453559437/1105878882743242776/du-lich-mien-tay-1.png"
        }
      />
    </Grid>
  );
};
