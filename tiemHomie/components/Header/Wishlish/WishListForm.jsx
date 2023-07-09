import React from "react";
import style from "./WishList.module.css";
import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const WishListForm = ({ handleWishListDropdown }) => {
  const { wishList } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={style.cartHeading}>
        <h4 className={style.cartTitle}>Mục ưa thích</h4>
        <div className={style.cartBtnClose} 
        onClick={handleWishListDropdown}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className={style.drawerInner}>
        <div className={style.cartSideContainer}>
          <form action="">
            {/* {amount > 0 ? ( */}
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
                {/* <div className={style.cartFooter}>
                  <div className={style.subTotal}>
                    <div>Tổng tiền:</div>
                    <div>
                      <span className={style.totalPrice}>{formattedTotal}</span>
                      <span className={style.totalQuantity}>{totalQuantity}</span>
                    </div>
                  </div>
                  <div className={style.checkoutBtn}>
                    <button>
                      <Link href="/cart">Xem giỏ hàng</Link>
                    </button>
                  </div>
                </div> */}
              </>
            {/* ) : (
              <div className={style.cartBody}>Giỏ hàng của bạn không có gì</div>
            )} */}
          </form>
        </div>
      </div>
    </div>

    // <div className={style.body}>
    //   {wishList ? (
    //     wishList.map((item) => (
    //       <WishList
    //         key={new Date().getTime() + Math.random()}
    //         name={item.name}
    //         price={item.sellingPrice}
    //         image={item.picUrl}
    //         amount={item.attribute.amount}
    //         sku={item.code}
    //         handleQuantityChange={(newQuantity) =>
    //           handleQuantityChange(item.id, newQuantity)
    //         }
    //       />
    //     ))
    //   ) : (
    //     <p>Loading products...</p>
    //   )}
    // </div>
  );
};

export default WishListForm;
