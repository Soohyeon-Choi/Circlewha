import { Button } from "@chakra-ui/react";
import { useState } from "react";
export default function GridFilter({ filter, index, addInterest, num }) {
  const [checked, setChecked] = useState(false);

  return (
    <Button
      isChecked={true}
      onClick={() => {
        setChecked(!checked);
        addInterest(filter, num);
      }}
      width="100%"
      padding="1rem"
      key={index}
      _hover={
        checked == false
          ? { backgroundColor: "hoverGreen" }
          : { backgroundColor: "middleGreen" }
      }
      backgroundColor={checked == false ? "lightGreen" : "middleGreen"}
    >
      {filter}
    </Button>
  );
}
