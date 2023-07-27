import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CheckoutRow = ({ products, phone, address, total, isPaid }) => {
  return (
    <>
      <tr>
        <td>
          {/* Assuming each product has a name property, you can display it here */}
          {products.map((item, index) => (
            <div key={item.id}>
              {item.product.name}
              {index < products.length - 1 && ", "}
            </div>
          ))}
        </td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>{total}</td>
        <td>{isPaid ? "Đã thanh toán" : "Chưa thanh toán"}</td>
      </tr>
    </>
  );
};

export default CheckoutRow;
