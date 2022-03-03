
import Mainbottom from "../src/components/Mainpagebottom";
import backgroundImage from "../public/backImage.svg";
import  { useRouter } from "next/router";
import { Button, Image, Spacer, VStack,StackDivider} from "@chakra-ui/react";
export default function Home() {
  const router = useRouter();
  return (
    <>
<Button
        onClick={() => router.push("/titleSearch")}
	
        color="#3b5735"
        variant="flushed"
        
       
      >
        타이틀 검색
      </Button>
<Button
        onClick={() => router.push("/tagSearch")}
	marginLeft="10px"
        color="#3b5735"
        variant="flushed"
        
        
      >
        필터 검색
      </Button>
      <Spacer />


 
     
      <Image
        w="100vw"
        h="75vh"
     	padding="0"
        objectFit="cover"
        src={backgroundImage.src}
        />
        <Mainbottom />      
        </>

  );
}
