import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";
import logos from "../../public/logos.svg";
import logoMobile from "../../public/logo-mobile.svg";

interface Props {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({setIsCartOpen}) => {
  return (
    <nav className="flex justify-between items-center lg:mx-8 lg:my-9 mx-4 my-5">
      <Link href="/">
        <a className="w-48 h-7 hidden lg:flex">
          <Image alt="Basement" src={logo} />
        </a>
      </Link>
      <Link href="/">
        <a className="flex lg:hidden">
          <Image alt="Basement" height={40} src={logoMobile} width={42.93822479248047} />
        </a>
      </Link>
      <div className="hidden lg:flex">
        <Image alt="Sponsors" className="w-64 h-6" src={logos} />
      </div>
      <button
        className="w-36 h-12 border rounded-full uppercase"
        onClick={() => setIsCartOpen(true)}
      >
        Cart (1)
      </button>
    </nav>
  );
};

export default Navbar;
