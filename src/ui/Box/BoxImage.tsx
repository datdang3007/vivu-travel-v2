import { styled } from "@mui/material";
import { BoxImageProps } from "../../types/Ui";

export const BoxImage = (props: BoxImageProps) => {
  const { src, alt, borderRadius, isHoverEffect, isCursorPointer } = props;
  return (
    <Image
      src={src}
      alt={alt}
      className={isHoverEffect ? "isHoverEffect" : ""}
      style={{
        borderRadius: borderRadius,
        cursor: isCursorPointer ? "pointer" : undefined,
      }}
    />
  );
};

const Image = styled("img")({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "0.3s",
  "&.isHoverEffect": {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
