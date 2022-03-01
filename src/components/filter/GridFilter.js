import { GridItem, SimpleGrid } from "@chakra-ui/react";
import FilterButton from "./FilterButton";

export default function GridFilter({ arr, onChange, reload }) {
  return (
    <GridItem
      h="13rem"
      overflowX="hidden"
      overflowY="auto"
      bg="lightGreen"
      borderRadius="7px"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <FilterButton
              key={index}
              filter={filter}
              index={index}
              onChange={onChange}
              reload={reload}
            />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
