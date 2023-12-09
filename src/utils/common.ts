import { getAllCountries } from "./../apis/another.api";
import dayjs, { Dayjs } from "dayjs";
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

export const OptionsCountries = () => {
  return new Promise((resolve) => {
    getAllCountries()
      .then((res) => {
        const countryOptions = res.map((country: any) => {
          const {
            cca2,
            name: { common: country_name },
          } = country;
          return {
            code: cca2,
            country_name,
          };
        });
        resolve(countryOptions);
      })
      .catch((err) => {
        resolve(null);
      });
  });
};

export const CheckIsImageUrl = async (url: string) => {
  return new Promise((resolve) => {
    var img = new Image();
    img.src = url;

    img.onload = function () {
      resolve(true);
    };

    img.onerror = function () {
      resolve(false);
    };
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

// Hàm có chức năng lấy random <numElements> phần tử trong mảng <array>
// numElements là số phần tử cần lấy
export const getRandomElements = <T>(array: T[], numElements: number) => {
  if (numElements >= array.length) {
    return array;
  }
  const clonedArray = [...array];
  const randomElements: T[] = [];
  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length);
    randomElements.push(clonedArray.splice(randomIndex, 1)[0]);
  }
  return randomElements;
};

export const compareDateTime = (dateTime: string | number | Date) => {
  // Chuyển đổi chuỗi thời gian nhập vào thành đối tượng Date
  const inputDate = new Date(dateTime).getTime();

  // Lấy thời gian hiện tại
  const currentDate = new Date().getTime();

  // Tính thời gian chênh lệch
  const timeDifference = currentDate - inputDate;

  const milliseconds = timeDifference;
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return years + " năm";
  } else if (months > 0) {
    return months + " tháng";
  } else if (days > 0) {
    return days + " ngày";
  } else if (hours > 0) {
    return hours + " giờ";
  } else {
    return minutes < 1 ? "ít hơn 1 phút" : minutes + " phút";
  }
};

export const FormatDate = (date?: string | Dayjs | Date, format?: string) => {
  return date ? dayjs(date).format(format ?? "DD/MM/YYYY") : "";
};

export const ToDayFormatDate = () => {
  return dayjs().format("DD/MM/YYYY");
};
