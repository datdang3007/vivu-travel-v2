import {
  Box,
  Grid,
  GridProps,
  Skeleton,
  Typography,
  styled,
} from "@mui/material";
import { CardInfoActionSkeletonProps } from "src/types/Ui";

export const CardActionSkeleton = (
  props: CardInfoActionSkeletonProps & GridProps
) => {
  const { isTitleCenter, boxSxProp, hasSubTitle, ...rest } = props;

  return (
    <Grid item container {...rest}>
      <Grid item xs={12} overflow={"hidden"} borderRadius={"4px"}>
        <Box
          sx={{
            height: { xs: "200px", sm: "240px", xl: "300px" },
            ...boxSxProp,
          }}
        >
          <ImageSkeleton />
        </Box>
      </Grid>

      <Grid
        item
        container
        xs={12}
        mt={"15px"}
        justifyContent={isTitleCenter ? "center" : undefined}
      >
        {hasSubTitle && (
          <Grid item xs={6} mb={"5px"}>
            <Typography
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 16,
                  xl: 18,
                },
              }}
            >
              <Skeleton />
            </Typography>
          </Grid>
        )}

        <Grid item xs={12} textAlign={isTitleCenter ? "center" : undefined}>
          <Typography
            sx={{
              fontSize: {
                xs: 18,
                sm: 20,
                xl: 22,
              },
              fontWeight: "bold",
            }}
          >
            <Skeleton />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  transform: "unset",
});
