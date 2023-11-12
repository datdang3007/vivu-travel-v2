import http from "src/config/http";

const url = "place-image";

export const findPlaceImageByPlaceID = async (id: string | number) => {
  const res = await http.get(`${url}/findByPlaceID/${id}`);
  return res.data;
};
