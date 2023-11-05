import { ReactNode } from "react";
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

export interface FormTitleSearchProps {
  formTitleSearchValue: string;
  type?: string;
}

export interface BackgroundContentProps {
  height?: string | number;
  backgroundImg: string;
  isShowBottomImg?: boolean;
  isHomePage?: boolean;
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

export interface GroupCardTerritoryProps {
  listTerritory: CardTerritoryProps[];
}

export interface CardTerritoryProps {
  id: string | number;
  title: string;
  subTitle: string;
  src: string;
}

export interface GroupCardProvinceProps {
  listProvince: CardProvinceProps[];
}

export interface CardProvinceProps {
  id: string | number;
  title: string;
  src: string;
}

export interface BreadCrumbProps {
  icon?: ReactNode;
  title: string;
  onClick?: () => void;
}

export interface BreadCrumbComponentProps {
  list: BreadCrumbProps[];
}

export interface BlogContentProps {
  HeaderBreadCrumbList: BreadCrumbProps[];
  children?: ReactNode;
}

export interface ContentOverviewProps {
  title: string;
  image: string;
  content: string;
}

export interface ContentDetailProps {
  image: string;
  content: string;
}

export interface CardRecommendProps {
  title: string;
  rate: number;
  content: string;
  image?: string;
}

export interface ContentDataProps {
  id: string | number;
  type: number;
  content: string;
}

export interface PlaceImageStockProps {
  id: string | number;
  link: string;
}
