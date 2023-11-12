import http from "src/config/http";
import { IPlace } from "src/interfaces";

export interface UpdatePlaceProps {
  id: string;
  data: IPlace;
}

const url = "place";
export const getPlaceList = async (): Promise<IPlace[]> => {
  const res = await http.get(url);
  return res.data;
};

export const findPlaceByID = async (id: string) => {
  const res = await http.get(`${url}/relations/${id}`);
  return res.data;
};
