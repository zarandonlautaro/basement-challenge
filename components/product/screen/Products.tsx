import * as React from "react";

import Card from "../components/Card";
import {Product} from "../types";
import {addProduct} from "../reducer";
import {PRODUCTS} from "../mock";

interface IProducts {}

const Products: React.FC<IProducts> = () => (
  <div className="flex justify-around h-full bg-black flex-col lg:flex-row items-center mt-24 mb-12">
    {PRODUCTS.map((product: Product) => {
      return (
        <Card
          key={product.id}
          product={product}
          onAdd={() => {
            addProduct(product);
          }}
        />
      );
    })}
  </div>
);

export default Products;
