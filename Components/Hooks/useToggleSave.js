import axios from "axios";
import { useState } from "react";

export function useToggleSave(url, reqBody, initialState = false) {
  const [save, setSave] = useState(initialState);

  const toggleSave = async () => {
    try {
      const response = await axios.post(url, reqBody);

      if (response.data.data === "Saved") {
        setSave(true);
      } else if (response.data.data === "Unsaved") {
        setSave(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [save, toggleSave, setSave];
}
