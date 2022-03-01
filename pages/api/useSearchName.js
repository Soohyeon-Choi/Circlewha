import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearchName() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  const handleChange = ({ target: { value } }) => setTitle(value);

  const title_search = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      if (title) {
        axios
          .get("/title", {
            params: {
              title: `${title}`,
            },
          })
          .then((res) => {
            setIsLoading(false);
            setTitle("");
            setData(res.data.data);
          });
      }
    } catch (error) {
      setTitle("");
      setIsError(true);
    }
  };

  return { title_search, data, isError, isLoading, handleChange, title };
}
