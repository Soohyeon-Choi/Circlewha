import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { SearchIcon, ViewIcon, leftIcon } from "@chakra-ui/icons";
import logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import { MdFilterListAlt } from "react-icons/md";

export default function TopBar({ position }) {
  const router = useRouter();

  return (
    <Flex
      color="white"
      w="100%"
      h="10%"
      position={position}
      px="5"
      py="5"
      border="2px"
      borderColor="#c6cdb5"
    >
      <Image src={logo.src} width="180px" height="50px" />

      <Button
   onClick={() => router.push("http://circlewha.ml:3060/titleSearch")}
        leftIcon={<SearchIcon />}
        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        타이틀 검색
      </Button>
      <Spacer />

      

      <Button
  onClick={() => router.push("http://circlewha.ml:3060/tagSearch")}
        leftIcon={<MdFilterListAlt size={20} />}
        color="#3b5735"
        variant="outline"
        border="2px"
        borderColor="#3b5735"
      >
        필터 검색
      </Button>
    </Flex>
  );
}

