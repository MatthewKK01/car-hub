import React from "react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "@/components";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="navBar">
        <Link href="/">
          <Image
            src="./logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Header;
