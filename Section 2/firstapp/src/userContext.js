import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    const [loggedin, setLoggedin] = useState(false);
    
  const [currentUser, setCurrentUser] = useState({});
  

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, loggedin, setLoggedin }}
    >
      {children}
    </UserContext.Provider>
  );
};