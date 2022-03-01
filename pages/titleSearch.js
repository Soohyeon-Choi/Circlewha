import TopBar from "../src/components/TopBar";
import SearchBar from "../src/components/SearchBar";
import CardGrid from "../src/components/CardGrid";
import React from "react";
import useSearchName from "./api/useSearchName";
import { Flex, Box, Spinner, Text ,Spacer} from "@chakra-ui/react";

export default function TitleSearch() {
  const { title_search, data, isError, isLoading, title, handleChange } =
    useSearchName();

  return (
    <Flex direction="column" align="center" pos="relative" justify="center">
      <TopBar />
      
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
        <>
          <Text>검색결과: {data.length}개</Text> <CardGrid inputData={data} />
        </>
      ) : (
        ""
      )}
    </Flex>
  );
}
