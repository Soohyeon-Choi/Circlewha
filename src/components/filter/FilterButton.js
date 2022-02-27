import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function FilterButton({ filter, reload, index, onChange }) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
  }, [reload]);
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
