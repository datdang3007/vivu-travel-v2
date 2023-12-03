import axios from "axios";

export const getAllCountries = async (): Promise<any> => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return res?.data;
};
