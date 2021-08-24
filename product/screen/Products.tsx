import * as React from "react";

import Card from "../components/Card";
import {Product} from "../types";
import {addProduct} from "../reducer";

interface Props {
  products: Product[];
}

const StoreScreen: React.FC<Props> = ({products}) => (
  <div className="mt-24 mb-12">
    {products.length && (
      <div className="flex h-full bg-black flex-col lg:flex-row items-center justify-evenly mx-8">
        {products.map((product) => {
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
    )}
  </div>
);

export default StoreScreen;
