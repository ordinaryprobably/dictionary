import { createContext } from "react";
import useUserId from "../Hooks/useUserId";

export const UserIdContext = createContext();
export const DispatchIdContext = createContext();

export function UserIdProvider({ children }) {
  const [userId, dispatchId] = useUserId('');

  return (
    <UserIdContext.Provider value={userId}>
      <DispatchIdContext.Provider value={dispatchId}>
        {children}
      </DispatchIdContext.Provider>
    </UserIdContext.Provider>
  )
}