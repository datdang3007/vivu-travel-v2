import { Grid } from "@mui/material";
import { BlogContentProps } from "../../../types";
import { BreadCrumb } from "../../../ui/BreadCrumb/BreadCrumb";

export const BlogContent = (props: BlogContentProps) => {
  const { HeaderBreadCrumbList, children } = props;

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <BreadCrumb list={HeaderBreadCrumbList} />
      </Grid>
      {children}
    </Grid>
  );
};
