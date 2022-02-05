import * as React from "react";
import {useDispatch} from "react-redux";

import Card from "../components/Card";
import {Product} from "../types";
import {PRODUCTS} from "../mock";
import {setProducts} from "../../../services/products";

interface IProducts {}

const Products: React.FC<IProducts> = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around h-full bg-black flex-col lg:flex-row items-center mt-24 mb-12">
      {PRODUCTS.map((product: Product) => {
        return (
          <Card
            key={product.id}
            product={product}
            onAdd={() => {
              return dispatch(setProducts(product));
            }}
          />
        );
      })}
    </div>
  );
};

export default Products;
