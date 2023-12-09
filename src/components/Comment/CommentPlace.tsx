import { Grid, Typography, styled } from "@mui/material";
import { COLOR_PALLETTE } from "src/constants/color";
import { Content } from "./Content";
import { InputComment } from "./InputComment";
import { FormProvider, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useCallAPICreate, useCallAPIFind } from "src/hooks";
import { useMasterContext } from "src/context/MasterContext";
import { FormatDate, compareDateTime } from "src/utils/common";

type Props = {
  placeId: string | number;
};

export const CommentPlace = (props: Props) => {
  const { placeId } = props;
  const { user } = useMasterContext();
  const [commentData, setCommentData] = useState<any[]>([]);
  const { requestCreatePlaceComment } = useCallAPICreate();
  const { requestFindPlaceCommentByPlaceID } = useCallAPIFind();

  const formComment = useForm({
    defaultValues: {
      comment: "",
    },
  });
  const { handleSubmit, reset } = formComment;

  const onSubmit = handleSubmit(
    useCallback(
      (values) => {
        const { comment } = values;
        if (!comment || !user?.email) return;

        const dataSubmit = {
          creator: user.email,
          content: comment,
          place: { id: placeId },
        };
        requestCreatePlaceComment(dataSubmit).then(() => {
          reset({ comment: "" });
          requestFindPlaceCommentByPlaceID(placeId).then((res) => {
            setCommentData(res);
          });
        });
      },
      [
        user,
        reset,
        placeId,
        requestCreatePlaceComment,
        requestFindPlaceCommentByPlaceID,
      ]
    )
  );

  const renderCommentsComponent = useCallback(() => {
    if (!commentData.length) return null;
    return commentData.map((val) => {
      const { content, creator, created_at } = val;

      return (
        <Content
          content={content}
          creator={creator}
          createdAt={compareDateTime(created_at)}
        />
      );
    });
  }, [commentData]);

  useEffect(() => {
    requestFindPlaceCommentByPlaceID(placeId).then((res) => {
      setCommentData(res);
    });
  }, [placeId, requestFindPlaceCommentByPlaceID]);

  return (
    <FormProvider {...formComment}>
      <Grid component={"form"} onSubmit={onSubmit}>
        <CommentContainer item xs={12}>
          <CommentHeader item xs={12}>
            <Typography fontSize={"20px"}>Bình Luận</Typography>
          </CommentHeader>
          <CommentContent>
            <Grid container rowGap={"8px"}>
              {renderCommentsComponent()}
            </Grid>
            <InputComment />
          </CommentContent>
        </CommentContainer>
      </Grid>
    </FormProvider>
  );
};

const CommentContainer = styled(Grid)({
  overflow: "hidden",
});

const CommentHeader = styled(Grid)({
  padding: "8px 16px",
  background: COLOR_PALLETTE.PRIMARY,
  color: COLOR_PALLETTE.WHITE,
  borderRadius: `8px 8px 0 0`,
});

const CommentContent = styled(Grid)({
  padding: "16px",
  border: `1px solid ${COLOR_PALLETTE.BLACK}`,
  borderTop: "unset",
});
