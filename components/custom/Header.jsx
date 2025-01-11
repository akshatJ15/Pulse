import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Colors from "../../data/Colors";

const Header = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <Image src={"/image.png"} width={40} height={40} alt="Logo" />
      <div className="flex gap-5">
        <Button variant="ghost">Sign In</Button>
        <Button
          className="text-white"
          style={{
            backgroundColor: Colors.BLUE,
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Header;
