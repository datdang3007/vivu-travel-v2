import { COMPONENT_SIZE } from "@/constants";
import { COLOR_PALLETTE } from "@/constants/color";
import { Grid, styled } from "@mui/material";
import { FormTitle } from "@/components/Form";
import { RichEditor } from "@/components/UploadPost";

export const UploadPost = () => {
  return (
    <Grid container>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      ></HeaderBackground>
      <Grid
        item
        container
        xs={12}
        mt={{ xs: "20px", sm: "40px", md: "80px" }}
        mb={"40px"}
        justifyContent={"center"}
      >
        <Grid item xs={11} sm={10} xl={9}>
          <FormTitle title="Upload Post" mb={"40px"}>
            <Grid item container justifyContent={"center"} xs={12}>
              <Grid item container xs={12} xl={10}>
                <RichEditor />
              </Grid>
            </Grid>
          </FormTitle>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)(({ theme }) => ({
  background: COLOR_PALLETTE.PRIMARY,
  [theme.breakpoints.down("md")]: {
    background: COLOR_PALLETTE.WHITE,
  },
}));

const TiptapContainer = styled(Grid)({
  button: {
    padding: "4px 8px",
  },
  ">div": {
    marginTop: "30px",
  },
  ".tiptap": {
    ul: {
      padding: `0 1rem`,
    },
    ol: {
      padding: `0 1rem`,
    },
    "h1,h2,h3,h4,h5,h6": {
      lineHeight: "1.1",
    },
    code: {
      background: `rgba(#616161, 0.1)`,
      color: `#616161`,
    },
    pre: {
      background: `#0D0D0D`,
      color: `#FFF`,
      padding: `0.75rem 1rem`,
      borderRadius: `0.5rem`,
      code: {
        color: `inherit`,
        padding: 0,
        background: "none",
        fontSize: "0.8rem",
      },
    },
    img: {
      maxWidth: `100%`,
      height: `auto`,
    },
    blockquote: {
      paddingLeft: `1rem`,
      borderLeft: `2px solid rgba(#0D0D0D, 0.1)`,
    },
    hr: {
      border: `none`,
      borderTop: `2px solid rgba(#0D0D0D, 0.1)`,
      margin: `2rem 0`,
    },
  },
});
