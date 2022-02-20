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
      _hover={{ backgroundColor: "#c6cdb5" }}
      backgroundColor={checked == false ? "#eaeeea" : "#9cb596"}
      // color={checked == false ? "#000000" : "#ffffff"}
    >
      {filter}
    </Button>
  );
}
