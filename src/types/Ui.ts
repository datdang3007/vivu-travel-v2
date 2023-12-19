import { SxProps } from "@mui/material";

export interface HeaderMenuOptionProps {
  position: string;
  listOption: ListOptionItemProps[];
}

export interface ListOptionItemProps {
  variant: string;
  title: string;
  event?: () => void;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  textColorHover?: string;
  textVariant?: string;
  padding?: string;
  borderRadius?: string;
}

export interface listMenuOptionProps {
  label: string;
  event: () => void;
}

export interface SearchListProps {
  id: string | number;
  image: string;
  name: string;
  category: string;
}

export interface BackgroundTextProps {
  title: string;
  slogan?: string;
  isHomePage?: boolean;
}

export interface BoxImageProps {
  src: string;
  alt?: string;
  borderRadius?: string;
  isHoverEffect?: boolean;
  isCursorPointer?: boolean;
}

export interface CardInfoActionProps {
  title: string;
  subTitle?: string;
  src: string;
  alt?: string;
  isCursorPointer?: boolean;
  isTitleCenter?: boolean;
  boxSxProp?: SxProps;
  onClick?: () => void;
}

export interface CardInfoActionSkeletonProps {
  isTitleCenter?: boolean;
  hasSubTitle?: boolean;
  boxSxProp?: SxProps;
}

export interface CardTravelTellerProps {
  id?: string | number;
  name: string;
  avatar?: string;
  from: string;
}
