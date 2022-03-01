import React from "react";
import TopBar from "../src/components/TopBar";
import Filter from "../src/components/filter/Filter";
import Mainbottom from "../src/components/mainpagebottom";
import { Flex, Spacer } from "@chakra-ui/react";

export default function Result() {
  return (
    <Flex flexDirection="column">
      <TopBar />
      <Flex justify="center">
        <Filter />
      </Flex>
      <Mainbottom />
    </Flex>

  );
}
