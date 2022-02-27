import { Box, Grid, Text } from "@chakra-ui/react";
import Card from "./Card";

export default function CardGrid() {
  return (
    <Grid
      justifyItems="center"
      templateColumns={`repeat(3,1fr)`}
      px="10%"
      gap="10"
    >
      {inputData.map((value, index) => (
        <Card value={value} />
      ))}
    </Grid>
  );
}
