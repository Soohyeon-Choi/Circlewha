import TopBar from "../src/components/TopBar";
import Filter from "../src/components/filter/Filter";
import Card from "../src/components/Card";

import React from "react";
import axios from "axios";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Filter />
      <Card />
    </div>
  );
}
