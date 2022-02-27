import { GridItem, Grid, Text, Box, Flex, SimpleGrid } from "@chakra-ui/react";

export default function FilterName({ name, col }) {
  return (
    <GridItem
      margin='0'
      color="white"
      align="center"
      colSpan={col}
      bg="#3b5735"
      fontSize="1.2rem"
      borderRadius="7px"
    >
      <Flex justify="center">
        <Box>{name}</Box>
      </Flex>
    </GridItem>
  );
}
