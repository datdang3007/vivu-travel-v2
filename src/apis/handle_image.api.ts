import { WEBHOOKS } from "@/constants";
import { LoadImageProps } from "./requestTypes/handle_image.type";
import axios from "axios";

export const uploadImageToDiscord = async (
  formData: FormData
): Promise<any> => {
  const res = await axios.post(WEBHOOKS.UPLOAD_IMAGE, formData);
  return res?.data;
};
