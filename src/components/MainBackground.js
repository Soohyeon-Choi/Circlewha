import { Image} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icons';
import backgroundImage from "../../public/backgroundImage.svg";


export default function MainBackground({ position }) {
  const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )
  


  return ( 
    <div position='relative'>
    <Image src={ backgroundImage.src } 
   />
   <div position='absolute'>
   <CircleIcon boxSize={6} color='#3b5735' px='10' py='100'/>
   </div>
   </div>
  );
}
