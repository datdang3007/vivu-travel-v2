import http from "src/config/http";
import { ITerritory } from "src/interfaces";

export interface UpdateTerritoryProps {
  id: string;
  data: ITerritory[];
}

const url = "territory";
export const getTerritoryList = async (): Promise<ITerritory[]> => {
  const res = await http.get(url);
  return res.data;
};

export const findTerritoryByID = async (id: string) => {
  const res = await http.get(`${url}/relations/${id}`);
  return res.data;
};
