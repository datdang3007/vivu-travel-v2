import { LazyLoadImage } from "@tjoskar/react-lazyload-img";
import { BoxImageProps } from "../../types/Ui";

export const BoxImage = (props: BoxImageProps) => {
  const { src, borderRadius, isCursorPointer } = props;
  return (
    <LazyLoadImage
      key={src}
      width={"100%"}
      height={"100%"}
      defaultImage={src}
      image={src}
      style={{
        display: "block",
        objectFit: "cover",
        borderRadius: borderRadius,
        cursor: isCursorPointer ? "pointer" : undefined,
      }}
    />
  );
};
