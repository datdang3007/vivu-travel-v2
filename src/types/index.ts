import { ListOptionItemProps } from "./Ui";

export interface ListOptionProps {
  Left: ListOptionItemProps[];
  Right: ListOptionItemProps[];
}

export interface HeaderProps {
  isMenu: boolean;
}

export interface searchProps {
  searchValue: string;
}

export interface BackgroundContentProps {
  height?: string | number;
  backgroundImg: string,
  isShowBottomImg?: boolean;
  title: string;
  slogan?: string;
}

export interface CountryInfoProps {
  title: string;
  content: string;
  icon: string;
}

export interface GroupCardCountryInfoProps {
  ListCountryInfo: CountryInfoProps[];
}
