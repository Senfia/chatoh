import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification-sound-7062.mp3";

const useListenMessages = () => {
  const socketContext = useSocketContext();
  const { socket } = socketContext || {}; // Add null check here
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage) => {
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
      });

      return () => socket.off("newMessage");
    }
  }, [socket, setMessages, messages]);
};
export default useListenMessages;
