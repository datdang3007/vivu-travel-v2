import http from "src/config/http";
import { LOCAL_STORAGE } from "src/constants/local_storage";
import { IPost } from "src/interfaces/post.interface";

const url = "post";
export const getPostList = async (): Promise<IPost[]> => {
  const res = await http.get(url);
  return res.data;
};

export const findPostByStatus = async (status: number) => {
  const res = await http.get(`${url}/findByStatus/${status}`);
  return res.data;
};

export const findPostByID = async (id: string) => {
  const res = await http.get(`${url}/relations/${id}`);
  return res.data;
};

export const createPost = async (data: IPost) => {
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
