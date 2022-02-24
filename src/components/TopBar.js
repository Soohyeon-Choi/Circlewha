import {Flex,Image,Input,InputGroup,InputLeftElement,Button,Spacer } from "@chakra-ui/react";
import { SearchIcon,ViewIcon,leftIcon } from '@chakra-ui/icons'
import logo from '../../public/logo.svg';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function TopBar({ position }) {
  const router = useRouter();

  return ( 
    <Flex color = "white" w="100%" h="10%" position={position} px='5' py='5' border='2px' borderColor='#c6cdb5'>
        <Image src={logo.src} width='180px' height='50px'/>
    
    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='#3b5735' />}
    />
    <Input variant='flushed' htmlSize={20} width='auto' placeholder='동아리 이름 검색' color='#000000'focusBorderColor='#3b5735' />
  </InputGroup>
  <Spacer />
  
  <Button leftIcon={<ViewIcon/>} color='#3b5735' variant='outline' border='2px' borderColor='#3b5735'>
      필터로 검색하기
  </Button>
  
</Flex>

  );
}
