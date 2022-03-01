import axios from "axios";
import { useState, useEffect } from "react";

export default function useDetail(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const useFetchDetail = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(`/get-detail?num=${id}`);
        setIsLoading(false);
        setDetail(response.data.data[0]);
      } catch (error) {
        setIsError(true);
      }
    };
    useFetchDetail();
  }, [id]);

  return { detail, setIsLoading, isError, isLoading };
}
