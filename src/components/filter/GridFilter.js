import { Button, Grid, SimpleGrid } from "@chakra-ui/react";
import FilterButton from "./FilterButton";

export default function GridFilter({ arr, onChange, reload }) {
  return (
    <Grid
      h="13rem"
      overflowX="hidden"
      overflowY="auto"
      rowSpan={5}
      bg="lightGreen"
      borderRadius="7px"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <FilterButton
              filter={filter}
              index={index}
              onChange={onChange}
              reload={reload}
            />
          ))}
      </SimpleGrid>
    </Grid>
  );
}
