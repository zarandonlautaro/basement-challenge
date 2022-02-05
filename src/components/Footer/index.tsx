import React from "react";
import Image from "next/image";

import footer from "../../public/footer.svg";
interface Props {}

const Footer: React.FC = (props: Props) => {
  return (
    <footer className="px-8 py-12">
      <div className="mb-2 sm:mb-16">
        <Image alt="A man can’t have enough base­ment swag" src={footer} />
      </div>
    </footer>
  );
};

export default Footer;
