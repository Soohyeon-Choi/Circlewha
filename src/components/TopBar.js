import { Flex, Image, Button, Spacer, Link, AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter } from "@chakra-ui/react";
import { SearchIcon,InfoOutlineIcon } from "@chakra-ui/icons";
import logo from "../../public/logo.svg";
import NextLink from "next/link";
import React from "react";
import { MdFilterListAlt } from "react-icons/md";


export default function TopBar({ position }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()


  return (
    <Flex
      color="white"
      w="100%"
      h="10%"
      position={position}
      px="5"
      py="5"
      
     
    >
      <NextLink href="/">
        <Image src={logo.src} width="150px" height="80px"  marginLeft="15px"/>
      </NextLink>

      <Spacer />

      <Flex flexDir="row" alignItems="center" marginRight="500px">
      <NextLink href="/titleSearch" passHref>
        <Link>
          <Button
            leftIcon={<SearchIcon />}
            mr={5}
            color="darkGreen"
            marginTop="30px"
            variant="link"
            marginRight="30px"
          >
            타이틀 검색
          </Button>
        </Link>
      </NextLink>

      <NextLink href="/tagSearch" passHref>
        <Link>
          <Button
            leftIcon={<MdFilterListAlt size={20} />}
            color="darkGreen"
            variant="link"
            marginTop="30px"
            marginLeft="30px"
            marginRight="30px"
            
          >
            필터 검색
          </Button>
        </Link>
      </NextLink>
    
          <Button
            leftIcon={<InfoOutlineIcon />}
            color="darkGreen"
            variant="link"
            marginTop="20px"
            marginLeft="30px"
            onClick={() => setIsOpen(true)}
            
          >
           How to use
          </Button>
          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='2xl' fontWeight='bold'>
              sorry!
            </AlertDialogHeader>

            <AlertDialogBody>
              해당 탭은 오픈 준비 중입니다:)
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}  color="darkgreen"variant="solid">
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    
      </Flex>
    </Flex>
  );
}
