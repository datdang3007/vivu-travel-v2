import { IProvince } from "./province.interface";
import { ITerritory } from "./territory.interface";

export interface IRegion {
  id: number;
  name: string;
  slogan: string;
  image: string;
  overview: string;
  territoryList: ITerritory[];
  provinceList: IProvince[];
  created_at: string;
  updated_at: string;
  deleted_at: any;
}
