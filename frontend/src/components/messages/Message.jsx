import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isMe = message.senderId === authUser._id;
  const ftdTime = extractTime(message.createdAt);
  const chatClassName = isMe ? "chat-end" : "chat-start";
  const profilePic = isMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isMe ? "bg-primary" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-black ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {ftdTime}
      </div>
    </div>
  );
};
export default Message;
