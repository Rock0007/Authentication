import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get("/profile");
        if (isMounted) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
