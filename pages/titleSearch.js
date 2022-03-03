import SearchBar from "../src/components/SearchBar";
import CardGrid from "../src/components/CardGrid";
import React from "react";
import logo from "../public/logo.svg";
import Mainbottom from "../src/components/Mainpagebottom";
import useSearchName from "../src/api/useSearchName";
import { Button, Flex, Image, Box, Spinner, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function TitleSearch() {
  const router = useRouter();
  const { title_search, data, isError, isLoading, title, handleChange } =
    useSearchName();
  if (isError) {
    return <Flex justify="center">오류가 발생했습니다.</Flex>;
  }
  return (
    <>
      <Flex alignItems="center">
        <Image
          onClick={() => router.push("/")}
          width="150px"
          height="80px"
          marginLeft="30px"
          src={logo.src}
        />
        <Spacer />
        <Button
          mr="30px"
          onClick={() => router.push("/tagSearch")}
          color="#3b5735"
          variant="flushed"
        >
          필터 검색
        </Button>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" minH="70vh">
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
      </Flex>
      <Box position="relative" bottom="0" w="100%">
        <Mainbottom />
      </Box>
    </>
  );
}
