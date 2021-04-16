import { global } from "theme";

const globalStyles = global({
  body: {
    color: "$white",
    fontFamily: '"Poppins", sans-serif',
    margin: 0,
    overflow: "auto",
  },
  "::selection": {
    background: "$primary",
    opacity: 0.5,
  },
});

export default globalStyles;
