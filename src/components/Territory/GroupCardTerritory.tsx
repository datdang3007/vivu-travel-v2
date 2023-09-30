import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { GroupCardTerritoryProps } from "../../types";
import { useCallback } from "react";

export const GroupCardTerritory = (props: GroupCardTerritoryProps) => {
  const { listTerritory } = props;

  const renderListCardInfo = useCallback(() => {
    return listTerritory.map((val, index) => (
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
      />
    ));
  }, [listTerritory]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      {renderListCardInfo()}
    </Grid>
  );
};
