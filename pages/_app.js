import * as React from "react";
import Fonts from "../src/style/Fonts";
import customTheme from "../src/style/theme";
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Component />
    </ChakraProvider>
  );
}
