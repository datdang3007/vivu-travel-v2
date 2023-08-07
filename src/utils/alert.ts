import Swal from "sweetalert2";
import { AlertSelectProps } from "../types/Alert";

export const AlertSelect = async (props: AlertSelectProps) => {
  const { title, options, placeholder, showCancelBtn } = props;
  return await Swal.fire({
    title: title,
    input: "select",
    inputOptions: options,
    inputPlaceholder: placeholder,
    showCancelButton: showCancelBtn,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (!value) resolve("giá trị không được xác định");
        resolve();
      });
    },
  });
};
