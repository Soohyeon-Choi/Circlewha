import {
  Box,
  Text,
  Flex,
  Wrap,
  Spinner,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import useDetail from "../api/useDetail";

export default function Detail({ isOpen, onClose, id }) {
  const { detail, isError, isLoading } = useDetail(id);

  const getField = () => {
    var str = detail && detail.interest_detail;
    if (str) {
      var interest = str.split(",");
      var str2 = detail && detail.exinfo_detail;
      for (var i = 0; i < interest.length; i++) {
        interest[i] = "#" + interest[i];
      }
      var str2 = detail && detail.exinfo_detail;
      var exinfo = str2.split(",");
      var field = interest.concat(exinfo);
      field = field.filter((element) => element !== "#");
      field = field.filter((element) => element !== "");

      return field;
    }
  };

  const belong = () => {
    var bel;
    detail.belong_detail ? (bel = detail.belong_detail) : (bel = "");

    var belArray = bel.split(",");
    for (var i = 0; i < belArray.length; i++) {
      belArray[i] = "#" + belArray[i];
    }
    return belArray;
  };

  const etcCond = () => {
    var etcstr = detail && detail.etccond_detail;
    if (etcstr) {
      var cond = etcstr.split(",");

      for (var i = 0; i < cond.length; i++) {
        cond[i] = "#" + cond[i];
      }
    } else {
      cond = [];
    }
    return cond;
  };

  if (detail) {
    return (
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
              {isError ? (
                <Flex justify="center">오류가 발생했습니다.</Flex>
              ) : (
                ""
              )}
              {isLoading ? (
                <Flex justify="center">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="darkGreen"
                    size="xl"
                  />
                </Flex>
              ) : (
                ""
              )}
              <Heading mt={10} mb={2}>
                {detail.title}
              </Heading>
              <hr />
              <hr />
              <Flex justify="center" mt={5} mb={10}>
                {detail.logo == "정보없음" ? (
                  <Flex
                    justify="center"
                    alignItems="center"
                    borderRadius="50%"
                    w="20rem"
                    h="20rem"
                    borderWidth="0.3rem"
                    borderColor="#006540"
                    backgroundColor="#fffecf"
                    textAlign="center"
                  >
                    <Text fontWeight="bold" fontSize="4xl">
                      {detail.title}
                    </Text>
                  </Flex>
                ) : (
                  <Image
                    w="20rem"
                    h="20rem"
                    borderRadius="50%"
                    src={detail.logo}
                  />
                )}
              </Flex>

              <Flex mr={4} direction="column">
                <Flex>
                  <Text
                    m={1}
                    w="6rem"
                    mb={2}
                    fontSize="1.1rem"
                    fontWeight="bold"
                    color="darkGreen"
                  >
                    소속
                  </Text>
                  <Wrap>
                    {belong() &&
                      belong().map((value, index) => (
                        <Box
                          borderRadius={5}
                          p={1}
                          mr={2}
                          mb={2}
                          bgColor="hoverGreen"
                          alignItems="center"
                        >
                          <Text key={index}>{value}</Text>
                        </Box>
                      ))}
                  </Wrap>
                </Flex>
                <Flex>
                  <Text
                    m={1}
                    w="6rem"
                    mb={2}
                    fontSize="1.1rem"
                    fontWeight="bold"
                    color="darkGreen"
                  >
                    분야
                  </Text>
                  <Wrap>
                    {getField()
                      ? getField().map((value, index) => (
                          <Box
                            borderRadius={5}
                            p={1}
                            mr={2}
                            mb={2}
                            bgColor="hoverGreen"
                            alignItems="center"
                          >
                            <Text key={index}>{value}</Text>
                          </Box>
                        ))
                      : ""}
                  </Wrap>
                </Flex>
                <Flex>
                  <Text
                    m={1}
                    w="6rem"
                    mb={2}
                    fontSize="1.1rem"
                    fontWeight="bold"
                    color="darkGreen"
                  >
                    기타 조건
                  </Text>
                  <Flex>
                    {detail.etccond_detail == "없음" ? (
                      <Text m={1} ml={3}>
                        x
                      </Text>
                    ) : (
                      etcCond().map((value, index) => (
                        <Box
                          borderRadius={5}
                          p={1}
                          mr={2}
                          mb={2}
                          bgColor="hoverGreen"
                          alignItems="center"
                        >
                          <Text key={index}>{value}</Text>
                        </Box>
                      ))
                    )}
                  </Flex>
                </Flex>
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
                <Text ml={3}>
                  {detail.qual_detail ? detail.qual_detail : ""}
                </Text>
              </Flex>
              <Flex m={1} mb={2} alignItems="center">
                <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                  필수 활동 기간
                </Text>
                <Text ml={3}>{detail.period_detail}</Text>
              </Flex>
              <Flex m={1} mb={2} alignItems="center">
                <Text
                  minW="5rem"
                  fontSize="1.1rem"
                  fontWeight="bold"
                  color="darkGreen"
                >
                  활동 시간
                </Text>
                <Text ml={3}>{detail.time}</Text>
              </Flex>
              <Flex m={1} mb={2} alignItems="center">
                <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                  모집 시기
                </Text>
                <Text ml={3}>{detail.when_detail}</Text>
              </Flex>

              <Flex m={1} mb={2} alignItems="center">
                <Text fontSize="1.1rem" fontWeight="bold" color="darkGreen">
                  SNS
                </Text>
                <Text maxW="30rem" ml={3}>
                  {detail.link}
                </Text>
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
              <Text m={1}>{detail.act_detail}</Text>
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
              <Text m={1}>{detail.how}</Text>
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
              <Text m={1}>{detail.history ? detail.history : "x"}</Text>
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
                {detail.etc_detail ? detail.etc_detail : "x"}
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
}
