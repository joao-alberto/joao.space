import { createCss, StitchesCss } from "@stitches/react";

const SIZINGS = {
  1: "4px",
  2: "8px",
  3: "16px",
  4: "32px",
  5: "64px",
  6: "128px",
  7: "256px",
  8: "512px",
};

const config = createCss({
  theme: {
    colors: {
      black: "rgb(12, 12, 12)",
      white: "rgb(255, 255, 255)",
      primary: "rgba(255, 0, 173)",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "64px",
      9: "72px",
      10: "144px",
    },
    space: {
      ...SIZINGS,
    },
    sizes: {
      ...SIZINGS,
    },
  },
});

export type CSS = StitchesCss<typeof config>;
export const { getCssString, global, styled } = config;
