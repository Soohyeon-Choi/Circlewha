import { GridItem, Text } from "@chakra-ui/react";

export default function FilterName({ name, col }) {
  return (
    <GridItem colSpan={col} bg="#006540" borderRadius="7px">
      <Text color="white" textAlign="center">
        {name}
      </Text>
    </GridItem>
  );
}
