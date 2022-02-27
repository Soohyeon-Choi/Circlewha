import { Image} from "@chakra-ui/react";
import { useRouter } from "next/router";
import backgroundImage from "../../public/backgroundImage.svg";

export default function MainBackground({ position }) {
  const router = useRouter();

  return ( 
   
  
    <Image src={backgroundImage.src} />


  );
}
