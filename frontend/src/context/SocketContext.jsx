import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

/**
 * Socket context for managing socket connection and online users.
 * @typedef {Object} SocketContext
 * @property {SocketIOClient.Socket} socket - The socket instance.
 * @property {Array} onlineUsers - The array of online users.
 */

const SocketContext = createContext();

/**
 * Custom hook to access the socket context.
 * @returns {SocketContext} The socket context.
 */
export const useSocketContext = () => {
  return useContext(SocketContext);
};

/**
 * Provider component for the socket context.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {React.ReactNode} The rendered component.
 */
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io("/", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
