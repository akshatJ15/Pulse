import ChatView from "@/components/custom/ChatView";
import React from "react";
import CodeView from "@/components/custom/CodeView";

const page = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ChatView />
        <div className="col-span-3">
          <CodeView />
        </div>
      </div>
    </div>
  );
};

export default page;
page;
