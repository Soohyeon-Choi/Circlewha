import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export default function GridInterest({
  arr,
  num,
  interestQuery,
  setInterestQuery,
}) {
  const onClick = (filter, num) => {
    if (interestQuery) {
      var filt = {
        id: num,
        topic: filter,
      };
      if (
        interestQuery.some((v) => v.topic === filt.topic && v.id === filt.id)
      ) {
        setInterestQuery(
          interestQuery.filter(
            (item) => item.topic != filt.topic || item.id != filt.id
          )
        );
      } else {
        setInterestQuery(interestQuery.concat(filt));
      }
    }
  };

  return (
    <GridItem
      rowSpan={7}
      bg="#eaeeea"
      borderRadius="7px"
      h="13rem"
      overflowX="hidden"
      overflowY="scroll"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <Button
              onClick={() => onClick(filter, num)}
              width="100%"
              padding="1rem"
              key={index}
              backgroundColor="#eaeeea"
            >
              {filter}
            </Button>
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
