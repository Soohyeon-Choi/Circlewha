import { Flex, Image, Button, Spacer, Link,Wrap, AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter, HStack } from "@chakra-ui/react";
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
      <Flex flexDir="row">
      <NextLink href="/">
        <Image src={logo.src} width="150px" height="80px"  marginLeft="15px" marginRight="330px" />
      </NextLink>
      <Spacer/>

     
      <HStack spacing="100px" >
      
      <NextLink href="/titleSearch" passHref>
        <Link>
          <Button
            leftIcon={<SearchIcon />}
            mr={5}
            color="darkGreen"
            variant="link"
            marginTop="6px"
            marginRight="2px"
            
        
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
            marginTop="6px"
          >
            필터 검색
          </Button>
        </Link>
      </NextLink>
    
          <Button
            leftIcon={<InfoOutlineIcon />}
            color="darkGreen"
            variant="link"
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
      </HStack>
   </Flex>
    
      </Flex>
  
  );
}
