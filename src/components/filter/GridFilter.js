import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import CheckFilter from "./FilterButton";

export default function GridFilter({ arr, onChange }) {
  return (
    <GridItem
      rowSpan={7}
      bg="lightGreen"
      borderRadius="7px"
      h="13rem"
      overflowX="hidden"
      overflowY="auto"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <CheckFilter filter={filter} index={index} onChange={onChange} />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
