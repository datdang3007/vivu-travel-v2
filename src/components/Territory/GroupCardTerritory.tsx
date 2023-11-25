import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { GroupCardTerritoryProps } from "../../types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/routes/path";
import { CardActionSkeleton } from "src/skeleton";

export const GroupCardTerritory = (props: GroupCardTerritoryProps) => {
  const navigate = useNavigate();
  const { listTerritory, loading } = props;

  const handleChangeToDetailPage = useCallback(
    (id: string | number) => {
      navigate(`${PATH.TERRITORY}/${id}`);
    },
    [navigate]
  );

  const renderListCardInfo = useCallback(() => {
    return listTerritory?.map((val) => (
      <CardInfoAction
        key={val.id}
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        padding={{
          xs: "20px",
          xl: "10px",
        }}
        isCursorPointer
        title={val.title}
        subTitle={val.subTitle}
        src={val.src}
        onClick={() => handleChangeToDetailPage(val.id)}
      />
    ));
  }, [handleChangeToDetailPage, listTerritory]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      {loading ? (
        <>
          <CardActionSkeleton
            hasSubTitle
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            padding={{
              xs: "20px",
              xl: "10px",
            }}
          />
          <CardActionSkeleton
            hasSubTitle
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            padding={{
              xs: "20px",
              xl: "10px",
            }}
          />
          <CardActionSkeleton
            hasSubTitle
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            padding={{
              xs: "20px",
              xl: "10px",
            }}
          />
          <CardActionSkeleton
            hasSubTitle
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            padding={{
              xs: "20px",
              xl: "10px",
            }}
          />
        </>
      ) : (
        renderListCardInfo()
      )}
    </Grid>
  );
};
