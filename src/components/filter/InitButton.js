import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BsArrowClockwise } from "react-icons/bs";

export default function BelButton({ init }) {
  return (
    <Button
      leftIcon={<BsArrowClockwise />}
      color="#006540"
      variant="ghost"
      onClick={() => {
        init();
      }}
    >
      초기화
    </Button>
  );
}
