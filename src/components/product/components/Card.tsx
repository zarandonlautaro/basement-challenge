import Image from "next/image";
import React from "react";

import {Product} from "../types";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const Card: React.FC<Props> = ({product, onAdd}) => {
  return (
    <div
      key={product.id}
      className="hover:scale-125 cursor-pointer hover:drop-shadow-3xl"
      style={{
        background: "linear-gradient(180deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
      }}
      onClick={() => onAdd(product)}
    >
      <div className="flex justify-center border-b-2">
        <Image alt={product.title} height={359.9} src={`/${product.image}`} width={279.81} />
      </div>
      <div className="flex flex-row bg-black justify-between">
        <div>
          <p>{product.title}</p>
        </div>
        <div>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
