import Swal from "sweetalert2";
import { AlertCustomAutoCompleteProps, AlertErrorProps } from "../types/Alert";
import { createRoot } from "react-dom/client";

export const AlertCustomAutoComplete = async (
  props: AlertCustomAutoCompleteProps
) => {
  const { title, html, showCancelBtn, showConfirmBtn } = props;
  const swalContainer = document.createElement("div");
  createRoot(swalContainer).render(html);
  return await Swal.fire({
    title: title,
    html: swalContainer,
    showCancelButton: showCancelBtn,
    showConfirmButton: showConfirmBtn,
  });
};

export const AlertError = async (props: AlertErrorProps) => {
  const { text, labelButtonConfirm } = props;
  return await Swal.fire({
    icon: "error",
    title: "Lỗi",
    text: text,
    confirmButtonText: labelButtonConfirm ?? "Ok",
  });
};
