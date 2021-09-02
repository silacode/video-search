import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm, link) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      if (response.status === 200) {
        setVideos(response.data.items);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return [videos, search];
};

export default useVideos;
