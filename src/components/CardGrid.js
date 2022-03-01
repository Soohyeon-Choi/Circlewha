import { Box, Grid, Text } from "@chakra-ui/react";
import Card from "./Card";
import { inputData } from "./filter/Filter";

export default function CardGrid({ inputData }) {
  return inputData && inputData.length == 0 ? (
    <Text>검색결과가 없습니다.</Text>
  ) : (
    <>
      <Grid
        justifyItems="center"
        templateColumns={`repeat(3,1fr)`}
        px="10%"
        gap="20"
      >
        {inputData &&
          inputData.map((value, index) => <Card key={index} value={value} />)}
      </Grid>
    </>
  );
}
