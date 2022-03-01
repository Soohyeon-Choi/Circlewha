import {
  Box,
  Text,
  Flex,
  Wrap,
  Spacer,
  Button,
  useDisclosure,
  Grid,
  GridItem,
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
      _focus="none"
      _hover="none"
      display="flex"
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
        <Box
          borderRadius="50%"
          borderWidth="0.3rem"
          borderColor="darkgreen"
          w="15rem"
          h="15rem"
          onClick={onOpen}
          textAlign="center"
          mb={3}
        >
          <Text fontWeight="bold" fontSize="2xl" padding="30">
            {value && value.title}
          </Text>
        </Box>

        <Wrap align="center" justify="center">
          {attribute().map((tag, index) => (
            <Box
              p={1}
              mr={2}
              mb={2}
              bgColor="hoverGreen"
              alignItems="center"
              borderRadius="10%"
            >
              <Box color="#006540" key={index}>
                {tag}
              </Box>
            </Box>
          ))}
        </Wrap>
      </Flex>
      {/* </Grid> */}
    </Box>
  );
}
