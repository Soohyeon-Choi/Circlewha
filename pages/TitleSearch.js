import TopBar from "../src/components/TopBar";
import SearchBar from "../src/components/SearchBar";
import CardGrid from "../src/components/CardGrid";
import React from "react";
import useSearchName from "./api/useSearchName";
import { Flex, Box } from "@chakra-ui/react";

export default function TitleSearch() {
  const { title_search, data, isError, isLoading, handleChange } =
    useSearchName();

  return (
    <Flex direction="column" align="center" pos="relative" justify="center">
      <TopBar />
      <Box>
        <SearchBar handleChange={handleChange} title_search={title_search} />
      </Box>
      <CardGrid inputData={data} />
    </Flex>
  );
}
