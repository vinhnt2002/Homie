import { useDispatch } from "react-redux";
import style from "./Cart.module.css";
import {
  incrementAmount,
  decrementAmount,
  removeItem,
} from "@/redux/reducers/cartSlice";
import { removeProduct, incrementCheckoutAmount, decrementCheckoutAmount } from "@/redux/reducers/checkoutSlice";
import Link from "next/link";
import slugify from "slugify";


const Product = ({id, name, price, image, amount, sku, handleQuantityChange }) => {
  const dispatch = useDispatch();

  var formattedPrice =
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

    function createSlugFromTitle(title) {
      const slug = slugify(title, {
        replacement: "-",
        lower: true,
        strict: true,
      });
      return slug;
    }

    const handleDecrease = (e) => {
      e.preventDefault();
      if (amount === 1) {
        dispatch(removeItem({ id }));
        dispatch(removeProduct({ productId: sku }));
        return;
      }else
      dispatch(decrementAmount({ name }));
      dispatch(decrementCheckoutAmount({ name }));
    }
  
    const handleIncrease = (e) => {
      e.preventDefault();
      dispatch(incrementAmount({ name }));
      dispatch(incrementCheckoutAmount({ name }));
    }
  
    const handleRemove = (e) => {
      e.preventDefault();
      dispatch(removeItem({ id }));
      dispatch(removeProduct({ productId: sku }));
    }
  


  return (
    <>
      <div className={style.cartRow}>
        <Link
          href={`/product/${createSlugFromTitle(name)}-${sku}`}
        >
          <img src={image} alt={name} />
        </Link>
        <div className={style.cartInfo}>
          <div className={style.cartName}>
            <Link href={`/product/${createSlugFromTitle(name)}-${sku}`} className={style.cartProductName}>
              {name}
            </Link>
            <span className={style.varientTitle}>Nâu</span>
          </div>
          <div className={style.flex}>
            <div className="col col-6">
              <label className={style.cartQuantity}>Số lượng</label>
              <div className={style.inputGroupBtn}>
                <button
                  type="button"
                  className={style.btnMinus}
                  onClick={handleDecrease}
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  type="text"
                  className={style.productQuantity}
                  value={amount}
                  onChange={(event) => handleQuantityChange(event.target.value)}
                  readOnly
                />
                <button
                  type="button"
                  className={style.btnPlus}
                  onClick={handleIncrease}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className={`${style.flexRight} col col-6`}>
              <span className={style.productPrice}> {formattedPrice} </span>
              <a
                href="#"
                className={style.btnRemove}
                onClick={handleRemove}
              >
                Xoá
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Product;
