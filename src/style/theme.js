import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: "GmarketSansMedium",
    body: "GmarketSansMedium",
  },
  colors: {
    lightGreen: "#eaeeea",
    darkGreen: "#3b5735",
    hoverGreen: "#c6cdb5",
    middleGreen: "#9cb596",
  },
});

export default customTheme;
