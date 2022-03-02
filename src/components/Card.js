import { Box, Text, Flex, Wrap, useDisclosure } from "@chakra-ui/react";
import Detail from "./Detail";

export default function Card({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const attribute = () => {
    var attri = value.tag_all;
    var attriArray = attri.split(",");
    for (var i = 0; i < attriArray.length; i++) {
      attriArray[i] = "#" + attriArray[i];
    }
    return attriArray;
  };

  return (
    <Box
      as="button"
      variant="ghost"
      display="flex"
      _focus={{ outline: "none" }}
      flexDirection="column"
      w="100%"
      h="100%"
    >
      <Flex justify="center" direction="column" align="center">
        <Detail
          onOpen={onOpen}
          onClose={onClose}
          isOpen={isOpen}
          id={value.id}
        />
        <Flex
          justify="center"
          alignItems="center"
          borderRadius="50%"
          borderWidth="0.3rem"
          borderColor="middleGreen"
          w="15rem"
          h="15rem"
          onClick={onOpen}
          textAlign="center"
          bgColor=""
          mb={3}
        >
          <Text fontWeight="bold" fontSize="2xl">
            {value && value.title}
          </Text>
        </Flex>

        <Wrap align="center" justify="center">
          {attribute().map((tag, index) => (
            <Box
              p={1}
              mr={2}
              mb={2}
              bgColor="hoverGreen"
              alignItems="center"
              key={index}
              borderRadius={5}
            >
              <Box>{tag}</Box>
            </Box>
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
}
