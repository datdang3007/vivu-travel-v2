import { Box, Container, Grid, styled, useTheme } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallAPIFilter } from "src/hooks";
import {
  BUTTON_VARIANT,
  HEADER_LIST_OPTION,
  HEADER_OPTIONS,
  STYLE_POSITION,
} from "../../constants";
import { COLOR_PALLETTE } from "../../constants/color";
import { PATH } from "../../routes/path";
import {
  HeaderProps,
  ListOptionProps,
  OptionLeftProps,
  searchProps,
} from "../../types";
import {
  HeaderMenuNavbar,
  HeaderMenuOption,
  HeaderMenuSearch,
  HeaderUserProfile,
} from "../../ui";

const listTransitionButtonComponent = [PATH.HOME, PATH.REGION, PATH.TERRITORY];
export const Header = (props: HeaderProps) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { requestFilterAll, loadingForFilterAll } = useCallAPIFilter();
  const [resultFilter, setResultFilter] = useState<any[] | undefined>([]);
  const { isMenu, user } = props;

  const isTransitionButton = useMemo(
    () => listTransitionButtonComponent.includes(location.pathname),
    [location]
  );

  const transitionTextColor = useMemo(
    () => (isTransitionButton ? COLOR_PALLETTE.PRIMARY : undefined),
    [isTransitionButton]
  );

  const changeDirection = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const methods = useForm<searchProps>({
    defaultValues: { searchValue: "" },
  });

  const { watch } = methods;
  const { searchValue: search } = watch();

  const onClickOption = useCallback(
    (option: string) => {
      switch (option) {
        case HEADER_OPTIONS.REGION: {
          document
            .getElementById("section-region")
            ?.scrollIntoView({ behavior: "auto" });
          return;
        }
        case HEADER_OPTIONS.TERRITORY: {
          document
            .getElementById("section-territory")
            ?.scrollIntoView({ behavior: "auto" });
          return;
        }
        case HEADER_OPTIONS.SCROLL_TO_POST: {
          document
            .getElementById("section-posts")
            ?.scrollIntoView({ behavior: "auto" });
          return;
        }
        case HEADER_OPTIONS.POSTS: {
          navigate(PATH.POSTS);
          return;
        }
        case HEADER_OPTIONS.LOGIN: {
          navigate(PATH.LOGIN);
          return;
        }
        case HEADER_OPTIONS.REGISTER: {
          navigate(PATH.REGISTER);
          return;
        }
        case HEADER_OPTIONS.DIRECTIONS_SERVICE: {
          navigate(PATH.DIRECTIONS_SERVICE);
          return;
        }
        default: {
          navigate(PATH.HOME);
          return;
        }
      }
    },
    [navigate]
  );

  const optionLeft: OptionLeftProps[] = useMemo(() => {
    const pathname = location.pathname;
    if (pathname === PATH.HOME) {
      return [
        { title: "Miền", event: () => onClickOption(HEADER_OPTIONS.REGION) },
        { title: "Vùng", event: () => onClickOption(HEADER_OPTIONS.TERRITORY) },
        {
          title: "Bài viết",
          event: () => onClickOption(HEADER_OPTIONS.SCROLL_TO_POST),
        },
        {
          title: "Lịch trình",
          event: () => onClickOption(HEADER_OPTIONS.DIRECTIONS_SERVICE),
        },
      ];
    }
    if (pathname === PATH.DIRECTIONS_SERVICE) {
      return [
        { title: "Trang chủ", event: () => onClickOption(HEADER_OPTIONS.HOME) },
        { title: "Bài viết", event: () => onClickOption(HEADER_OPTIONS.POSTS) },
      ];
    }
    return [
      { title: "Trang chủ", event: () => onClickOption(HEADER_OPTIONS.HOME) },
      { title: "Bài viết", event: () => onClickOption(HEADER_OPTIONS.POSTS) },
      {
        title: "Lịch trình",
        event: () => onClickOption(HEADER_OPTIONS.DIRECTIONS_SERVICE),
      },
    ];
  }, [location, onClickOption]);

  const ListOption = useMemo(() => {
    const options: ListOptionProps = {
      [HEADER_LIST_OPTION.LEFT]: [],
      [HEADER_LIST_OPTION.RIGHT]: [],
    };

    options[HEADER_LIST_OPTION.LEFT] = optionLeft.map((option) => {
      const { title, event } = option;
      return {
        title,
        event,
        textVariant: "tB18",
        padding: "2px 18px",
        variant: BUTTON_VARIANT.TEXT,
        textColorHover: transitionTextColor,
        textColor: theme.palette.common.white,
      };
    });

    options[HEADER_LIST_OPTION.RIGHT] = [
      {
        variant: BUTTON_VARIANT.TEXT,
        title: "Đăng Ký",
        event: () => changeDirection(PATH.REGISTER),
        textVariant: "tB16",
        padding: "2px 18px",
        textColor: theme.palette.common.white,
        textColorHover: transitionTextColor,
      },
      {
        variant: BUTTON_VARIANT.CONTAINED,
        title: "Đăng Nhập",
        event: () => changeDirection(PATH.LOGIN),
        textVariant: "tB16",
        borderRadius: "15px",
        padding: "2px 18px",
        color: theme.palette.common.white,
        hoverColor: isTransitionButton
          ? COLOR_PALLETTE.PRIMARY
          : theme.palette.common.white,
        textColor: "black",
        textColorHover: isTransitionButton
          ? theme.palette.common.white
          : undefined,
      },
    ];

    return options;
  }, [
    theme,
    optionLeft,
    changeDirection,
    isTransitionButton,
    transitionTextColor,
  ]);

  useEffect(() => {
    if (loadingForFilterAll) setResultFilter(undefined);
    requestFilterAll(search).then((res) => setResultFilter(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestFilterAll, search]);

  return (
    <FormProvider {...methods}>
      <Grid component={"form"}>
        <HeaderContainer sx={{ position: isMenu ? "fixed" : "absolute" }}>
          {isMenu ? (
            <Grid item xs={12}>
              <HeaderMenuNavbar
                onClickOption={onClickOption}
                options={resultFilter}
              />
            </Grid>
          ) : (
            <Container
              maxWidth={"xl"}
              sx={{
                padding: "15px 0",
                [theme.breakpoints.down("xl")]: {
                  padding: "15px 30px",
                },
              }}
            >
              <Grid
                item
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                xs={12}
              >
                <Grid item lg={3.5}>
                  <HeaderMenuOption
                    position={STYLE_POSITION.LEFT}
                    listOption={ListOption[HEADER_LIST_OPTION.LEFT]}
                  />
                </Grid>
                <Grid item lg={4}>
                  <HeaderMenuSearch options={resultFilter} methods={methods} />
                </Grid>
                <Grid item lg={3.5}>
                  {user ? (
                    <HeaderUserProfile user={user} />
                  ) : (
                    <HeaderMenuOption
                      position={STYLE_POSITION.RIGHT}
                      listOption={ListOption[HEADER_LIST_OPTION.RIGHT]}
                    />
                  )}
                </Grid>
              </Grid>
            </Container>
          )}
        </HeaderContainer>
      </Grid>
    </FormProvider>
  );
};

const HeaderContainer = styled(Box)({
  zIndex: 999,
  width: "100%",
  top: 0,
  left: 0,
});
