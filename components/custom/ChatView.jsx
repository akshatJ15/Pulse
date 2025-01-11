"use client";
import React, { useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { MessagesContext } from "@/context/MessagesContext";
import Colors from "@/data/Colors";
import { UserDetailContext } from "@/context/UserDetailContext";
import Image from "next/image";
import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "react-feather";

const ChatView = () => {
  const { id } = useParams();
  const convex = useConvex();
  const { messages, setMessages } = useContext(MessagesContext);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [userInput, setUserInput] = React.useState();

  useEffect(() => {
    GetWorkspaceData();
  }, [id]);

  // use workspace id to get the workspace data
  const GetWorkspaceData = async () => {
    const result = await convex.query(api.workspace.GetWorkspaceData, {
      workspaceId: id,
    }); // Updated query name and parameter
    if (Array.isArray(result.messages)) {
      setMessages(result.messages); // Set to messages array
    } else {
      setMessages([]); // Fallback to empty array
      console.error("Expected messages to be an array", result.messages);
    }
    console.log(result);
  };

  return (
    <div className="relative h-[85vh] flex flex-col">
      <div className="flex-1 overflow-y-scroll">
        {messages?.map((message, index) => (
          <div
            key={index}
            style={{ backgroundColor: Colors.CHAT_BACKGROUND }}
            className="p-3 mb-2 rounded-lg flex gap-2 items-start"
          >
            {message?.role === "user" && (
              <Image
                src={userDetail?.picture}
                alt="useImage"
                width={35}
                height={35}
                className="rounded-full"
              />
            )}
            <h2>{message.content}</h2>
          </div>
        ))}
      </div>
      {/* Input Section */}
      <div
        className="p-5 border rounded-xl max-w-xl w-full mt-3"
        style={{ backgroundColor: Colors.BACKGROUND }}
      >
        <div className="flex gap-2 " suppressHydrationWarning>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={Lookup.INPUT_PLACEHOLDER}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-10 w-8 rounded-md cursor-pointer"
            />
          )}
        </div>
        <div className="">
          <Link className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ChatView;
