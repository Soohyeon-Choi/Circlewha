import {Flex,Image,Button,Spacer,Link } from "@chakra-ui/react";
import {ViewIcon} from '@chakra-ui/icons';
import logo from '../../public/logo.svg';
import { useRouter } from "next/router";
import NextLink from 'next/link';
import SearchBar from "./SearchBar";

export default function TopBar({ position }) {
  const router = useRouter();
 

  return ( 
    <Flex color = "white" w="100%" h="10%" position={position} px='5' py='5' border='2px' borderColor='#c6cdb5'>
        <NextLink href='/'>
        <Image src={logo.src} width='180px' height='50px'/>
        </NextLink>
    

  <Spacer />
  <SearchBar/>
  <NextLink href='/tagSearch' passHref>
  <Link>
  <Button leftIcon={<ViewIcon/>} color='#3b5735' variant='outline' border='2px' borderColor='#3b5735'>
      필터로 검색하기
  </Button>
  </Link>
  </NextLink>
  
</Flex>

  );
}
