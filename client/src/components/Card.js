import { Box, Text, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Card({ value }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputData, setInputData] = useState([{
    id: '',
    title: '',
    tag_all: ''
  }])

  const [lastIdx, setLastIdx] = useState(0);

  useEffect(async () => {
    try {
      const res = await axios.post('/tagSearch')
      const _inputData = await res.data.map((rowData) => (
        setLastIdx(lastIdx + 1),
        {
          id: rowData.id,
          title: rowData.title,
          tag_all: rowData.tag_all
        })
      )
      setInputData(inputData.concat(_inputData));
      console.log('inputData :: ', inputData);
    } catch (e) {
      console.error(e.message)
    }
  }, [])

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
        backgroundColor="#fffecf"
        w="100%"
        h="100%"
        textAlign="center"
      >
            <Text fontWeight="bold" fontSize="4xl" mt="40%">
              {rowData[0].title}
            </Text>
      </Box>
      <Box borderRadius="10%" bgColor="#eaeeea">
        <Text color="#006540">attribute</Text>
      </Box>
    </Flex>
  );
}
