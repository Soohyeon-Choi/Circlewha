import { Flex, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";
export default function TopBar({ position }) {
  const router = useRouter();

  return (
    <Flex color="white" w="15%" h="10%" position={position} px="6" py="10">
      <Button
        size="lg"
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
