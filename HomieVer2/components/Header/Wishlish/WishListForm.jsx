import React from "react";
import style from "./WishList.module.css";
import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const WishListForm = ({ handleWishlistClose }) => {
  const { wishList } = useSelector((store) => store.cart);
  const wishListAmount = useSelector((store) => store.cart.wishlistAmount);

  const dispatch = useDispatch();

  return (
    <div>
      <div className={style.cartHeading}>
        <h4 className={style.cartTitle}>Mục ưa thích</h4>
        <div className={style.cartBtnClose} 
        onClick={handleWishlistClose}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className={style.drawerInner}>
        <div className={style.cartSideContainer}>
          <form action="">
            { wishListAmount > 0 ? (
              <>
                <div className={style.cartBody}>
                  {wishList ? (
                    wishList.map((item) => (
                      <WishList
                        key={new Date().getTime() + Math.random()}
                        name={item.name}
                        price={item.sellingPrice}
                        image={item.picUrl}
                        amount={item.attribute.amount}
                        sku={item.code}
                        handleQuantityChange={(newQuantity) =>
                          handleQuantityChange(item.id, newQuantity)
                        }
                      />
                    ))
                  ) : (
                    <p>Loading products...</p>
                  )}
                </div>
              </>
             ) : (
              <div className={style.cartBody}>Không có gì trong mục ưa thích</div>
            )}
          </form>
        </div>
      </div>
    </div>


  );
};

export default WishListForm;
