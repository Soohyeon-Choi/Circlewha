import axios from "axios";
import { useState, useEffect } from "react";

export default function useDetail(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detail, setDetail] = useState({
    act_detail:
      "11월 셋째 주에 올리는 극을 목표로 하며, 3월부터 체계적으로 극 발제, 정기적 연습의 과정을 거칩니다. 배우팀은 일학기에는 일주일에 한 번, 이학기에는 일주일에 두 번 모여 연습을 하며 특히 여름방학의 경우 더욱 집중적인 연습 기간을 거칩니다. 스태프팀(의상소품무대팀, 홍보팀, 음향팀, 자막팀, 안무팀) 또한 일주일에 한 번씩 각 팀별 정기 회의를 가집니다. ",
    belong_detail: "학부/전공 소속,불어불문학과",
    etc_detail: "",
    etccond_detail: "",
    exinfo_detail: "#프랑스어,#원어연극,#원어뮤지컬",
    history:
      "https://www.youtube.com/watch?v=CQCE24Xc8v0 2006~2016 역대 공연영상 모음 참고",
    how: "올해 2022년에는 생활환경관 소극장에서 대면 극을 올리는 것을 목표로 하고 있으며, 정기 회의 및 배우팀 연습은 거리 두기 상황에 따라 대면과 비대면을 병행할 예정입니다. ",
    id: 59,
    interest_detail: "예술,연극/뮤지컬",
    link: "인스타그램 아이디 @ewha_ensemble / 유튜브 채널명: 이화불문 원어공연학회 앙상블 (https://www.youtube.com/watch?v=ofXpOMMFUsU)",
    logo: "https://drive.google.com/uc?export=download&id=1Wbr7yskVdF78u4kQPmTLCmXc7nN3ANj_, https://drive.google.com/uc?export=download&id=1VsT7957n7lkQDQTanJd4PnB4a7bFvoOj, https://drive.google.com/uc?export=download&id=1LTHTmobUcLtdwBLsGWsbAYSQqutGHq3i",
    period_detail: "1년 (3월~11월 셋째 주에 극이 올라갈 때까지)",
    qual_detail: "학번,학과 무관 (휴학생도 무관)",
    time: "투표로 결정 (배우팀의 경우 1학기 수, 2학기 수 금 예정)",
    title: "ENSEMBLE(앙상블)",
    when_detail: "3월 ",
  });

  useEffect(() => {
    const useFetchDetail = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `http://localhost:3060/get-detail?num=${id}`
        );
        setIsLoading(false);
        setDetail(response.data.data[0]);
      } catch (error) {
        setIsError(true);
      }
    };
    useFetchDetail();
  }, [id]);

  return { detail, isError, isLoading };
}
