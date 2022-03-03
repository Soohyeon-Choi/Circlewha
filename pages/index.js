import Mainbottom from "../src/components/Mainpagebottom";
import backgroundImage from "../public/backImage.svg";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { Button, Flex, Image, Box, Spacer } from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Flex alignItems="center">
        <Image
          onClick={() => router.push("/")}
          width="150px"
          height="80px"
          marginLeft="30px"
          marginRight="330px"
          src={logo.src}
        />
        <Spacer />
        <Flex alignItems="center">
          <Box>
            <Button
              onClick={() => router.push("/titleSearch")}
              color="#3b5735"
              variant="flushed"
            >
              타이틀 검색
            </Button>
            <Button
              onClick={() => router.push("/tagSearch")}
              marginLeft="10px"
              mr="30px"
              color="#3b5735"
              variant="flushed"
            >
              필터 검색
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Image w="100vw" h="75vh" objectFit="cover" src={backgroundImage.src} />
      <Mainbottom />
    </>
  );
}
