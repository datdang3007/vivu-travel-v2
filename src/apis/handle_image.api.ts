import { WEBHOOKS } from "./../constants/index";
import axios from "axios";

export const uploadImageToDiscord = async (
  formData: FormData
): Promise<any> => {
  const res = await axios.post(WEBHOOKS.UPLOAD_IMAGE, formData);
  return res?.data;
};
