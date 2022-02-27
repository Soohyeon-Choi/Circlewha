import {
  Box,
  Text,
  Flex,
  Spacer,
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
  var id = 1;
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

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }

  return detail.data ? (
    <>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay color="green" />
        <ModalContent>
          <ModalHeader> {detail.data[0].title}</ModalHeader>
          <ModalCloseButton
            borderRadius="3rem"
            backgroundColor="#3E603B"
            color="white"
          />
          <ModalBody>
            <Flex flexDirection="column">
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
              <Flex m={10} flexDirection="column">
                <Heading>{detail.data[0].title}</Heading>
                <hr />
                <Flex m={1}>
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    소속
                  </Text>
                  {belong().map((value, index) => (
                    <Flex ml={2} bgColor="middleGreen" alignItems="center">
                      <Text key={index}>{value}</Text>
                    </Flex>
                  ))}
                </Flex>
                <Flex m={1}>
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    분야
                  </Text>
                  {getField().map((value, index) => (
                    <Flex ml={2} bgColor="middleGreen" alignItems="center">
                      <Text key={index}>{value}</Text>
                    </Flex>
                  ))}
                </Flex>
                <Flex m={1}>
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    기타 조건
                  </Text>
                  {detail.data[0].etccond_detail == "없음" ? (
                    <Text ml={2}>x</Text>
                  ) : (
                    etcCond().map((value, index) => (
                      <Flex ml={2} bgColor="middleGreen" alignItems="center">
                        <Text key={index}>{value}</Text>
                      </Flex>
                    ))
                  )}
                </Flex>
                <Flex m={1}>
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    지원 조건
                  </Text>
                  <Text ml={2}>{detail.data[0].qual_detail}</Text>
                </Flex>
                <Flex m={1} alignItems="center">
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    필수 활동 기간
                  </Text>
                  <Text ml={2}>{detail.data[0].period_detail}</Text>
                </Flex>
                <Flex m={1} alignItems="center">
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    활동 시간
                  </Text>
                  <Text ml={2}>{detail.data[0].time}</Text>
                </Flex>
                <Flex m={1} alignItems="center">
                  <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                    모집 시기
                  </Text>
                  <Text ml={2}>{detail.data[0].when_detail}</Text>
                </Flex>
                <Flex m={1}>
                  <Text
                    mr={2}
                    fontSize="1.1rem"
                    fontWeight="bold"
                    color="darkGreen"
                    alignItems="center"
                  >
                    SNS
                  </Text>
                  {detail.data[0].link}
                </Flex>
              </Flex>
              <Text
                mr={2}
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
                alignItems="center"
              >
                활동 내용
              </Text>
              {detail.data[0].act_detail}
              <Text
                mr={2}
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
                alignItems="center"
              >
                활동 방식
              </Text>
              {detail.data[0].how}
              <Text
                mr={2}
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
                alignItems="center"
              >
                동아리 연혁
              </Text>
              {detail.data[0].history}
              <Text
                mr={2}
                fontSize="1.1rem"
                fontWeight="bold"
                color="darkGreen"
                alignItems="center"
              >
                기타 참고 사항
              </Text>
              {detail.data[0].etc_detail}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  ) : (
    ""
  );
}
