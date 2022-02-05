import type {NextPage} from "next";
import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/product/screen/Products";
import DrawerStore from "../components/product/screen/DrawerStore";

const Home: NextPage = () => {
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

  const closeCartIfIsOpen = () => isCartOpen && setIsCartOpen(false);

  return (
    <>
      {isCartOpen && <DrawerStore isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
      <div className="relative">
        <main className={`${isCartOpen ? "blur-sm" : ""}`} onClick={closeCartIfIsOpen}>
          <Navbar setIsCartOpen={setIsCartOpen} />
          <Header />
          <Products />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
