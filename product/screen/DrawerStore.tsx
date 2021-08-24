import * as React from "react";
import Image from "next/image";

import yourCart from "../../public/your-cart.svg";
import yourCartMobile from "../../public/your-cart-mobile.svg";
import checkout from "../../public/checkout.svg";
import {addProduct} from "../reducer";
import Preview from "../components/Preview";

interface Props {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerStore: React.FC<Props> = ({isCartOpen, setIsCartOpen}) => {
  const [product, setProduct] = React.useState<string>("");

  React.useEffect(() => {
    setProduct(localStorage.getItem("store") || "");
  }, [product]);

  const separator = <div className="hidden lg:flex border-r h-full mx-2" />;

  const footerDesktop = (
    <>
      <div className="hidden lg:flex lg:w-2/3 items-center font-bold justify-center mx-4">
        <p className="uppercase text-4xl whitespace-nowrap">Total: $52,50</p>
      </div>
      {separator}
    </>
  );

  const footerMobile = (
    <div className="flex justify-between lg:hidden">
      <p className="uppercase text-xl">Total</p>
      <p className="uppercase text-xl">$25,50</p>
    </div>
  );

  const closeDrawer = (
    <a
      className="uppercase flex justify-end my-1 mx-1 mb-2 cursor-pointer"
      onClick={() => setIsCartOpen(false)}
    >
      → Close
    </a>
  );

  return (
    <>
      {isCartOpen && (
        <aside
          className={`flex flex-col border-b border-l transform top-0 right-0 lg:w-1/2 lg:h-screen bg-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isCartOpen ? "backdrop-filter backdrop-opacity-80 translate-x-0" : "-translate-x-full"
          }`}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          {closeDrawer}

          <div className="lg:p-8 p-4">
            <div className="hidden lg:flex">
              <Image alt="Cart" src={yourCart} />
            </div>
            <div className="flex lg:hidden">
              <Image alt="Cart" className="" src={yourCartMobile} />
            </div>
          </div>

          <Preview product={product} />

          <footer className="lg:border-t flex flex-col lg:flex-row lg:justify-between items-center mt-auto">
            {footerDesktop}
            <div className="flex flex-col justify-between w-screen p-8 lg:p-0 lg:w-1/3">
              {footerMobile}
              <div className="hidden lg:flex border-r h-full mr-8 lg:px-2" />
              <div className="lg:p-0 border-t lg:border-0">
                <Image alt="Checkout" height={62} src={checkout} width={343} />
              </div>
            </div>
          </footer>
        </aside>
      )}
    </>
  );
};

export default DrawerStore;
