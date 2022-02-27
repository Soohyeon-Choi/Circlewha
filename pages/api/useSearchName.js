import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearchName() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleChange = ({ target: { value } }) => setTitle(value);

  const title_search = async () => {
    setIsLoading(true);
    setIsError(false);
    if (title) {
      axios
        .get("/title", {
          params: {
            title: `${title}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          setData(res.data.data);
          setTitle("");
        });
    }
  };
  console.log(title);

  return { title_search, data, isError, isLoading, handleChange };
}
