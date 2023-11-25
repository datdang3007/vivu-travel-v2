import { Grid, styled } from "@mui/material";
import { BackgroundText } from "../../../ui/Text/BackgroundText";
import { BackgroundContentProps } from "../../../types";
import { WaitForImageToLoad } from "src/utils/common";
import { useEffect, useState } from "react";
import { BaseSkeleton } from "src/skeleton";

export const BackgroundContent = (props: BackgroundContentProps) => {
  const [url, setUrl] = useState<string>();
  const { isHomePage, height, backgroundImg, isShowBottomImg, title, slogan } =
    props;

  useEffect(() => {
    WaitForImageToLoad(backgroundImg).then((result) => {
      if (result) {
        setUrl(result);
      }
    });
  }, [backgroundImg]);

  return (
    <Grid
      item
      xs={12}
      height={height}
      sx={{
        position: "relative",
        zIndex: "-1",
        background: `url(${url}) no-repeat center/cover`,
        boxShadow: `0px 0px 1000px 500px rgba(0, 0, 0, 0.5) inset`,
        overflow: "hidden",
      }}
    >
      {!url ? (
        <BaseSkeleton />
      ) : (
        <>
          {isShowBottomImg && (
            <BottomImg
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-bottom.png"
              alt=""
            />
          )}
          <BackgroundText
            title={title}
            slogan={slogan}
            isHomePage={isHomePage}
          />
        </>
      )}
    </Grid>
  );
};

const BottomImg = styled("img")({
  position: "absolute",
  display: "block",
  left: "50%",
  bottom: 0,
  transform: "translateX(-50%)",
});
