import Image from "next/image";
import * as React from "react";

interface Props {
  product: string;
}

const Preview: React.FC<Props> = ({product}) => {
  const parsedProduct = JSON.parse(product);

  return (
    <div key={parsedProduct.id} className="lg:m-8 lg:p-4 p-4 mx-1 border flex flex-row">
      <div
        className="flex w-2/3"
        style={{
          background: "linear-gradient(180deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
      >
        <Image alt={parsedProduct.title} height={231} src={`/${parsedProduct.image}`} width={234} />
      </div>
      <div className="flex flex-col">
        <p className="text-4xl whitespace-nowrap">{parsedProduct.title.toUpperCase()}</p>
        <p className="text-xl whitespace-nowrap" style={{color: "#999999"}}>
          Unisex Basic Softstyle T-Shirt
        </p>
        <p className="text-5xl">{parsedProduct.price}</p>
      </div>
    </div>
  );
};

export default Preview;
