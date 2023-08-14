import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PATH } from "../../routes/path";

export const GroupCardRegion = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(PATH.REGION);
  }, [navigate]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      <CardInfoAction
        xs={12}
        lg={4}
        padding={{
          xs: "20px",
          xl: "10px",
        }}
        title={"Miền Bắc"}
        isTitleCenter
        isCursorPointer
        isHoverEffect
        onClick={onClick}
        src={
          "https://cdn.discordapp.com/attachments/1085804453246009374/1100330708679004231/image.png"
        }
      />
      <CardInfoAction
        xs={12}
        sm={6}
        lg={4}
        padding={{
          xs: "20px",
          xl: "10px",
        }}
        title={"Miền Trung"}
        isTitleCenter
        isCursorPointer
        isHoverEffect
        onClick={onClick}
        src={
          "https://cdn.discordapp.com/attachments/1089123119668658206/1105063159552815146/daragon-bridge-on-an-opening-day-cE1BAA7u-rE1BB93ng-C491C3A0-nE1BAB5ng-Danang-Discovery-4-famous-bridge-in-danang-Restaurant-near-me-dragon-bridge-history-a-new-iconic-image-of-danang.png"
        }
      />
      <CardInfoAction
        xs={12}
        sm={6}
        lg={4}
        padding={{
          xs: "20px",
          xl: "10px",
        }}
        title={"Miền Nam"}
        isTitleCenter
        isCursorPointer
        isHoverEffect
        onClick={onClick}
        src={
          "https://cdn.discordapp.com/attachments/1091622222453559437/1105878882743242776/du-lich-mien-tay-1.png"
        }
      />
    </Grid>
  );
};
