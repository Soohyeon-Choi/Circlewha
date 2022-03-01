
import TopBar from "../src/components/TopBar";
import Mainbottom from "../src/components/mainpagebottom";
import backgroundImage from "../public/backImage.svg";

import { Image, Spacer, VStack,StackDivider} from "@chakra-ui/react";
export default function Home() {
  
  return (
    <>
    
      <TopBar />
     
      <Image
        w="100vw"
        h="75vh"
     
        objectFit="cover"
        src={backgroundImage.src}
        />
        <Mainbottom />
     
        
     
   

      
      
        </>

  );
}
