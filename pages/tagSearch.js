import Filter from "../src/components/filter/Filter";
import Mainbottom from "../src/components/Mainpagebottom";
import { Flex, Spacer, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import logo from "../public/logo.svg";

export default function Result() {
  const router = useRouter();
  return (
    <>
      <Flex alignItems="center">
        <Image
          onClick={() => router.push("/")}
          width="150px"
          height="80px"
          marginLeft="30px"
          src={logo.src}
        />
        <Spacer />
        <Button
          mr="30px"
          onClick={() => router.push("/titleSearch")}
          color="#3b5735"
          variant="flushed"
          marginLeft="10px"
        >
          타이틀 검색
        </Button>
      </Flex>

      <Flex justify="center">
        <Filter />
      </Flex>
      <Mainbottom />
    </>
  );
}
