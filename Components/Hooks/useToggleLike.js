import axios from "axios";
import { useState } from "react";

export function useToggleLike(url, reqBody, initialState = false) {
  const [like, setLike] = useState(initialState);

  const toggleLike = async () => {
    try {
      if (!like) {
        setLike(true);
        reqBody.doLike = true;
        await axios.post(url, reqBody);
      } else {
        setLike(false);
        reqBody.dolike = false;
        await axios.post(url, reqBody);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [like, toggleLike, setLike];
}
