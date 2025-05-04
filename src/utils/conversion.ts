import BigNumber from "bignumber.js";
import web3 from "web3";
const errorMessages = require('../config/errors/contract-errors.json')
export const reduceNumber = (amount, decimals = 6) => {
  return amount?.toString()?.split("-")[0]?.slice(0, decimals);
};

export const networkTokenFormatter = (amount, decimals = 3) => {
  return parseFloat(amount).toFixed(decimals);
};

export const toCommas = (amount, decimals = 6) => {
  const number = +amount?.toString()?.split(".")[0]?.slice(0, decimals);
  return number?.toLocaleString();
};
export const continuedValue = (amount) => {
  const number = +amount.toString().split(".")[0];
  return number.toString().length > 6 ? `${toCommas(number, 4)}...` : number;
};
export const decimalValues = (amount) => {
  const number = +amount?.toString().split(".")[0];
  return number.toLocaleString();
};

export const afterDecimals = (amount, decimals = 3) => {
  if (amount?.toString().includes(".")) {
    const afterdecimals = `.${amount
      .toString()
      .split(".")[1]
      .slice(0, decimals)}`;
    const beforedecimals = amount.toString().split(".")[0];
    const number = +beforedecimals.concat(afterdecimals);
    return number.toLocaleString();
  }
  return amount;
};

export const replaceCommas = (str) => {
  return str.replace(/,/g, "");
};

export const tooltipCommas = (number) => {
  return number?.toLocaleString();
};

export const walletAddressFormatter = (address) => {
  return `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
};

export const copyText = (text) => {
  return navigator.clipboard.writeText(text);
};

export const countDecimal = (num) => {
  var sep = String(23.32).match(/\D/)[0];
  var b = String(num).split(sep);
  return b[1] ? b[1].length : 0;
};

export const ConvertToExponential = (num, digits) => {
  if (!num) return 0;

  if (digits === 3 && countDecimal(num) <= 3) {
    return num;
  }
  if (num === 0) {
    return 0;
  } else {
    const symbols = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "Quadrillion" },
      { value: 1e18, symbol: "Quintillion" },
      { value: 1e21, symbol: "Sextillion" },
    ];
    const numToCheck = Math.abs(num);
    for (let i = symbols.length - 1; i >= 0; i--) {
      if (numToCheck >= symbols[i].value) {
        let value = num / symbols[i].value;
        let newNumber;
        if (value.toString().includes(".")) {
          newNumber = value.toString().split(".")[0];
        } else {
          newNumber = value.toFixed(digits);
        }
        return `${newNumber}${symbols[i].symbol}`;
      }
    }
    return num?.toExponential(digits);
  }
};

export const convertExp = (expNumber) => {
  let number = new BigNumber(expNumber);
  const result = number.toFixed();
  return result;
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const commaFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const decodeErrorMessage = (code) => {
  let codeString;
  const fnSelectorByteLength = 4;
  const dataOffsetByteLength = 32;
  const strLengthByteLength = 32;
  const strLengthStartPos =
    2 + (fnSelectorByteLength + dataOffsetByteLength) * 2;
  const strDataStartPos =
    2 + (fnSelectorByteLength + dataOffsetByteLength + strLengthByteLength) * 2;

  const strLengthHex = code
    .slice(strLengthStartPos)
    .slice(0, strLengthByteLength * 2);
  const strLengthInt = parseInt(`0x${strLengthHex}`, 16);
  const strDataEndPos = strDataStartPos + strLengthInt * 2;
  if (codeString === "0x") return "";
  codeString = `0x${code.slice(strDataStartPos, strDataEndPos)}`;

  // If the codeString is an odd number of characters, add a trailing 0
  if (codeString.length % 2 === 1) {
    codeString += "0";
  }
  const errorString = web3.utils.hexToUtf8(codeString);
  return errorString;
};
export const getMessageFrom = (messageKey: string) => {
  // Will be reverted later
  for (let key of Object.keys(errorMessages)) {
    if (key === messageKey)
    return errorMessages[key]
  }
  return messageKey;
};
