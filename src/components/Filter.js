import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function Filter() {
  return (
    <Grid
      w="100%"
      h="100%"
      px="3%"
      py="2%"
      templateRows="repeat(17, 1fr)"
      templateColumns="repeat(11, 1fr)"
      gap={1}
    >
      <GridItem colSpan={2} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          소속
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          단과대학
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          학부/전공
        </Text>
      </GridItem>
      <GridItem bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          지원조건
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          필수활동학기
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          기타조건
        </Text>
      </GridItem>
      <GridItem colSpan={2} rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem colSpan={2} rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem colSpan={2} rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={2} bg="#eaeeea" borderRadius="10px" />
      <GridItem colSpan={2} rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem colSpan={2} rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={5} bg="#eaeeea" borderRadius="10px" />
      <GridItem colSpan={11} bg="#006540" borderRadius="10px">
        <Text fontweight="bold" color="white" textAlign="center">
          관심분야
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          스포츠
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          예술
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          학회
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          학술
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          책
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          뉴미디어
        </Text>
      </GridItem>
      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          공연
        </Text>
      </GridItem>

      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          토론
        </Text>
      </GridItem>

      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          취미
        </Text>
      </GridItem>

      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          봉사
        </Text>
      </GridItem>

      <GridItem colSpan={1} bg="#eaeeea" borderRadius="10px">
        <Text fontweight="bold" color="#006540" textAlign="center">
          종교
        </Text>
      </GridItem>

      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
      <GridItem rowSpan={7} bg="#eaeeea" borderRadius="10px" />
    </Grid>
  );
}
