import { Button } from "@chakra-ui/react";
import { useState } from "react";
export default function GridFilter({ filter, index, onChange }) {
  const [checked, setChecked] = useState(false);
  return (
    <Button
      width="100%"
      key={index}
      onClick={() => {
        setChecked(!checked);
        onChange(index);
      }}
      padding="1rem"
      _hover={
        checked == false
          ? { backgroundColor: "hoverGreen" }
          : { backgroundColor: "middleGreen" }
      }
      backgroundColor={checked == false ? "lightGreen" : "middleGreen"}
      // color={checked == false ? "#000000" : "#ffffff"}
    >
      {filter}
    </Button>
  );
}
