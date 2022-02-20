import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import CheckFilter from "./FilterButton";

export default function GridFilter({ arr, onChange }) {
  return (
    <GridItem rowSpan={7} bg="#eaeeea" borderRadius="7px">
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <CheckFilter filter={filter} index={index} onChange={onChange} />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
