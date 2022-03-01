import { Box, Grid, Text, Flex } from "@chakra-ui/react";
import Card from "./Card";

export default function CardGrid({ inputData }) {
  return inputData && inputData.length == 0 ? (
    <Flex justify="center">
      <Text mt={5} mb={5} fontSize="1.2rem">
        검색 결과가 없습니다.
      </Text>
    </Flex>
  ) : (
    <Box>
      <Flex alignItems="center" mb={5}>
        <Text ml={3} fontSize="1.5rem" mr={3}>
          검색결과
        </Text>
        <Text color="darkGreen" fontSize="1.2rem">
          {" "}
          {inputData.length}개
        </Text>
      </Flex>{" "}
      <Flex justify="center">
        <Grid
          justifyItems="center"
          templateColumns={`repeat(3,1fr)`}
          px="10%"
          gap="20"
        >
          {inputData &&
            inputData.map((value, index) => <Card key={index} value={value} />)}
        </Grid>
      </Flex>
    </Box>
  );
}
