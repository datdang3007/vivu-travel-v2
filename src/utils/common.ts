import { uploadImageToDiscord } from "src/apis/handle_image.api";

export const UploadFileToDiscordWebhook = (file: any) => {
  return new Promise((resolve) => {
    const formData = new FormData();
    formData.append("file", file);

    uploadImageToDiscord(formData)
      .then((res) => {
        if (res.attachments && res.attachments.length > 0) {
          const imageURL = res.attachments[0].url;
          resolve(imageURL);
        } else {
          console.error("Không có tệp tin đính kèm trả về từ Discord Webhook");
          resolve(null);
        }
      })
      .catch((err) => {
        console.error(err);
        resolve(null);
      });
  });
};

// Get Id from param url:
export const GetIdParams = (path: string) => {
  const splitPath = path.split("/");
  return splitPath.reverse()[0];
};

export const WaitForImageToLoad = async (url: string) => {
  return new Promise<string | null>((resolve) => {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      resolve(img.src);
    };
    img.onerror = function () {
      resolve(null);
    };
  });
};
