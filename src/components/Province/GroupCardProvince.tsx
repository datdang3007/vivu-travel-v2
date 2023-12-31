import { Grid } from "@mui/material";
import { CardInfoAction } from "../../ui";
import { GroupCardProvinceProps } from "../../types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/routes/path";

export const GroupCardProvince = (props: GroupCardProvinceProps) => {
  const navigate = useNavigate();
  const { listProvince } = props;

  const handleNavigateToDetailPage = useCallback(
    (id: string | number) => {
      navigate(`${PATH.PROVINCE}/${id}`);
    },
    [navigate]
  );

  const renderListCardInfo = useCallback(() => {
    return listProvince?.map((val) => (
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
        onClick={() => handleNavigateToDetailPage(val.id)}
        isCursorPointer
        title={val.title}
        src={val.src}
      />
    ));
  }, [handleNavigateToDetailPage, listProvince]);

  return (
    <Grid item container alignItems={"center"} xs={12}>
      {renderListCardInfo()}
    </Grid>
  );
};
