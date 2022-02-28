import { Flex, Image, Button, Spacer, Link } from "@chakra-ui/react";
import { ViewIcon, SearchIcon } from "@chakra-ui/icons";
import logo from "../../public/logo.svg";
import { useRouter } from "next/router";
import NextLink from "next/link";

import SearchBar from "./SearchBar";

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
      <NextLink href="/">
        <Image src={logo.src} width="180px" height="50px" />
      </NextLink>

      <Spacer />
      <NextLink href="/titleSearch" passHref>
        <Link>
          <Button
            leftIcon={<SearchIcon />}
            mr={5}
            color="darkGreen"
            variant="outline"
            border="2px"
            borderColor="darkGreen"
          >
            검색
          </Button>
        </Link>
      </NextLink>

      <NextLink href="/tagSearch" passHref>
        <Link>
          <Button
            leftIcon={<ViewIcon />}
            color="darkGreen"
            variant="outline"
            border="2px"
            borderColor="darkGreen"
          >
            필터로 검색하기
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
