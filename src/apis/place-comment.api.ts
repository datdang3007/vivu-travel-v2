import http from "src/config/http";
import { LOCAL_STORAGE } from "src/constants/local_storage";
import { ICreatePlaceComment } from "src/interfaces/place-comment.interface";

const url = "place-comment";
export const createPlaceComment = async (data: ICreatePlaceComment) => {
  const token = localStorage.getItem(LOCAL_STORAGE.AccessToken);
  if (!token) {
    return null;
  }
  const res = await http.post(
    url,
    {
      ...data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const findPlaceCommentByPlaceId = async (id: string | number) => {
  const res = await http.get(`${url}/findByPlace/${id}`);
  return res.data;
};
