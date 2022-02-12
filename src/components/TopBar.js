import { Flex, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";
export default function TopBar({ position }) {
  const router = useRouter();

  return (
    <Flex color="white" w="100%" h="150px" position={position}>
      <Button
        size="200px"
        variant="ghost"
        _hover="none"
        _focus="none"
        onClick={() => router.push("/")}
      >
        <Image boxSize="200px" src={logo.src} />
      </Button>
    </Flex>
  );
}
