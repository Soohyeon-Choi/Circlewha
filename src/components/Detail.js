import {
  Box,
  Text,
  Flex,
  Spacer,
  Spinner,
  Heading,
  Image,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import useDetail from "../../pages/api/useDetail";

export default function Detail({ isOpen, onOpen, onClose, id }) {
  const { detail, isError, isLoading } = useDetail(id);

  const getField = () => {
    var str = detail.data[0].interest_detail;
    var str2 = detail.data[0].exinfo_detail;
    var interest = str.split(",");
    for (var i = 0; i < interest.length; i++) {
      interest[i] = "#" + interest[i];
    }
    var exinfo = str2.split(",");
    var field = interest.concat(exinfo);
    return field;
  };

  const belong = () => {
    var bel = detail.data[0].belong_detail;
    var belArray = bel.split(",");
    for (var i = 0; i < belArray.length; i++) {
      belArray[i] = "#" + belArray[i];
    }
    return belArray;
  };

  const etcCond = () => {
    var etcstr = detail.data[0].etccond_detail;

    var cond = etcstr.split(",");
    for (var i = 0; i < cond.length; i++) {
      cond[i] = "#" + cond[i];
    }
    return cond;
  };

  if (isLoading) {
    return (
      <Flex justify="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return detail.data ? (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay color="#3b5735" />
        <ModalContent>
          <ModalCloseButton
            borderRadius="3rem"
            backgroundColor="darkGreen"
            color="white"
          />
          <ModalBody>
            <Heading mt={10} mb={2}>
              {detail.data[0].title}
            </Heading>
            <hr />
            <hr />
            <Flex justify="center" mt={5} mb={10}>
              {detail.data[0].logo == "정보없음" ? (
                <Box
                  borderRadius="50%"
                  w="20rem"
                  h="20rem"
                  borderWidth="0.3rem"
                  borderColor="#006540"
                  backgroundColor="#fffecf"
                  textAlign="center"
                >
                  <Text fontWeight="bold" fontSize="4xl" mt="40%">
                    {detail.data[0].title}
                  </Text>
                </Box>
              ) : (
                <Image
                  w="20rem"
                  h="20rem"
                  borderRadius="50%"
                  src={detail.data[0].logo}
                />
              )}
            </Flex>

            <Flex m={1}>
              <Flex mr={4} direction="column">
                <Text
                  mb={2}
                  fontSize="1.1rem"
                  fontWeight="bold"
                  color="darkGreen"
                >
                  소속
                </Text>
                <Text
                  mb={2}
                  fontSize="1.1rem"
                  fontWeight="bold"
                  color="darkGreen"
                >
                  분야
                </Text>
                <Text
                  mb={2}
                  fontSize="1.1rem"
                  fontWeight="bold"
                  color="darkGreen"
                >
                  기타 조건
                </Text>
              </Flex>
              <Box m={1}>
                <Flex>
                  {belong().map((value, index) => (
                    <Box
                      mr={2}
                      mb={2}
                      bgColor="middleGreen"
                      alignItems="center"
                    >
                      <Text key={index}>{value}</Text>
                    </Box>
                  ))}
                </Flex>
                <Flex>
                  {getField().map((value, index) => (
                    <Flex
                      mr={2}
                      mb={2}
                      bgColor="middleGreen"
                      alignItems="center"
                    >
                      <Text key={index}>{value}</Text>
                    </Flex>
                  ))}
                </Flex>
                <Flex>
                  {detail.data[0].etccond_detail == "없음" ? (
                    <Text ml={3}>x</Text>
                  ) : (
                    etcCond().map((value, index) => (
                      <Flex mr={2} bgColor="middleGreen" alignItems="center">
                        <Text key={index}>{value}</Text>
                      </Flex>
                    ))
                  )}
                </Flex>
              </Box>
            </Flex>
            <Flex m={1} mb={2}>
              <Text
                minW="5rem"
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
              >
                지원 조건
              </Text>
              <Text ml={3}>{detail.data[0].qual_detail}</Text>
            </Flex>
            <Flex m={1} mb={2} alignItems="center">
              <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                필수 활동 기간
              </Text>
              <Text ml={3}>{detail.data[0].period_detail}</Text>
            </Flex>
            <Flex m={1} mb={2} alignItems="center">
              <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                활동 시간
              </Text>
              <Text ml={3}>{detail.data[0].time}</Text>
            </Flex>
            <Flex m={1} mb={2} alignItems="center">
              <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                모집 시기
              </Text>
              <Text ml={3}>{detail.data[0].when_detail}</Text>
            </Flex>

            <Flex m={1}>
              <Text
                mr={3}
                mb={2}
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
                alignItems="center"
              >
                SNS
              </Text>
              {detail.data[0].link}
            </Flex>

            <Text
              m={1}
              mt={7}
              fontSize="1.1rem"
              fontWeight="bold"
              color="darkGreen"
              alignItems="center"
            >
              활동 내용
            </Text>
            <Text m={1}>{detail.data[0].act_detail}</Text>
            <Text
              m={1}
              mt={7}
              fontSize="1.1rem"
              fontWeight="bold"
              color="darkGreen"
              alignItems="center"
            >
              활동 방식
            </Text>
            <Text m={1}>{detail.data[0].how}</Text>
            <Text
              m={1}
              mt={7}
              fontSize="1.1rem"
              fontWeight="bold"
              color="darkGreen"
              alignItems="center"
            >
              동아리 연혁
            </Text>
            <Text m={1}>{detail.data[0].history}</Text>
            <Text
              m={1}
              mt={7}
              fontSize="1.1rem"
              fontWeight="bold"
              color="darkGreen"
              alignItems="center"
            >
              기타 참고 사항
            </Text>
            <Text m={1} mb={10}>
              {detail.data[0].etc_detail}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ) : (
    ""
  );
}
