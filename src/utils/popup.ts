import { toast } from "react-toastify";

export const showToast = (message, type = "success") =>
  toast(message, {
    className: type !== "error" ? "successToast" : "errorToast",
    hideProgressBar: true,
  });
