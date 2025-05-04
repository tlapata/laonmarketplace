import { useState } from "react";
import { showToasts } from "utils/popup_alert";
import { showToast } from "utils/popup";

export interface Props {
  value: boolean;
  text: string;
  message: string;
}
export interface debounceProps {
  value: boolean;
  message: string;
  type?: string;
}

export const useClipBoard = () => {
  const [clicked, setClicked] = useState(false);
  const setClick = (data: Props) => {
    const { text, value, message } = data;
    navigator.clipboard.writeText(text);
    showToast(message);
    setClicked(value);
    setTimeout(() => {
      setClicked(!value);
    }, 5000);
  };
  return { setClick, clicked };
};

export const useDebouncing = (setAlert) => {
  const [clicked, setClicked] = useState(false);
  const setClick = (data: debounceProps) => {
    const { value, message, type } = data;
    setClicked(value);
    showToasts(message, type && type,setAlert);
    setTimeout(() => {
      setClicked(!value);
    }, 5000);
  };
  return { setClick, clicked };
};
