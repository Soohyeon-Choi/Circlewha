import { GridItem, Text } from "@chakra-ui/react";

export default function GridCard({ name, col }) {
  return (
    <GridItem colSpan={col} bg="#006540" borderRadius="7px">
      <Text fontweight="bold" color="white" textAlign="center">
        {name}
      </Text>
    </GridItem>
  );
}
