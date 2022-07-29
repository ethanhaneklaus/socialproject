import { useState, useEffect } from "react";
import axios from "axios";


export default function useAxios(url) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function init() {
      if (url.length === 0) {
        return;
      }
      setData(null);
      setError(null);

      try {

        const response = await axios.get(`&q=${search}` + url);
        const data = response.data.data.map((val) => ({
          data_id: val.id,
          title: val.title,
          url: val.images.original.url,
        }));
        setData(data);
      } catch (e) {
        setError("Something went wrong, please try again later");
      }
    }
    init();
  }, [url]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error };
}
