import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function BelButton({
  filter,
  index,
  onChange,
  checked,
  setChecked,
  arr,
}) {
  useEffect(() => {
    setChecked(-1);
  }, [arr]);

  return (
    <Button
      onClick={() => {
        setChecked(index);
        {
          checked == index ? setChecked(-1) : setChecked(index);
        }
        onChange(index, filter);
      }}
      width="100%"
      padding="1rem"
      key={index}
      _hover={
        checked == index
          ? { backgroundColor: "middleGreen" }
          : { backgroundColor: "hoverGreen" }
      }
      backgroundColor={checked == index ? "middleGreen" : "lightGreen"}
    >
      {filter}
    </Button>
  );
}
