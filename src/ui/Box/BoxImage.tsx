import { LazyLoadImage } from "@tjoskar/react-lazyload-img";
import { BoxImageProps } from "../../types/Ui";
import { useEffect, useState } from "react";
import { WaitForImageToLoad } from "src/utils/common";
import { Box, Skeleton, styled } from "@mui/material";

export const BoxImage = (props: BoxImageProps) => {
  const [url, setUrl] = useState<string>();
  const { src, borderRadius, isCursorPointer } = props;

  useEffect(() => {
    WaitForImageToLoad(src).then((result) => {
      if (result) {
        setUrl(result);
      }
    });
  }, [src]);

  if (!url) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "block",
          borderRadius: borderRadius,
        }}
      >
        <ImageSkeleton />
      </Box>
    );
  }
  return (
    <Image
      src={url}
      style={{
        borderRadius: borderRadius,
        cursor: isCursorPointer ? "pointer" : undefined,
      }}
    />
  );
};

const Image = styled("img")({
  display: "block",
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

const ImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  transform: "unset",
});
