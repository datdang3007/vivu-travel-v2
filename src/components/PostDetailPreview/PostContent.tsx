import { Grid, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { POST_CATEGORY_TYPE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";
import { CardTravelTeller } from "src/ui";

type Props = {
  data: any[];
};

const userData = {
  name: "Reviewer 01",
  from: "Ho Chi Minh, Viet Nam",
  avatar:
    "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
};

export const PostContent = (props: Props) => {
  const { data } = props;

  // Switch case post detail component:
  const newPostDetailComponent = useCallback(
    (type: number, content: string) => {
      switch (type) {
        case POST_CATEGORY_TYPE.TITLE:
          return <TitleText>{content}</TitleText>;
        case POST_CATEGORY_TYPE.DETAIL:
          return <BasicText>{content}</BasicText>;
        default:
          return content;
      }
    },
    []
  );

  // Render post detail component:
  const renderPostDetailComponent = useCallback(() => {
    return data.map((val) => {
      const id = val.id;
      const type = val.type;
      const content = val.content;
      const component = newPostDetailComponent(type, content);

      return (
        <Grid key={id} item xs={12}>
          {component}
        </Grid>
      );
    });
  }, [data, newPostDetailComponent]);

  return (
    <PaperContainer item container justifyContent={"center"} xs={10} sm={11}>
      <Grid item xs={12}>
        <CardTravelTeller
          name={userData.name}
          avatar={userData.avatar}
          from={userData.from}
          sx={{
            background: "#FAFAFA",
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
