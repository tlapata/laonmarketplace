import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "state";
import useRefresh from "hooks/useRefresh";
import { shallowEqual, useSelector } from "react-redux";
import { LoanBuilderState, State } from "./types";
import { setLoanState } from "./loanBuilder";
import copy from "copy-to-clipboard";

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();
  useEffect(() => {}, [dispatch, slowRefresh]);
};
export interface UseClipboardOptions {
  /**
   * timeout delay (in ms) to switch back to initial state once copied.
   */
  timeout?: number;
  /**
   * Set the desired MIME type
   */
  format?: string;
}

export function useClipboard(
  text: string,
  optionsOrTimeout: number | UseClipboardOptions = {}
) {
  const [hasCopied, setHasCopied] = useState(false);

  const { timeout = 1500, ...copyOptions } =
    typeof optionsOrTimeout === "number"
      ? { timeout: optionsOrTimeout }
      : optionsOrTimeout;

  const onCopy = useCallback(() => {
    const didCopy = copy(text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false);
      }, timeout);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return { value: text, onCopy, hasCopied };
}

export const usePopup = () => {
  const { loanState } = useLoanData();
  const { message } = loanState;
  const { setLoanBuilderState } = useSetLoanState();
  const setPopup = useCallback(
    (msg) => {
      setLoanBuilderState({
        ...loanState,
        message: msg,
      });
      setTimeout(() => {
        setLoanBuilderState({
          ...loanState,
          message: null,
        });
      }, 10000);
    },
      // eslint-disable-next-line react-hooks/exhaustive-deps
    [message]
  );

  return { setPopup };
};

export const useModal = () => {
  const { setLoanBuilderState } = useSetLoanState();
  const { loanState } = useLoanData();
  const { alertData } = loanState;
  const { loanCreated } = loanState.queriesList;

  const setAlert = useCallback(
    (message,show,  type = "", loanId = 0) => {
      const data = {
        showModal: show,
        alertMessage: message,
        type: type,
        loanId: loanId,
      };
      if (type === "loanCreated") {
        setLoanBuilderState({
          ...loanState,
          queriesList: {
            ...loanState.queriesList,
            loanCreated: !loanCreated,
          },
          isLoader: false,
          alertData: data,
          collateralType: "",
        });
      } else {
        setLoanBuilderState({
          ...loanState,
          alertData: data,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [alertData, loanState]
  );

  return { setAlert };
};

//global loan State
export const useLoanData = () => {
  const data = useSelector(
    (state: State) => ({
      ...state.loanBuilder,
    }),
    shallowEqual
  );
  return data;
};
export const useSetLoanState = () => {
  const dispatch = useAppDispatch();
  const setLoanBuilderState = useCallback(async (loan: LoanBuilderState) => {
    dispatch(setLoanState(loan));
    // eslint-disable-next-line
  }, []);
  return { setLoanBuilderState };
};
