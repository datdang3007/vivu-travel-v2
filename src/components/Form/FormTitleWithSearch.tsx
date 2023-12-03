import {
  Grid,
  IconButton,
  InputAdornment,
  InputLabelProps,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormTitleWithSearchOptions } from "../../types/Form";
import { useController } from "react-hook-form";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { COLOR_PALLETTE } from "../../constants/color";

type Props = FormTitleWithSearchOptions &
  InputLabelProps &
  TextFieldProps &
  UseControllerProps<FieldValues> & {
    onSearch?: () => void;
  };

export const FormTitleWithSearch = (props: Props) => {
  const {
    title,
    subtitle,
    titleColor,
    children,
    mt,
    mb,
    titleSpacing,
    isTitleCenter,
    name,
    control,
    rules,
    variant,
    onSearch,
    ...rest
  } = props;

  const { field } = useController({
    name,
    control,
    rules,
  });

  return (
    <Grid item container xs={12} mt={mt}>
      <Grid item container alignItems={"flex-end"} xs={12} mb={mb}>
        <Grid item xs={12} lg={6}>
          <Grid
            item
            container
            justifyContent={isTitleCenter ? "center" : "flex-start"}
            xs={12}
          >
            <Typography
              textAlign={isTitleCenter ? "center" : undefined}
              sx={{
                color: titleColor,
                fontSize: {
                  xs: 25,
                  sm: 30,
                  md: 35,
                },
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={isTitleCenter ? "center" : "flex-start"}
            xs={12}
          >
            <Grid item xs={11}>
              <Typography
                mt={titleSpacing}
                textAlign={isTitleCenter ? "center" : undefined}
                sx={{
                  fontSize: {
                    xs: 15,
                    sm: 18,
                    md: 20,
                  },
                }}
              >
                {subtitle}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent={"flex-end"} xs={12} lg={6}>
          <Grid
            item
            container
            flexDirection={"column"}
            xs={12}
            lg={6}
            sx={{
              mt: {
                xs: "40px",
                lg: 0,
              },
            }}
          >
            <SearchField
              variant="outlined"
              {...field}
              {...rest}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch?.();
                  e.preventDefault();
                }
              }}
              placeholder="Tìm kiếm..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={onSearch}
                      edge="end"
                      sx={{
                        "&:hover": {
                          color: COLOR_PALLETTE.BLACK,
                        },
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};

const SearchField = styled(TextField)(({ theme }) => ({
  margin: "0px",
  div: {
    input: {
      padding: "10px 0px 10px 16px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    margin: "0px 20px",
  },
}));
