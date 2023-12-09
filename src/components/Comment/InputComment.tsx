import { Button, Grid, styled } from "@mui/material";
import { Send } from "@mui/icons-material";
import { InputTextField } from "../Form";
import { COLOR_PALLETTE } from "src/constants/color";
import { useCallback, useRef } from "react";

export const InputComment = () => {
  const SubmitRef = useRef<HTMLButtonElement>(null);
  const keyDown = useCallback((e: any) => {
    const key = e.key;
    if (key === "Enter" && e.shiftKey && SubmitRef.current) {
      e.preventDefault();
      SubmitRef.current.click();
    }
  }, []);

  return (
    <CommentBox container mt={"20px"}>
      <Grid
        container
        item
        xs={12}
        justifyContent={"flex-end"}
        sx={{
          background: COLOR_PALLETTE.CULTURED,
        }}
      >
        <Button type="submit" ref={SubmitRef}>
          <Send />
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          background: COLOR_PALLETTE.WHITE,
        }}
      >
        <InputTextField
          name="comment"
          variant="outlined"
          multiline
          fullWidth
          minRows={3}
          type="text"
          placeholder="Nhập bình luận.."
          onKeyDown={keyDown}
          sx={{
            textarea: {
              minHeight: "23px",
              maxHeight: "138px",
              resize: "vertical",
            },
            fieldset: {
              border: "none",
            },
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </CommentBox>
  );
};

const CommentBox = styled(Grid)({
  border: `1px solid ${COLOR_PALLETTE.DIM_GRAY}`,
});
