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
      backgroundColor={checked == false ? "#eaeeea" : "#ffd400"}
    >
      {filter}
    </Button>
  );
}
