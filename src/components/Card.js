import {
  Box,
  Text,
  Flex,
  Spacer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import useDetail from "../../pages/api/useDetail";

export default function Card({ value }) {
  var id = 47;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [inputData, setInputData] = useState([
  //   {
  //     id: "",
  //     title: "",
  //     tag_all: "",
  //   },
  // ]);

  // const [lastIdx, setLastIdx] = useState(0);

  // useEffect(async () => {
  //   try {
  //     const res = await axios.post("/tagSearch");
  //     const _inputData = await res.data.map(
  //       (rowData) => (
  //         setLastIdx(lastIdx + 1),
  //         {
  //           id: rowData.id,
  //           title: rowData.title,
  //           tag_all: rowData.tag_all,
  //         }
  //       )
  //     );
  //     setInputData(inputData.concat(_inputData));
  //     console.log("inputData :: ", inputData);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // }, []);

  const [inputData, setInputData] = useState([]);

  const attribute = () => {
    var attri = inputData.tag_all;
    var attriArray = attri.split(",");
    for (var i = 0; i < attriArray.length; i++) {
      attriArray[i] = "#" + attriArray[i];
    }
    return attriArray;
  };

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
        onClick={onOpen}
        textAlign="center"
      >
        <Text fontWeight="bold" fontSize="4xl" mt="40%">
          title
        </Text>
        <Detail onOpen={onOpen} onClose={onClose} isOpen={isOpen} id={id} />
        <Text fontWeight="bold" fontSize="4xl" mt="40%">
          {value}
        </Text>
      </Box>

      {attribute().map((value, index) => (
        <Flex
          ml={2}
          bgColor="middleGreen"
          alignItems="center"
          borderRadius="10%"
        >
          <Text color="#006540" key={index}>
            {value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
