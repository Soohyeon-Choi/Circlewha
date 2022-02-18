import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";

export default function GridInterest({
  arr,
  num,
  interestQuery,
  setInterestQuery,
}) {
  const onClick = (filter, num) => {
    if (interestQuery) {
      if (interestQuery.includes(filter)) {
        setInterestQuery(interestQuery.filter((item) => item != filter));
      } else if (interestQuery.includes(num)) {
        setInterestQuery(interestQuery.filter((item) => item != num));
      } else {
        if (filter == "전체") {
          setInterestQuery(interestQuery.concat(num));
        } else {
          setInterestQuery(interestQuery.concat(filter));
        }
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
          arr.map((filter) => (
            <Button
              onClick={() => onClick(filter, num)}
              width="100%"
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
