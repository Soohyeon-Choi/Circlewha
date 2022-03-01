import { Flex,Text,Spacer} from "@chakra-ui/react";
import TopBar from "./TopBar";
import React from "react";

export default function mainbottom({ position }) {



  return ( 
    <Flex bgColor="#3b5735" h="200px" color="#eaeeea" p="35px" mt="3rem" bottom="1"  >
      <Flex flexDir="column" alignItems="center" ml="50px" marginLeft="3git0px">
      <Text fontSize="4xl" fontWeight="bold" color="#eaeeea" mb="10px">
        circl"EWHA"
      </Text>

      <Text fontSize="4xl" fontWeight="bold" color="#eaeeea" mb="10px" >
        
        "circle"EWHA
      </Text>
      </Flex>
      
      <Spacer/>
          
          <Flex flexDir="column" alignItems="center" ml="50px">
            <Text fontSize="2xl" fontWeight="bold" color="#eaeeea" mb="10px">
              CONTACT US
            </Text>
            
            <Text marginBottom="10px">e-mail : circlewha@gmail.com

            </Text>
            <Text>kakaotalk : @circlewha</Text>
          </Flex>
        </Flex>
      );
    
}
