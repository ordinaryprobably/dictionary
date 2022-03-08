import { createContext } from "react";
import useWordState from "../Hooks/useWordState";

export const WordContext = createContext();
export const DispatchContext = createContext();

export function WordProvider({ children }) {
  const [word, dispatch] = useWordState([]);

  return (
    <WordContext.Provider value={word}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </WordContext.Provider>
  )
}