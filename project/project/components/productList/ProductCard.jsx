import React from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    imageSrc: "/assets/images/image-14@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  {
    id: 2,
    imageSrc: "/assets/images/image-15@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  {
    id: 3,
    imageSrc: "/assets/images/image-16@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  {
    id: 4,
    imageSrc: "/assets/images/image-17@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  {
    id: 5,
    imageSrc: "/assets/images/product-img1jpg@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  {
    id: 1,
    imageSrc: "/assets/images/product-img1jpg1@2x.png",
    name: "Product Name",
    price: "190.000VND",
    description: "Desc",
    originalPrice: "200.000VND",
  },
  // Add more objects as needed
];


const ProductCart = () => {
  return (
    <Link href="/product/1" className="w-[252px] h-[390px]">
      <Image src="/assets/images/image-14@2x.png" 
       width={250}
       height={250}
       alt="product img"
      />
      <div>
        <h2>Product Name</h2>
        <div>
          <span>190.000VND</span>
          <p>Desc</p>
          <span>200.000VND</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
