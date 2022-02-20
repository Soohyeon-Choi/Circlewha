import { GridItem, Text } from "@chakra-ui/react";

export default function FilterName({ name, col }) {
  return (
    <GridItem colSpan={col} bg="#3b5735" borderRadius="7px">
      <Text color="white" textAlign="center">
        {name}
      </Text>
    </GridItem>
  );
}
