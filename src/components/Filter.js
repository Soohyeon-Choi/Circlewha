import {
  Grid,
  GridItem,
  Text,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import GridInterest from "./GridInterest";
import FilterName from "./FilterName";
import GridFilter from "./GridFilter";

export default function Filter() {
  const [qualQuery, setQualQuery] = useState([-1, -1, -1, -1]);
  const [semQuery, setSemQuery] = useState([-1, -1, -1, -1, -1]);
  const [etcQuery, setEtcQuery] = useState([-1, -1, -1, -1, -1]);
  const [interestQuery, setInterestQuery] = useState([]);
  console.log(interestQuery);

  const onQualChange = (index) => {
    if (qualQuery[index] == -1) {
      qualQuery[index] = 1;
      setQualQuery(qualQuery);
    } else if (qualQuery[index] == 1) {
      qualQuery[index] = -1;
      setQualQuery(qualQuery);
    }
    console.log(qualQuery);
  };

  const onSemChange = (index) => {
    if (semQuery[index] == -1) {
      semQuery[index] = 1;
      setSemQuery(semQuery);
    } else if (semQuery[index] == 1) {
      semQuery[index] = -1;
      setSemQuery(semQuery);
    }
    console.log(semQuery);
  };

  const onEtcChange = (index) => {
    if (etcQuery[index] == -1) {
      etcQuery[index] = 1;
      setEtcQuery(etcQuery);
    } else if (etcQuery[index] == 1) {
      etcQuery[index] = -1;
      setEtcQuery(etcQuery);
    }
    console.log(etcQuery);
  };

  return (
    <>
      <Flex justifyContent="end">
        <ButtonGroup spacing={3} size="md">
          <Button
            leftIcon={<BsArrowClockwise />}
            color="#006540"
            variant="ghost"
          >
            초기화
          </Button>
          <Button color="#006540" variant="ghost">
            전체보기
          </Button>
        </ButtonGroup>
      </Flex>
      <Grid
        w="100%"
        h="100%"
        px="3%"
        py="2%"
        templateRows="repeat(17, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={1}
      >
        <FilterName col={2} name="소속" />
        <FilterName col={2} name="단과대학" />
        <FilterName col={3} name="학부/전공" />
        <FilterName col={1} name="지원조건" />
        <FilterName col={1} name="필수활동학기" />
        <FilterName col={1} name="기타조건" />

        <GridItem
          colSpan={2}
          rowSpan={7}
          bg="#eaeeea"
          borderRadius="7px"
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={7}
          bg="#eaeeea"
          borderRadius="7px"
        ></GridItem>
        <GridItem
          colSpan={3}
          rowSpan={7}
          bg="#eaeeea"
          borderRadius="7px"
        ></GridItem>

        <GridFilter arr={cond} onChange={onQualChange} />
        <GridFilter arr={sem} onChange={onSemChange} />
        <GridFilter arr={etc} onChange={onEtcChange} />

        <FilterName col={10} name="관심분야" />

        {up.map((filter) => (
          <GridItem colSpan={1} bg="#eaeeea" borderRadius="7px">
            <Text fontweight="bold" color="#006540" textAlign="center">
              {filter}
            </Text>
          </GridItem>
        ))}
        <GridInterest
          arr={up_1}
          num={1}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_2}
          num={2}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_3}
          num={3}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_4}
          num={4}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_5}
          num={5}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_6}
          num={6}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_7}
          num={7}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_8}
          num={8}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_9}
          num={9}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
        <GridInterest
          arr={up_10}
          num={10}
          interestQuery={interestQuery}
          setInterestQuery={setInterestQuery}
        />
      </Grid>
    </>
  );
}

const category = [
  "전체",
  "중앙동아리",
  "단과대학 소속",
  "학부/전공 소속",
  "기타 소속",
  "무소속",
  "연합동아리",
];

const college = [
  "인문과학대학",
  "사회과학대학",
  "자연과학대학",
  "엘텍공과대학",
  "음악대학",
  "조형예술대학",
  "사범대학",
  "경영대학",
  "신산업융합대학",
  "의과대학",
  "간호대학",
  "약학대학",
  "스크랜튼대학",
  "호크마교양대학",
];

const major_1 = [
  "국어국문학과",
  "불어불문학과",
  "영어영문학과",
  "사학과",
  "철학과",
];

const major_2 = ["심리학과", "행정학과", "커뮤니케이션 미디어학부"];

const major_3 = ["화학 나노과학전공", "생명과학전공"];

const major_4 = [
  "컴퓨터공학과",
  "사이버보안전공",
  "전자전기공학과",
  "식품공학과",
  "화학신소재공학과",
  "기후 에너지시스템공학과",
];

const major_6 = ["디자인학부"];

const major_9 = ["융합보건학과"];

const major_13 = ["뇌 인지과학과", "국제학부"];

const cond = ["해당없음", "새내기만", "학번무관", "전공무관"];

const sem = ["해당없음", "1학기", "2학기", "3학기", "4학기"];

const etc = ["해당없음", "회비X", "동방O", "면접X", "상시모집"];

const list = ["up_1", "up_2", "up_3"];
const up = [
  "기타",
  "뉴미디어",
  "문화",
  "봉사",
  "스포츠",
  "예술",
  "종교",
  "책",
  "학술",
  "학회",
];

const up_1 = [
  "전체",
  "캠페인",
  "창업",
  "홍보",
  "답사",
  "캠페인",
  "기획",
  "PT/PR",
  "사회운동",
];

const up_2 = ["전체", "카드뉴스", "뉴스레터", "팟캐스트", "영상"];

const up_3 = ["전체", "차", "문화교류", "관람", "친목"];

const up_4 = [
  "전체",
  "의료봉사",
  "교육봉사",
  "기타봉사",
  "예술봉사",
  "해외봉사",
];

const up_5 = ["전체"];

const up_6 = [
  "전체",
  "사진",
  "밴드/오케스트라",
  "국악/풍물",
  "연극/뮤지컬",
  "패션",
  "개그",
  "영화",
  "노래",
  "댄스",
  "디자인",
  "그림",
  "악기",
];

const up_7 = ["전체", "기독교"];

const up_8 = ["전체", "교지/잡지/신문", "문학/문집", "신문"];

const up_9 = [
  "전체",
  "언어",
  "교육",
  "보건/의료",
  "답사",
  "미술",
  "사학",
  "건축",
  "경영/경제",
  "언어",
  "토론",
  "법학",
  "기술과학",
  "자연과학",
  "사회과학",
  "IT",
  "인문학",
  "교육학",
  "여성학",
];

const up_10 = [
  "전체",
  "경영",
  "기술과학",
  "사회과학",
  "보건/의료",
  "법학",
  "경영/경제",
  "미술",
];
