import React from "react";
import { HelpCircle, Settings } from "react-feather";
import { Wallet } from "lucide-react";
import { LogOut } from "react-feather";
import { Button } from "@/components/ui/button";

const SideBarFooter = () => {
  const options = [
    {
      name: "Settings",
      icon: Settings,
    },
    {
      name: "Help",
      icon: HelpCircle,
    },
    {
      name: "My Subscription",
      icon: Wallet,
    },
    {
      name: "Sign Out",
      icon: LogOut,
    },
  ];
  return (
    <div className="p-5 mb-10">
      {options.map((option, index) => {
        return (
          <Button key={index} className="w-full flex justify-start my-3" variant="ghost">
            <option.icon />
            {option.name}
          </Button>
        );
      })}
    </div>
  );
};

export default SideBarFooter;
