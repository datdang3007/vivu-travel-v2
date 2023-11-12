import http from "src/config/http";
import { IRegion } from "src/interfaces";

export interface UpdateRegionProps {
  id: string;
  data: IRegion[];
}

const url = "region";
export const getRegionList = async (): Promise<IRegion[]> => {
  const res = await http.get(url);
  return res.data;
};

export const findRegionByID = async (id: string) => {
  const res = await http.get(`${url}/relations/${id}`);
  return res.data;
};
