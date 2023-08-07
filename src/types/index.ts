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