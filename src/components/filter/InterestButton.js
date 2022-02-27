import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function InterestButton({
  filter,
  index,
  addInterest,
  num,
  reload,
}) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
  }, [reload]);
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
