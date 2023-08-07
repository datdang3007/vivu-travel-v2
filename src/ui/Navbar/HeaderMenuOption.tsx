import React, { useCallback, useMemo } from "react";
import { HeaderMenuOptionProps } from "../../types/Ui";
import { STYLE_POSITION } from "../../constants";
import {
  Button,
  ButtonTypeMap,
  Grid,
  Typography,
  TypographyTypeMap,
} from "@mui/material";

const stylePositionList: { [key: string]: React.CSSProperties } = {
  [STYLE_POSITION.LEFT]: { justifyContent: "flex-start" },
  [STYLE_POSITION.RIGHT]: { justifyContent: "flex-end" },
};

export const HeaderMenuOption = (props: HeaderMenuOptionProps) => {
  const { position, listOption } = props;

  const stylePosition = useMemo(() => {
    return stylePositionList[position];
  }, [position]);

  const listButtonComponent = useCallback(() => {
    return listOption.map((val, idx) => {
      return (
        <Button
          key={idx}
          variant={val.variant as ButtonTypeMap["props"]["variant"]}
          onClick={val.event}
          sx={{
            borderRadius: val.borderRadius,
            padding: val.padding,
            background: val.color,
            color: val.textColor,
            "&:hover": {
              background: `${val.hoverColor} !important`,
              span: {
                color: `${val.textColorHover} !important`,
              },
              p: {
                color: `${val.textColorHover} !important`,
              },
            },
          }}
        >
          <Typography
            variant={val.textVariant as TypographyTypeMap["props"]["variant"]}
          >
            {val.title}
          </Typography>
        </Button>
      );
    });
  }, [listOption]);

  return (
    <Grid item container xs={12} sx={{ ...stylePosition }}>
      {listButtonComponent()}
    </Grid>
  );
};
