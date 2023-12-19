import http from "src/config/http";
import { IAuthUser, IPlace } from "src/interfaces";

export interface UpdatePlaceProps {
  id: string;
  data: IPlace;
}

const url = "user";
export const getUserByRoles = async (roles: string): Promise<IPlace[]> => {
  const res = await http.get(`${url}/find/byRole/${roles}`);
  return res.data;
};

export const getUserById = async (id: number): Promise<IAuthUser | null> => {
  const res = await http.get(`${url}/find/byId/${id}`);
  return res.data;
};
