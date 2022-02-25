import {Input,InputGroup,Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";
import { useState,setState } from "react";
import axios from "axios";
import React from "react";

export default function SearchBar(results){
    const router = useRouter();
  const[title,setTitle]=useState('');
  

    const handleChange = ({target:{value}}) => setTitle(value); 


    async function title_search(){
        
            axios.get(
                `title?title=${title}`
            )
            .catch((err)=>{
                console.log(err);

            })

    }



    return(
        <InputGroup >
    
        <Input variant='flushed'
        value={title}
        onChange={handleChange}   
        htmlSize={20} width='auto' placeholder='동아리 이름' color='#000000' focusBorderColor='#3b5735' />
    
    <Button rightIcon={<SearchIcon />}
    onClick={title_search}
    color='#3b5735' borderColor='#3b5735' variant='outline'>
    검색
  </Button>
  
      </InputGroup>



    );

   
}