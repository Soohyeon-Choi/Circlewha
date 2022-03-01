import { GridItem, SimpleGrid } from "@chakra-ui/react";
import InterestButton from "./InterestButton";

export default function GridInterest({
  arr,
  num,
  interestQuery,
  setInterestQuery,
  reload,
}) {
  const addInterest = (filter, num) => {
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
      overflowY="auto"
    >
      <SimpleGrid column={1}>
        {arr &&
          arr.map((filter, index) => (
            <InterestButton
              key={index}
              filter={filter}
              index={index}
              reload={reload}
              num={num}
              addInterest={addInterest}
            />
          ))}
      </SimpleGrid>
    </GridItem>
  );
}
