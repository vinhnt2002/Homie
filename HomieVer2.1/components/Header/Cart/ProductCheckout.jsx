import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotal,
} from "@/redux/reducers/cartSlice";
import classes from "./CartPage.module.css";

const ProductCheckout = ({
  name,
  sellingPrice,
  picUrl,
  amount,
  sku,
}) => {
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);



  const formattedPrice = sellingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  const totalProductPrice = sellingPrice * amount;
  const formatTotalProductPrice = totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      <td className="product-thumbnail text-start">
        <Link href="#">
          <img src={picUrl} alt={name} style={{ width: '60%', height: '55%' }} />
        </Link>
      </td>
      <td className="product-name" data-title="SẢN PHẨM">
        <div className="m-1">
          <Link className={classes.name} href="#">
            {name}
          </Link>
        </div>
        <div className="m-2">
          <h6>SKU: {sku} </h6>
        </div>
      </td>
      <td className="product-price text-center" data-title="Price">
        {formattedPrice}
      </td>
      <td className="product-quantity text-center" data-title="Quantity">
        {amount}
      </td>
      <td className="product-subtotal text-center px-0" data-title="Total">
        {formatTotalProductPrice}
      </td>
    </tr>
  );
};

export default ProductCheckout;
