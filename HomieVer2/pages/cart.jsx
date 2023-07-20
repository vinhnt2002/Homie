import React, { useState, useEffect } from "react";
import classes from "../styles/Cart.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotal,
  removeItem,
  clearCart,
} from "@/redux/reducers/cartSlice";
import {addAllToCheckout, removeAllFromCheckout, updateTotalCheckout} from "@/redux/reducers/checkoutSlice";

import ProductCardPage from "../components/Header/Cart/ProductCartPage";

const cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const {products, totalPriceCheckout, checkoutAmount} = useSelector((store) => store.checkout);
  const { userInfo } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    if (isChecked) {
      dispatch(removeAllFromCheckout());
    } else {
      dispatch(removeAllFromCheckout());
      dispatch(addAllToCheckout(cartItems));
    }
    setIsChecked(!isChecked);
  };

  const handleClearCart = (e) => {
      e.preventDefault();
      dispatch(clearCart());
      dispatch(removeAllFromCheckout());
  }

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, useDispatch()]);


  useEffect(() => {
    dispatch(updateTotalCheckout());
  }, [products, useDispatch()]);

  var formattedTotal =
    total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  var formattedNum =
    total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  var formattedTotalCheckout = 
  totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <div>
      <BreadCrumb
        // className="d-flex justify-content-center"
        // href="/checkout"
        title="Thanh toán"
        descriptionTitle="Giỏ hàng của bạn"
        middlePath="Giỏ hàng"
      />
      {amount > 0 ? (
        <>
          <div className="main_content">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive shop_cart_table">
                      <table className="table">
                        <thead>
                          <tr className="border-top border-bottom border-dark">
                            <th className="px-0 p-5 product-thumbnail">
                              &nbsp;
                            </th>
                            <th className="product-name">SẢN PHẨM</th>
                            <th className="product-price">GIÁ</th>
                            <th className="product-quantity">SỐ LƯỢNG</th>
                            <th className="product-subtotal">TỔNG CỘNG</th>
                            <th className="product-remove"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item, index) => (
                            <ProductCardPage
                              key={new Date().getTime() + Math.random()}
                              id= {item.id}
                              name={item.name}
                              sellingPrice={item.sellingPrice}
                              picUrl={item.picUrl}
                              amount={item.attribute.amount}
                              sku={item.sku}
                              handleQuantityChange={(newQuantity) =>
                                handleQuantityChange(item.id, newQuantity)
                              }
                            />
                          ))}
                        </tbody>
                        
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row bg-light py-2">
                  <div className="col-md-5 ms-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        defaultValue="something"
                        value={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">
                        Chọn tất cả ({amount} sản phẩm)
                      </label>
                    </div>
                    <div className="ms-3 mt-4">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={handleClearCart}
                      >
                        Xoá tất cả
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-end">
                      <p className="me-5">
                        Tổng thanh toán ({checkoutAmount} sản phẩm)
                      </p>
                      <p> {formattedTotalCheckout} </p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="">
                        <Link
                          href="/"
                          className={`border-danger btn btn-outline-warning text-body btn-sm me-4 ${classes.btn}`}
                        >
                          Tiếp tục mua sắm
                        </Link>
                      </div>


                      { userInfo ? (<>
                        <div className="">
                        <Link
                          href="/checkout"
                          className={`border-danger btn btn-outline-warning text-body btn-sm me-3 ${classes.btn}`}
                        >
                          Mua hàng
                        </Link>
                      </div>
                      </>):
                       (<>
                       <div className="">
                        <Link
                          href="/checkout"
                          className={`border-danger btn btn-secondary text-body btn-sm me-3 pe-none ${classes.btn}`}
                        >
                          Mua hàng
                        </Link>
                        <p className="pt-1 text-danger" > <Link className="text-danger" href="login">Đăng nhập</Link>  để có thể mua hàng</p>
                      </div>
                       </>)}

                      
                    </div>

                    {/* <div className="mt-4">
                      <div className="heading_s1 mb-3">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="cart_total_label text-end">
                                  Tổng thanh toán({amount} sản phẩm)
                                </td>
                                <td className="cart_total_amount text-end">
                                  {formattedTotal}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="d-flex justify-content-end">
                          <div className="">
                            <Link
                              href="/"
                              className={`border-danger btn btn-outline-warning text-body btn-sm me-4 ${classes.btn}`}
                            >
                              Tiếp tục mua sắm
                            </Link>
                          </div>
                          <div className="">
                            <Link
                              href="#"
                              className={`border-danger btn btn-outline-warning text-body btn-sm me-3 ${classes.btn}`}
                            >
                              Mua hàng
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main_content">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive shop_cart_table">
                      <table className="table">
                        <tfoot>
                          <tr>
                            <td colSpan={6} className="px-0 p-5">
                              <div className="row g-0 align-items-center">
                                <div className="col-lg-6 col-md-6 mb-3 mb-md-0 text-end">
                                  <p>Giỏ hàng của bạn không có gì</p>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-md-0 text-start  text-md-center">
                                  <button
                                    className={`border-danger btn btn-outline-warning text-body btn-sm ${classes.btn}`}
                                  >
                                    <Link href="/">Tiếp Tục mua sắm</Link>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-5">
                    <Coupon></Coupon>
                    <Ship></Ship>
                  </div>
                  <div className="col-md-7">
                    <div className="mt-4">
                      <div className="heading_s1 mb-3">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="cart_total_label text-end">
                                  Tổng cộng
                                </td>
                                <td className="cart_total_amount text-end">
                                  {formattedTotal}
                                </td>
                              </tr>
                              <tr className="border-black border-top border-bottom">
                                <td className="cart_total_label text-end">
                                  Phí vận chuyển
                                </td>
                                <td className="cart_total_amount text-end">
                                  Miễn phí
                                </td>
                              </tr>
                              <tr className="border-black border-top border-bottom">
                                <td className="cart_total_label text-end">
                                  Tổng đơn hàng
                                </td>
                                <td className="cart_total_amount text-end">
                                  {formattedTotal}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-end">
                          <Link
                            href="#"
                            className={`border-danger btn btn-outline-warning text-body btn-sm ${classes.btn}`}
                          >
                            Hoàn tất thanh toán
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
};

export default cart;
