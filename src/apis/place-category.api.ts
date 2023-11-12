import http from "src/config/http";

const url = "place-category";

export const getPlaceCategoryList = async () => {
  const res = await http.get(url);
  return res.data;
};

export const findPlaceCategory = async (id: string | number) => {
  const res = await http.get(`${url}/findByPlaceID/${id}`);
  return res.data;
};
