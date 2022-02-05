import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";
import logos from "../../../public/logos.svg";
import logoMobile from "../../../public/logo-mobile.svg";
import {useAppSelector} from "../../app/hooks";

interface Props {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({setIsCartOpen}) => {
  const [amount, setAmount] = useState(0);
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    if (products) {
      setAmount(products.length);
    }
  }, [products]);

  return (
    <nav className="sticky top-0 bg-black z-50 w-full flex justify-between items-center lg:px-8 lg:py-9 px-4 py-5">
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
        {`Cart (${amount})`}
      </button>
    </nav>
  );
};

export default Navbar;
