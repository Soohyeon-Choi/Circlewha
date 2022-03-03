
import Filter from "../src/components/filter/Filter";
import Mainbottom from "../src/components/Mainpagebottom";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import  { useRouter } from "next/router";
export default function Result() {
 const router = useRouter();
	return (
    <Flex flexDirection="column">

<Button
        onClick={() => router.push("/")}

        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        메인페이지
      </Button>

<Button
        onClick={() => router.push("/titleSearch")}
      
        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        타이틀 검색
      </Button>
      <Spacer />


      <Flex justify="center">
        <Filter />
      </Flex>
      <Mainbottom />
    </Flex>

  );
}
