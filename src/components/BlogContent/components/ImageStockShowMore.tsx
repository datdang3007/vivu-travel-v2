import { ViewModule } from "@mui/icons-material";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { Fragment } from "react";
import { BoxImage } from "../../../ui";
import { PlaceItemProps } from "./ImageStock";
import { COLOR_PALLETTE } from "src/constants/color";

type ImageStockItemProps = {
  isShowName?: boolean;
  data: PlaceItemProps;
  onOpenDialog: () => void;
};

export const ImageStockShowMore = (props: ImageStockItemProps) => {
  const { isShowName, data, onOpenDialog } = props;
  const { id, name, link } = data;

  return (
    <Fragment key={id}>
      <Grid item xs={6} sm={4} md={3} xl={12 / 5} padding={"20px 10px"}>
        <Grid item xs={12}>
          <Box width={1} sx={{ aspectRatio: "1/1" }}>
            <CustomButtonShowMore fullWidth onClick={onOpenDialog}>
              <BoxBlurEffect>
                <ViewModule
                  sx={{
                    color: COLOR_PALLETTE.WHITE,
                    transition: "0.3s",
                    fontSize: {
                      xs: "24px",
                      sm: "26px",
                      xl: "30px",
                    },
                  }}
                />
              </BoxBlurEffect>
              <BoxImage src={link} />
            </CustomButtonShowMore>
          </Box>
        </Grid>
        {isShowName && (
          <GridOneLine item xs={12} mt={"10px"}>
            <Typography
              fontSize={{ xs: "16px", sm: "20px" }}
              fontWeight={"bold"}
            >
              {name}
            </Typography>
          </GridOneLine>
        )}
      </Grid>
    </Fragment>
  );
};

const CustomButtonShowMore = styled(Button)({
  height: "100%",
  padding: 0,
});

const BoxBlurEffect = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 1000px 10px rgba(0,0,0, .6) inset",
  "&:hover": {
    svg: {
      color: COLOR_PALLETTE.PRIMARY,
      transform: "scale(1.1)",
    },
  },
});

const GridOneLine = styled(Grid)({
  display: "-webkit-box",
  overflow: "hidden !important",
  textOverflow: "ellipsis !important",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
});
