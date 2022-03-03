
import SearchBar from "../src/components/SearchBar";
import CardGrid from "../src/components/CardGrid";
import React from "react";
import Mainbottom from "../src/components/Mainpagebottom";
import useSearchName from "../src/api/useSearchName";
import { Button,  Flex, Box, Spinner, Spacer } from "@chakra-ui/react";
import  { useRouter } from "next/router";

export default function TitleSearch() {
	const router = useRouter();
  const { title_search, data, isError, isLoading, title, handleChange } =
    useSearchName();
  if (isError) {
    return <Flex justify="center">오류가 발생했습니다.</Flex>;
  }
  return (
	  <>
	  <Button
        onClick={() => router.push("/")}

        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        메인페이지
      </Button>

<Button
        onClick={() => router.push("/tagSearch")}

        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        필터검색
      </Button>
      <Spacer />
    <Flex flexDirection="column">

      <Flex justify="center" align="center" direction="column">
        <Box mt={10} mb={10}>
          <SearchBar
            handleChange={handleChange}
            title_search={title_search}
            title={title}
          />
        </Box>

        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="darkGreen"
            size="xl"
          />
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
     <Box marginBottom="100">
      <Mainbottom  />
      </Box>
      
    </Flex>
	  </>
  );
}
