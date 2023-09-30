import { COLOR_PALLETTE } from "@/constants/color";
import { CardTravelTeller } from "@/ui";
import { Grid, Typography, styled } from "@mui/material";

const userData = {
  name: "Reviewer 01",
  from: "Ho Chi Minh, Viet Nam",
  avatar:
    "https://assets.website-files.com/5ed4430d97a20a41629058ab/5ed47e09c6c9789e41e50f94_brooke-cagle-Nm70URdtf3c-unsplash.jpg",
};

export const PostContent = () => {
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
        <Grid item xs={12}>
          <TitleText>Iure dolorem cumque quae eius.</TitleText>
        </Grid>
        <Grid item xs={12}>
          <BasicText>
            Consequatur quae molestias itaque totam optio tenetur. Sint ex sed.
            Et similique in aut iste quibusdam unde. Laboriosam et fugit natus
            quaerat libero aspernatur et consequatur. Rem ea a omnis voluptatem
            est ut.
          </BasicText>
        </Grid>
        <Grid item xs={12}>
          <TitleText>
            Alias molestiae non velit quis dignissimos voluptates.
          </TitleText>
        </Grid>
        <Grid item xs={12}>
          <BasicText>
            A eum consequuntur quia qui aspernatur quia. Quia corrupti quaerat
            omnis odio enim voluptatem et ea repudiandae. Officia numquam
            voluptatem in. Ex natus dolore est hic et dolorem excepturi
            sapiente. Earum maxime nostrum dolor iure quasi eius dignissimos.
            Laborum nihil maiores. Ratione omnis officiis sit ut repellendus
            doloribus quas similique. Earum dolor velit quia dolorum. Beatae
            maiores dignissimos corrupti eveniet.
          </BasicText>
        </Grid>
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
