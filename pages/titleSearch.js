import TopBar from "../src/components/TopBar";
import SearchBar from "../src/components/SearchBar";
import CardGrid from "../src/components/CardGrid";
import React from "react";
import useSearchName from "../src/api/useSearchName";
import { Flex, Box, Spinner, Text } from "@chakra-ui/react";

export default function TitleSearch() {
  const { title_search, data, isError, isLoading, title, handleChange } =
    useSearchName();
  if (isError) {
    return <Flex justify="center">오류가 발생했습니다.</Flex>;
  }
  return (
    <>
      <TopBar />
      <Flex justify="center" align="center" direction="column">
        <Box mt={10} mb={10}>
          <SearchBar
            handleChange={handleChange}
            title_search={title_search}
            title={title}
          />
        </Box>

        {isLoading ? (
          <Spinner />
        ) : data ? (
          <Box minW="40rem" maxW="80rem">
            <Flex justify="center">
              <CardGrid inputData={data} />
            </Flex>
          </Box>
        ) : (
          ""
        )}
      </Flex>
    </>
  );
}
