import { Box, Grid, GridProps, Typography } from "@mui/material";
import { BoxImage } from "../Box/BoxImage";
import { CardInfoActionProps } from "../../types/Ui";
import { COLOR_PALLETTE } from "../../constants/color";

export const CardInfoAction = (props: CardInfoActionProps & GridProps) => {
  const {
    title,
    subTitle,
    src,
    alt,
    isCursorPointer,
    isTitleCenter,
    boxSxProp,
    onClick,
    ...rest
  } = props;

  return (
    <Grid item container {...rest}>
      <Grid item xs={12} overflow={"hidden"} borderRadius={"4px"}>
        <Box
          sx={{
            height: { xs: "200px", sm: "240px", xl: "300px" },
            ...boxSxProp,
          }}
          onClick={onClick}
        >
          <BoxImage src={src} alt={alt} isCursorPointer={isCursorPointer} />
        </Box>
      </Grid>

      <Grid item xs={12} mt={"15px"}>
        <Grid
          item
          xs={12}
          textAlign={isTitleCenter ? "center" : undefined}
          mb={"5px"}
        >
          <Typography
            onClick={onClick}
            color={COLOR_PALLETTE.ZAMBEZI}
            sx={{
              cursor: isCursorPointer ? "pointer" : undefined,
              fontSize: {
                xs: 14,
                sm: 16,
                xl: 18,
              },
            }}
          >
            {subTitle}
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign={isTitleCenter ? "center" : undefined}>
          <Typography
            onClick={onClick}
            sx={{
              cursor: isCursorPointer ? "pointer" : undefined,
              fontSize: {
                xs: 18,
                sm: 20,
                xl: 22,
              },
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
