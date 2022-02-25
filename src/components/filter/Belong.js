import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import CheckFilter from "./FilterButton";
import BelButton from "./BelButton";

export default function Belong({ arr, onChange, col, state }) {
  return (
    <GridItem
      h="20rem"
      overflowX="hidden"
      overflowY="auto"
      colSpan={col}
      rowSpan={7}
      bg="lightGreen"
      borderRadius="7px"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <BelButton
              onChange={onChange}
              filter={filter}
              index={index}
              state={state}
            />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
