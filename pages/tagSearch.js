import React from "react";
import TopBar from "../src/components/TopBar";
import Filter from "../src/components/filter/Filter";
import Card from "../src/components/Card";
import { Flex } from "@chakra-ui/react";

export default function Result() {
  return (
    <Flex flexDirection="column">
      <TopBar />
      <Flex justify="center">
        <Filter />
      </Flex>
      <Card />
    </Flex>
  );
}
