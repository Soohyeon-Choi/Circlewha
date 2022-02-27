import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import CheckFilter from "./FilterButton";
import BelButton from "./BelButton";
import { useEffect, useState } from "react";

export default function Belong({ arr, onChange, col, num, reload }) {
  const [checked, setChecked] = useState(-1);
  useEffect(() => {
    setChecked(-1);
  }, [reload]);
  return (
    <GridItem
      h="13rem"
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
              checked={checked}
              num={num}
              setChecked={setChecked}
              filter={filter}
              index={index}
              arr={arr}
            />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
