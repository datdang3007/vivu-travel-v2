import { IPlace } from "./place.interface";
import { IProvince } from "./province.interface";
import { IRegion } from "./region.interface";

export interface ITerritory {
  id: number;
  name: string;
  slogan: string;
  image: string;
  overview: string;
  region: IRegion;
  provinceList: IProvince[];
  placeList: IPlace[];
  created_at: string;
  updated_at: string;
  deleted_at: any;
}
