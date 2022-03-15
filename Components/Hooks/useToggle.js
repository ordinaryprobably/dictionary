import axios from "axios";
import { useState } from "react";

export function useToggle(url, reqBody, initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggle = async () => {
    try {
      const response = await axios.post(url, reqBody);

      if (response.data.message === "Done") {
        setValue(true);
      } else if (response.data.message === "Undone") {
        setValue(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [value, toggle, setValue];
}
