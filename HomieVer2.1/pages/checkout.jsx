import React, { useEffect } from "react";
import classes from "../styles/Cart.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal, } from "@/redux/reducers/cartSlice";
import axios from "axios";
import ProductCheckout from "../components/Header/Cart/ProductCheckout";
import { useSearchParams } from "next/navigation";
import { removeAllFromCheckout, updateTotalCheckout } from "@/redux/reducers/checkoutSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const CheckoutForm = () => {
  const { products, totalPriceCheckout, checkoutAmount } = useSelector(
    (store) => store.checkout
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);


  useEffect(() => {
    dispatch(updateTotalCheckout());
  }, [products, useDispatch()]);

  var formattedTotalCheckout =
    totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

  const searchParams = useSearchParams();
  const customId = "custom-id-yes";

  useEffect(() => {
    if (searchParams.get("success")) {

      toast.success('Thanh toán thành công!', {
        toastId: customId,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      dispatch(removeAllFromCheckout());

      formattedTotalCheckout = 0;
    }

    if (searchParams.get("canceled")) {
      toast.error('Có lỗi xảy ra trong quá trình thanh toán!', {
        toastId: customId,
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [searchParams]);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: products.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };
  return (
    <>
      <div>
        <BreadCrumb
          title="Thanh toán"
          descriptionTitle="Giỏ hàng của bạn"
          middlePath="Giỏ hàng"
        />
      </div>
      <div className="container bg-light pb-3">
        <div
          className={`${classes.tableProduct} billingDetail bg-white mt-3 pt-3`}
        >
          <div className="text-body">
            <table className="table">
              <thead>
                <tr className="">
                  <th className="product-name">SẢN PHẨM</th>
                  <th></th>
                  <th className="product-price text-center">GIÁ</th>
                  <th className="product-quantity text-center">SỐ LƯỢNG</th>
                  <th className="product-subtotal text-center">TỔNG CỘNG</th>
                  <th className="product-remove"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <ProductCheckout
                    key={new Date().getTime() + Math.random()}
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
            <div className="container">
              <div className="d-flex justify-content-end me-5">
                <p className="me-5">
                  Tổng thanh toán ({checkoutAmount} sản phẩm):
                </p>
                <p style={{ color: "#f79c43" }}> {formattedTotalCheckout} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-3 ">
          <div className="heading_s1 p-2">
            <h4 className="w-100 ">Phương thức thanh toán</h4>
          </div>
          <div className="d-flex pb-3">
            <div className="d-grid ms-2 col-6">
              <div className="payment_option">
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment_option"
                    id="exampleRadios4"
                    defaultValue="option4"
                    defaultChecked
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="exampleRadios4"
                  >
                    Thanh toán quốc tế
                  </label>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center col-6">
                {checkoutAmount ?
                  (<>
                    <button className="btn btn-fill-out" onClick={onCheckout}>
                      Đặt hàng
                    </button>
                  </>) :
                  (<>
                    <button className="btn btn-fill-out">
                      <Link href="/">
                        Về trang chủ
                      </Link>
                    </button>
                  </>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
