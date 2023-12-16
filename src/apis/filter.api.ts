import http from "src/config/http";

const url = "filter";
export const filterAll = async (search: string) => {
  const res = await http.get(`${url}`, {
    params: { search },
  });
  return res.data;
};
