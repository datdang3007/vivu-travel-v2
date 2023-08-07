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
  img: string;
  name: string;
  category: string;
}
