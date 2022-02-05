import React from "react";
import Image from "next/image";

import header from "../../public/header.svg";
import asterik from "../../public/asterik.svg";
import asterikLeft from "../../public/asterik-left.svg";

import styles from "./Header.module.css";
const Header: React.FC = () => (
  <header className="lg:px-8 lg:py-12">
    <div className="mb-2 sm:mb-16">
      <Image alt="A man can't have enough basement swag" src={header} />
    </div>
    <div className="relative -left-12 lg:-left-12">
      <p className={`${styles.marquee}`}>
        <hr className="border-1  lg:w-screen w-150" />
        <span>
          {`A man can't have enough basement swag — A man can't have enough basement swag A man —
          can't have enough basement swag — A man can't have enough basement swag `}
        </span>
        <hr className="border-1  lg:w-screen w-150" />
      </p>
      <div className="hidden lg:flex absolute left-32 -bottom-28">
        <Image alt="Asterik" src={asterik} />
      </div>
      <div className="hidden lg:flex absolute -bottom-5 right-5">
        <Image alt="Asterik" src={asterikLeft} />
      </div>
    </div>
  </header>
);

export default Header;
