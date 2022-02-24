import axios from "axios";
import { useEffect, useState } from "react";

export default function Detail() {
  const [id, setId] = useState(82);
  const [detail, setDetail] = useState([]);
  const callApi = async () => {
    axios.get(`/get-detail?num=${id}`).then((res) => {
      setDetail(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    setId(81);
    callApi();
  }, [id]);
  {
    return detail.data ? <div>{detail.data[0].title_detail}</div> : "";
  }
}
