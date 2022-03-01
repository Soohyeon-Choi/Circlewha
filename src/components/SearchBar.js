import { Input, InputGroup, Button, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

export default function SearchBar({ title_search, handleChange, title }) {
  const pressEnter = (event) => {
    const { key } = event;
    if (key == "Enter") {
      title_search();
    }
  };

  const clickButton = () => {
    title_search();
  };

  return (
    <InputGroup>
      <Input
        variant="flushed"
        onChange={handleChange}
        onChange={(event) => handleChange(event)}
        onKeyPress={(event) => pressEnter(event)}
        htmlSize={20}
        width="30rem"
        placeholder="동아리 이름 검색"
        value={title}
        color="black"
        focusBorderColor="darkGreen"
      />
      <IconButton
        icon={<SearchIcon />}
        size="lg"
        onClick={clickButton}
        color="darkGreen"
        background="none"
        _focus={{ outline: "none" }}
        _hover={{ backgroundColor: "hoverGreen" }}
        borderRadius="10rem"
      />
    </InputGroup>
  );
}
