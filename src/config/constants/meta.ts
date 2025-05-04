import { PageMeta } from "./types";

export const DEFAULT_META: PageMeta = {
  title: "Loan Market",
  description: "Unlock Potential",
  image:
    "https://cryptomotoapp.com/favicon.ico",
};

export const customMeta: { [key: string]: PageMeta } = {
  "/": {
    title: "Home",
  },
};
