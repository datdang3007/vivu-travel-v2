import { Grid, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { IUser } from "src/interfaces";
import { ContentDataProps } from "src/types";
import { BoxImage, CardTravelTeller } from "src/ui";

type Props = {
  creator: IUser | undefined;
  contents: ContentDataProps[] | undefined;
};

export const PostContent = (props: Props) => {
  const { creator, contents } = props;

  // Switch case post detail component:
  const newPostDetailComponent = useCallback(
    (type: number, content: string) => {
      switch (type) {
        case POST_CATEGORY_TYPE.TITLE:
          return <TitleText>{content}</TitleText>;
        case POST_CATEGORY_TYPE.DETAIL:
          return <BasicText>{content}</BasicText>;
        case POST_CATEGORY_TYPE.IMAGE:
          return <BoxImage src={content} />;
        default:
          return content;
      }
    },
    []
  );

  // Render post detail component:
  const renderPostDetailComponent = useCallback(() => {
    return contents?.map((val) => {
      const { id, type, content } = val;
      const component = newPostDetailComponent(type, content);

      return (
        <Grid key={id} item xs={12}>
          {component}
        </Grid>
      );
    });
  }, [contents, newPostDetailComponent]);

  return (
    <PaperContainer item container justifyContent={"center"} xs={10} sm={11}>
      <Grid item xs={12}>
        <CardTravelTeller
          name={creator?.username ?? ""}
          avatar={creator?.avatar}
          from={""}
          sx={{
            background: "#FAFAFA",
            border: "none",
            boxShadow: "0 0 6px rgba(0,0,0, .16)",
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            "&:hover": {
              "&:after": { transform: "translateY(4px)" },
            },
          }}
        />
      </Grid>
      <ContentContainer item xs={12}>
        {renderPostDetailComponent()}
      </ContentContainer>
    </PaperContainer>
  );
};

const PaperContainer = styled(Grid)({
  overflow: "hidden",
  background: COLOR_PALLETTE.WHITE,
  boxShadow: `1px 1px 16px 0 rgba(0, 0, 0, 0.08)`,
});

const ContentContainer = styled(Grid)(({ theme }) => ({
  padding: "10px 52px 30px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 16px 30px",
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "900",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

const BasicText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginTop: "10px",
}));
