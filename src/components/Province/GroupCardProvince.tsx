import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { GroupCardProvinceProps } from "../../types";
import { useCallback } from "react";

export const GroupCardProvince = (props: GroupCardProvinceProps) => {
  const { listProvince } = props;

  const renderListCardInfo = useCallback(() => {
    return listProvince.map((val, index) => (
      <CardInfoAction
        key={val.id}
        xs={12}
        sm={6}
        md={4}
        lg={12 / 3}
        xl={12 / 5}
        padding={{
          xs: "20px",
          xl: "10px",
        }}
        boxSxProp={{
          height: { xs: "200px", sm: "240px", md: "200px", lg: "240px" },
        }}
        isCursorPointer
        title={val.title}
        src={val.src}
      />
    ));
  }, [listProvince]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      {renderListCardInfo()}
    </Grid>
  );
};
