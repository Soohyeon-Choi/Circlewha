import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function GridFilter({ arr, onChange }) {
  return (
    <GridItem rowSpan={7} bg="#eaeeea" borderRadius="7px">
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <Button
              width="100%"
              key={index}
              onClick={() => onChange(index)}
              padding="1rem"
              backgroundColor="#eaeeea"
            >
              {filter}
            </Button>
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
