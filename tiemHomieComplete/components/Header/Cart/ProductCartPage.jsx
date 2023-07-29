import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotal,
  removeItem,
  incrementAmount,
  decrementAmount,
} from "@/redux/reducers/cartSlice";
import classes from "./CartPage.module.css";
import { addProduct, removeProduct, incrementCheckoutAmount, decrementCheckoutAmount } from "@/redux/reducers/checkoutSlice";


const ProductCardPage = ({
  id,
  name,
  sellingPrice,
  picUrl,
  amount,
  handleQuantityChange,
  sku,
}) => {
  const { products, total } = useSelector((store) => store.cart);
  const { products: checkoutProducts } = useSelector(
    (store) => store.checkout
  );
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(checkoutProducts.some((p) => p.sku === sku));

  
  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    if (checked) {
      dispatch(addProduct({ product: {id, picUrl, name, sellingPrice, attribute:{amount}, sku } }));
    } else {
      dispatch(removeProduct({ productId: sku }));
    }
  };

  const handleDecrease = (e) => {
    if (amount === 1) {
      dispatch(removeItem({ name }));
      dispatch(removeProduct({ productId: sku }));
      return;
    }else
    dispatch(decrementAmount({ name }));
    dispatch(decrementCheckoutAmount({ name }));
  }

  const handleIncrease = (e) => {
    dispatch(incrementAmount({ name }));
    dispatch(incrementCheckoutAmount({ name }));
  }

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItem({ name }))
    dispatch(removeProduct({ productId: sku }));
  }

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);



  const formattedPrice =
    sellingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  const totalProductPrice = sellingPrice * amount;
  const formatTotalProductPrice =
    totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      <td className="product-thumbnail text-start">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          name="option1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
      <td className="product-thumbnail text-start">
        <Link href="#">
          <img src={picUrl} alt={name} />
        </Link>
      </td>
      <td className="product-name" data-title="Product">
        <div className="m-1">
          <Link className={classes.name} href="#">
            {name}
          </Link>
        </div>
        <div className="m-2">
          <h6>SKU: {sku} </h6>
        </div>
        <div className="m-0">
          <p>
            <TbEdit></TbEdit>Edit
          </p>
        </div>
      </td>
      <td className="product-price" data-title="Price">
        {formattedPrice}
        {/* {price} */}
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity">
          <input
            type="button"
            defaultValue="-"
            className="minus p-0"
            onClick={handleDecrease}
          />
          <input
            type="text"
            name="quantity"
            value={amount}
            title="Qty"
            className="qty"
            size={4}
            onChange={(event) => handleQuantityChange(event.target.value)}
            readOnly
          />
          <input
            type="button"
            defaultValue="+"
            className="plus p-0"
            onClick={handleIncrease}
          />
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        {formatTotalProductPrice}
      </td>
      <td className="product-remove" data-title="Remove">

          <div
            className={classes.remove}
            onClick={handleRemove}
          >
            <i className="ti-close" />
          </div>

      </td>
    </tr>
  );
};

export default ProductCardPage;
