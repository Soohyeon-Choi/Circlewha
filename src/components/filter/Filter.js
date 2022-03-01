import {
  Grid,
  GridItem,
  Box,
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
import Belong from "./Belong";
import axios from "axios";
import InitButton from "./InitButton";
import CardGrid from "../CardGrid";

export default function Filter() {
  const [interestQuery, setInterestQuery] = useState([]);
  const [cateQuery, setCateQuery] = useState([-1, -1, -1]);
  const [qualQuery, setQualQuery] = useState([-1, -1, -1]);
  const [semQuery, setSemQuery] = useState([-1, -1, -1, -1, -1]);
  const [etcQuery, setEtcQuery] = useState([-1, -1, -1, -1]);
  const [collArray, setCollArray] = useState([]);
  const [majorArray, setMajorArray] = useState([]);
  const [reload, setReload] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [first, setFirst] = useState(0);
  const iArr = [];

  const onCategoryChange = (index, filter) => {
    if (cateQuery[0] == filter) {
      cateQuery[0] = -1;
      cateQuery[1] = -1;
      cateQuery[2] = -1;
      setCateQuery(cateQuery);
    } else {
      cateQuery[2] = -1;
      cateQuery[1] = -1;
      cateQuery[0] = filter;
      setCateQuery(cateQuery);
    }
    if (cateQuery[0] == "단과대학 소속") {
      setCollArray(college);
      setMajorArray([]);
    } else if (cateQuery[0] == "학부/전공 소속") {
      setCollArray(college1);
      setMajorArray([]);
    } else {
      setCollArray([]);
      setMajorArray([]);
    }
  };

  const onCollChange = (index, filter) => {
    if (cateQuery[1] == filter) {
      cateQuery[2] = -1;
      cateQuery[1] = -1;
      setCateQuery(cateQuery);
      if (cateQuery[0] == "학부/전공 소속") {
        setMajorArray([]);
      }
    } else {
      cateQuery[2] = -1;
      cateQuery[1] = filter;
      setCateQuery(cateQuery);
      if (cateQuery[0] == "학부/전공 소속") {
        setMajorArray(major[index]);
      }
    }
  };

  const onMajorChange = (index, filter) => {
    if (cateQuery[2] == filter) {
      cateQuery[2] = -1;
      setCateQuery(cateQuery);
    } else {
      cateQuery[2] = filter;
      setCateQuery(cateQuery);
    }
  };

  const onQualChange = (index) => {
    if (qualQuery[index] == -1) {
      qualQuery[index] = 1;
      setQualQuery(qualQuery);
    } else if (qualQuery[index] == 1) {
      qualQuery[index] = -1;
      setQualQuery(qualQuery);
    }
  };

  const onSemChange = (index) => {
    if (semQuery[index] == -1) {
      semQuery[index] = 1;
      setSemQuery(semQuery);
    } else if (semQuery[index] == 1) {
      semQuery[index] = -1;
      setSemQuery(semQuery);
    }
  };

  const init = () => {
    setReload(!reload);
    cateQuery = [-1, -1, -1];
    setCateQuery(cateQuery);
    qualQuery = [-1, -1, -1];
    setQualQuery(qualQuery);
    semQuery = [-1, -1, -1, -1, -1];
    setSemQuery(semQuery);
    etcQuery = [-1, -1, -1, -1];
    setEtcQuery(etcQuery);
    interestQuery = [];
    setInterestQuery(interestQuery);

    setInputData();
    setFirst(0);
  };

  const onEtcChange = (index) => {
    if (etcQuery[index] == -1) {
      etcQuery[index] = 1;
      setEtcQuery(etcQuery);
    } else if (etcQuery[index] == 1) {
      etcQuery[index] = -1;
      setEtcQuery(etcQuery);
    }
  };

  for (var key in interestQuery) {
    for (var key2 in interestQuery[key]) {
      if (key2 == "id") {
        var v1 = interestQuery[key][key2];
      } else {
        var v2 = interestQuery[key][key2];
      }
    }
    iArr.push([v1, v2]);
  }

  const onClick = async () => {
    axios
      .post(
        "/tagSearch",
        {
          belong: cateQuery,
          qual: qualQuery,
          sem: semQuery,
          etc: etcQuery,
          interest: iArr,
        },
        { headers: { "Content-Type": `application/json` } }
      )
      .then((res) => {
        setInputData(res.data);
        setFirst(1);
      });
  };

  const listAll = async () => {
    setReload(!reload);
    init();
    axios
      .post(
        "/tagSearch",
        {
          qual: [100, 100, 100],
          sem: semQuery,
          etc: etcQuery,
          interest: iArr,
        },
        {
          headers: { "Content-Type": `application/json` },
        }
      )
      .then((res) => {
        setInputData(res.data);
        setFirst(1);
      });
  };

  return (
    <>
      <Flex flexDirection="column" justify="center">
        <Box maxW="100rem" px="3%" py="2%">
          <Flex justifyContent="end">
            <ButtonGroup spacing={3} mb={2} size="md">
              <InitButton init={init} />
              <Button onClick={listAll} color="darkGreen" variant="ghost">
                전체보기
              </Button>
            </ButtonGroup>
          </Flex>
          <Box>
            <Grid w="100%" h="100%" templateColumns="repeat(10, 1fr)" gap={1}>
              <FilterName col={2} name="소속" />
              <FilterName col={2} name="단과대학" />
              <FilterName col={3} name="학부/전공" />
              <FilterName col={1} name="지원조건" />
              <FilterName col={1} name="필수활동학기" />
              <FilterName col={1} name="기타조건" />
              <Belong
                col={2}
                arr={category}
                reload={reload}
                onChange={onCategoryChange}
              />
              <Belong
                col={2}
                arr={collArray}
                reload={reload}
                onChange={onCollChange}
              />
              <Belong
                col={3}
                arr={majorArray}
                reload={reload}
                onChange={onMajorChange}
              />

              <GridFilter arr={cond} onChange={onQualChange} reload={reload} />
              <GridFilter arr={sem} onChange={onSemChange} reload={reload} />
              <GridFilter arr={etc} onChange={onEtcChange} reload={reload} />
              <FilterName col={10} name="관심분야" />
              {up.map((filter, index) => (
                <GridItem colSpan={1} bg="lightGreen" borderRadius="7px">
                  <Text
                    fontweight="bold"
                    color="darkGreen"
                    textAlign="center"
                    key={index}
                  >
                    {filter}
                  </Text>
                </GridItem>
              ))}
              {up_list.map((list, index) => (
                <GridInterest
                  reload={reload}
                  arr={list}
                  key={index}
                  num={index + 1}
                  interestQuery={interestQuery}
                  setInterestQuery={setInterestQuery}
                />
              ))}
            </Grid>
          </Box>
          <Flex mt={2} justify="end" mb={10}>
            <Button
              borderWidth="2px"
              borderColor="darkGreen"
              onClick={onClick}
              color="darkGreen"
              variant="ghost"
            >
              선택완료
            </Button>
          </Flex>

          {inputData && first == 1 ? (
            <>
              <Flex mt={5} justify="center" mb="5rem">
                <CardGrid inputData={inputData} />
              </Flex>
            </>
          ) : (
            ""
          )}
        </Box>
      </Flex>
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
const college1 = [
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
const major = [
  ["국어국문학과", "불어불문학과", "영어영문학과", "사학과", "철학과"],
  ["심리학과", "행정학과", "커뮤니케이션 미디어학부"],
  ["화학 나노과학전공", "생명과학전공"],
  [
    "전체",
    "컴퓨터공학과",
    "사이버보안전공",
    "전자전기공학과",
    "식품공학과",
    "화학신소재공학과",
    "기후 에너지시스템공학과",
  ],
  [],
  ["디자인학부"],
  [],
  [],
  ["융합보건학과"],
  [],
  [],
  [],
  ["뇌 인지과학과", "국제학부"],
  [],
];

const cond = ["새내기만", "학번무관", "전공무관"];

const sem = ["1학기", "2학기", "3학기", "4학기", "그 외"];

const etc = ["회비X", "동방O", "면접X", "상시모집"];

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
const up_list = [
  [
    "전체",
    "캠페인",
    "창업",
    "홍보",
    "답사",
    "캠페인",
    "기획",
    "PT/PR",
    "사회운동",
  ],
  ["전체", "카드뉴스", "뉴스레터", "팟캐스트", "영상"],
  ["전체", "차", "문화교류", "관람", "친목"],
  ["전체", "의료봉사", "교육봉사", "기타봉사", "예술봉사", "해외봉사"],
  ["전체"],
  [
    "전체",
    "사진",
    "밴드",
    "오케스트라",
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
  ],
  ["전체", "기독교"],
  ["전체", "교지/잡지/신문", "문학/문집", "신문"],
  [
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
  ],
  [
    "전체",
    "경영",
    "기술과학",
    "사회과학",
    "보건/의료",
    "법학",
    "경영/경제",
    "미술",
  ],
];
