import { createContext, useState } from "react";

export const GlobalBillContext = createContext(null);
export const GlobalBillProvider = ({ children }) => {
  const [jwt, setJwt] = useState();
  return (
    <GlobalBillContext.Provider value={{ jwt, setJwt }}>
      {children}
    </GlobalBillContext.Provider>
  );
};
