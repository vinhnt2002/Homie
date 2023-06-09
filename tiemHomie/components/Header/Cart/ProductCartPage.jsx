import React, {useEffect} from "react";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal, removeItem } from "@/redux/reducers/cartSlice";
import classes from './CartPage.module.css'


const ProductCardPage = ({ name, price, image, amount}) => {

    

    const { products, total } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(updateTotal());
    }, [products, useDispatch()]);
  
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
    const totalProductPrice = price * amount;
    const formatTotalProductPrice = totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
        <tr>
          <td className="product-thumbnail text-start">
            <Link href="#">
              <img
                src={image}
                alt= {name}
              />
            </Link>
          </td>
          <td className="product-name" data-title="Product">
            <div className="m-1">
              <Link className={classes.name} href="#">
                {name}
              </Link>
            </div>
            <div className="m-2">
              <h6>SKU: 290397</h6>
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
                type="text"
                name="quantity"
                value={amount}
                title="Qty"
                className="qty"
                size={4}
              />
            </div>
          </td>
          <td className="product-subtotal" data-title="Total">
             {formatTotalProductPrice}
          </td>
          <td className="product-remove" data-title="Remove">
            <Link href="#">
              <div
                className={classes.remove}
                onClick={() => {
                  dispatch(removeItem({ name }));
                }}
              >
                <i className="ti-close" />
              </div>
            </Link>
          </td>
        </tr>
  );
};

export default ProductCardPage;
