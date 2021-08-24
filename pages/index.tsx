import type {NextPage} from "next";
import React from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {PRODUCTS} from "../product/mock";
import Products from "../product/screen/Products";
import DrawerStore from "../product/screen/DrawerStore";

const Home: NextPage = () => {
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);

  const closeCartIfIsOpen = () => isCartOpen && setIsCartOpen(false);

  return (
    <>
      <main className={`${isCartOpen && "opacity-70"}`} onClick={closeCartIfIsOpen}>
        <Navbar setIsCartOpen={setIsCartOpen} />
        <Header />
        <Products products={PRODUCTS} />
        <Footer />
      </main>
      <DrawerStore isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Home;
