import * as React from "react";
<<<<<<< HEAD
import Fonts from "../src/style/Fonts";
import customTheme from "../src/style/theme";
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
=======

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
>>>>>>> 606bb5b93d6315a8fee475de3ce01808dfc02aad

export default function App({ Component }) {
  // 2. Use at the root of your app
  return (
<<<<<<< HEAD
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Component />
    </ChakraProvider>
  );
}
=======
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
>>>>>>> 606bb5b93d6315a8fee475de3ce01808dfc02aad
