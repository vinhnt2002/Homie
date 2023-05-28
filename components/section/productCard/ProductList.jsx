import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../../../data/product.json"

const ProductList = () => {
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  return (
    <>
      {productData.map((product, index) => (
        <div key={index}>
          <Link href="/detail">
            <ProductCard
              productData = {product}
              showProductActionBox={showProductActionBox}
            />
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductList;
