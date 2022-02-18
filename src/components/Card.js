import { Box, Text, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export default function Card({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="button"
      variant="ghost"
      _focus="none"
      _hover="none"
      display="flex"
      flexDirection="column"
      w="20rem"
      h="20rem"
    >
      <Box
        borderRadius="50%"
        borderWidth="0.3rem"
        borderColor="#006540"
        w="100%"
        h="100%"
        textAlign="center"
      >
        <Text fontWeight="bold" fontSize="4xl" mt="40%">
          title
        </Text>
      </Box>
      <Box borderRadius="10%" bgColor="#eaeeea">
        <Text color="#006540">attribute</Text>
      </Box>
    </Flex>
  );
}
