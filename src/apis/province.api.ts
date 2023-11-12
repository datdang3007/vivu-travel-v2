import http from "src/config/http";
import { IProvince } from "src/interfaces";

export interface UpdateProvinceProps {
  id: string;
  data: IProvince;
}

const url = "province";
export const getProvinceList = async (): Promise<IProvince[]> => {
  const res = await http.get(url);
  return res.data;
};

export const findProvinceByID = async (id: string) => {
  const res = await http.get(`${url}/relations/${id}`);
  return res.data;
};
