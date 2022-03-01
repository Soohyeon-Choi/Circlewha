import { Input, InputGroup, Button, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState, setState } from "react";
import axios from "axios";
import React from "react";

export default function SearchBar({ title_search, handleChange }) {
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
        width="auto"
        placeholder="동아리 이름 검색"
        color="#000000"
        focusBorderColor="#3b5735"
      />
      <IconButton
        icon={<SearchIcon />}
        onClick={clickButton}
        color="#3b5735"
        background="none"
      />
    </InputGroup>
  );
}
