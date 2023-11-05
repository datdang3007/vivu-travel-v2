import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PATH } from "../../routes/path";
import { useCallApiList } from "src/hooks";

export const GroupCardRegion = () => {
  const navigate = useNavigate();
  const { regionList } = useCallApiList();

  const handleNavigateToDetailPage = useCallback(
    (id: string | number) => {
      navigate(`${PATH.REGION}/${id}`);
    },
    [navigate]
  );

  const renderRegionCardComponent = useCallback(() => {
    return regionList.map((region) => {
      return (
        <CardInfoAction
          key={region.id}
          xs={12}
          lg={4}
          padding={{
            xs: "20px",
            xl: "10px",
          }}
          title={region.name}
          isTitleCenter
          isCursorPointer
          onClick={() => handleNavigateToDetailPage(region.id)}
          src={region.image}
        />
      );
    });
  }, [handleNavigateToDetailPage, regionList]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      {renderRegionCardComponent()}
    </Grid>
  );
};
