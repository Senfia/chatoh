import { createContext, useContext, useState } from "react";

/**
 * Context object for managing authentication state.
 * @type {React.Context}
 */
export const AuthContext = createContext();

/**
 * Custom hook for accessing the authentication context.
 * @returns {Object} The authentication context object.
 */
export const useAuthContext = () => {
  return useContext(AuthContext);
};

/**
 * Provider component for the authentication context.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The authentication context provider.
 */
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
