import Image from "next/image";
import React, {useState} from "react";

import {useAppDispatch} from "../../../app/hooks";
import {removeProduct, setProducts} from "../../../services/products";
import {Product} from "../types";

interface Props {
  product: Product;
}

const Card: React.FC<Props> = ({product}) => {
  const [isAdded, setisAdded] = useState(false);
  const dispatch = useAppDispatch();

  const handleProduct = () => {
    if (!isAdded) {
      setisAdded(!isAdded);
      dispatch(setProducts(product));

      return;
    }
    setisAdded(!isAdded);
    dispatch(removeProduct(product));
  };

  return (
    <div
      key={product.id}
      className={`hover:scale-125 cursor-pointer hover:drop-shadow-3xl ${
        isAdded ? "border-2 border-emerald-500" : "border-0"
      }`}
      style={{
        background: "linear-gradient(180deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
      }}
      onClick={handleProduct}
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
