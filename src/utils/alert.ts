import { AlertCustomAutoCompleteProps, AlertErrorProps } from "../types/Alert";
import { createRoot } from "react-dom/client";
import Swal from "sweetalert2";

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

export const showAlertSuccess = (
  title?: string,
  html?: string,
  timer?: number
) => {
  return Swal.fire({
    title,
    html,
    icon: "success",
    showConfirmButton: false,
    timer: timer ?? 2000,
  });
};

export const showAlertError = (
  title?: string,
  html?: string,
  textClose?: string
) => {
  return Swal.fire({
    title,
    html,
    icon: "error",
    confirmButtonText: textClose ?? "Đóng",
    showConfirmButton: true,
  });
};
