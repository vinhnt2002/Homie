import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "@/redux/reducers/cartSlice";


const ProductCartSidebar = ({ name, price, amount }) => {
  const { products } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);

  const totalProductPrice = price * amount;
  const formatTotalProductPrice =
    totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <>
      <tr>
        <td>
          {name}
          <span className="product-qty"> &times; {amount} </span>
        </td>
        <td>
          {formatTotalProductPrice}
        </td>
      </tr>
    </>
  );
};

export default ProductCartSidebar;
