import Image from "next/image";
import * as React from "react";

import {useAppSelector} from "../../../app/hooks";
import {Product} from "../types";

const Preview: React.VoidFunctionComponent = (): JSX.Element => {
  const products: Product[] = useAppSelector((state) => state.products);

  const cardPreview = (
    <>
      {products.map((product: Product) => (
        <div key={product.id} className="lg:m-8 lg:p-4 p-4 mx-1 border flex flex-row">
          <div
            className="flex w-2/3"
            style={{
              background: "linear-gradient(180deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
            }}
          >
            <Image alt={product.title} height={231} src={`/${product.image}`} width={234} />
          </div>
          <div className="flex flex-col">
            <p className="text-4xl whitespace-nowrap">{product.title.toUpperCase()}</p>
            <p className="text-xl whitespace-nowrap" style={{color: "#999999"}}>
              Unisex Basic Softstyle T-Shirt
            </p>
            <p className="text-5xl">{product.price}</p>
          </div>
        </div>
      ))}
    </>
  );

  return cardPreview;
};

export default Preview;
