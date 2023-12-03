import http from "src/config/http";
import { IPlace } from "src/interfaces";

export interface dataFilterPlaceRecommend {
  placeId: number;
  regionId: number;
  territoryId: number;
  provinceId: number;
  categoryIds: number[];
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

export const findPlaceByListID = async (ids: string) => {
  const res = await http.get(`${url}/findByList/place/${ids}`);
  return res.data;
};

export const filterPlaceRecommend = async (data: dataFilterPlaceRecommend) => {
  const res = await http.get(`${url}/filter/place/recommend`, {
    params: { ...data },
  });
  return res.data;
};
