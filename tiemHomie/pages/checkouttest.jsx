import React, { useState, useEffect } from "react";
import classes from "../styles/Cart.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal, removeItem } from "@/redux/reducers/cartSlice";
import ProductCardPage from "../components/Header/Cart/ProductCartPage";
import ProductCartSidebar from "../components/Header/Cart/ProductCartSidebar";
import axios from "axios";

const Coupon = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question mt-4 mb-1">
      <header>
        <button
          className="col-12 text-dark border border-1 d-flex justify-content-between align-items-center p-2"
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className="text-start">Mã giảm giá</div>
          <div className="text-end">
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </button>
      </header>
      {showInfo && (
        <div className="border border-1 p-2">
          <form className="col-12">
            <div className="form-group pb-2">
              {/* <label htmlFor="inputCoupon">
                Nhập mã phiếu giảm giá của bạn
              </label> */}
              <input
                type="text"
                className="form-control p-2 me-3"
                id="inputCoupon"
                placeholder="Nhập mã phiếu giảm giá của bạn"
              />
            </div>
            <button
              className={`border-danger btn btn-outline-warning text-body btn-sm pb-2 ${classes.btn}`}
              type="submit"
            >
              Áp dụng mã
            </button>
          </form>
        </div>
      )}
    </article>
  );
};

const Ship = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question mb-1">
      <header>
        <button
          className="col-12 text-dark border border-1 d-flex justify-content-between align-items-center p-2"
          onClick={() => setShowInfo(!showInfo)}
        >
          <div className="text-start">Giá vận chuyển</div>
          <div className="text-end">
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </button>
      </header>
      {showInfo && (
        <div className="border border border-1 p-2">
          <form className="col-12">
            <div className="form-group pb-2">
              {/* <label htmlFor="inputCoupon">
                Nhập mã phiếu giảm giá của bạn
              </label> */}
              <input
                type="text"
                className="form-control p-2 me-3"
                id="inputCoupon"
                placeholder="Nhập mã phiếu giảm giá của bạn"
              />
            </div>
            <button
              className={`border-danger btn btn-outline-warning text-body btn-sm pb-2 ${classes.btn}`}
              type="submit"
            >
              Áp dụng mã
            </button>
          </form>
        </div>
      )}
    </article>
  );
};

const CheckoutForm = () => {
  const [data, setData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [ward, setWard] = useState([]);
  const [showOtherAddress, setShowOtherAddress] = useState(false);

  const handleShowOtherAddress = () => {
    setShowOtherAddress(!showOtherAddress);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách tỉnh, thành phố
    axios
      .get(`https://provinces.open-api.vn/api/`)
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  const handleProvinceChange = (event) => {
    const selectedProvinceCode = event.target.value;

    // Gọi API để lấy danh sách quận, huyện dựa trên tỉnh, thành phố đã chọn
    axios
      .get(
        `https://provinces.open-api.vn/api/p/${selectedProvinceCode}?depth=2`
      )
      .then((response) => {
        setDistricts(response.data.districts);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const handleDistrictChange = (event) => {
    const selectedCity = event.target.value;

    // Gọi API để lấy danh sách xã dựa trên quận, huyện đã chọn
    axios
      .get(`https://provinces.open-api.vn/api/d/${selectedCity}?depth=2`)
      .then((response) => {
        setWard(response.data.wards);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };

  // console.log(districts)

  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, useDispatch()]);

  var formattedTotal =
    total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  var formattedNum =
    total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

  return (
    <>
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
                                name={item.name}
                                price={item.sellingPrice}
                                image={item.picUrl}
                                amount={item.attribute.amount}
                                handleQuantityChange={(newQuantity) =>
                                  handleQuantityChange(item.id, newQuantity)
                                }
                              />
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan={6} className="px-0 p-5">
                                <div className="row g-0 align-items-center">
                                  <div className="col-lg-4 col-md-6 mb-3 mb-md-0 text-start"></div>
                                  <div className="col-lg-8 col-md-6 mb-md-0 text-start  text-md-end">
                                    <button
                                      className={`border-danger btn btn-outline-warning text-body btn-sm me-2 ${classes.btn}`}
                                      type="submit"
                                    >
                                      <Link href="/">Tiếp tục mua sắm</Link>
                                    </button>
                                    {/* <button
                                className={`border-danger btn btn-outline-warning text-body btn-sm  ${classes.btn}`}
                                type="submit"
                              >
                                Cập Nhật Giỏ Hàng
                              </button> */}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row">
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
                                      type="submit"
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

      <div className="section">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-6">
              <div className="toggle_info">
                <span>
                  <i className="fas fa-user" />
                  Returning customer?{" "}
                  <a
                    href="#loginform"
                    data-bs-toggle="collapse"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    Click here to login
                  </a>
                </span>
              </div>
              <div
                className="panel-collapse collapse login_form"
                id="loginform"
              >
                <div className="panel-body">
                  <p>
                    If you have shopped with us before, please enter your
                    details below. If you are a new customer, please proceed to
                    the Billing &amp; Shipping section.
                  </p>
                  <form method="post">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Username Or Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="login_footer form-group mb-3">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="remember"
                            defaultValue
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                      </div>
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="login"
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="toggle_info">
                <span>
                  <i className="fas fa-tag" />
                  Have a coupon?{" "}
                  <a
                    href="#coupon"
                    data-bs-toggle="collapse"
                    className="collapsed"
                    aria-expanded="false"
                  >
                    Click here to enter your code
                  </a>
                </span>
              </div>
              <div className="panel-collapse collapse coupon_form" id="coupon">
                <div className="panel-body">
                  <p>If you have a coupon code, please apply it below.</p>
                  <div className="coupon field_form input-group">
                    <input
                      type="text"
                      defaultValue
                      className="form-control"
                      placeholder="Enter Coupon Code.."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-fill-out btn-sm" type="submit">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12">
              <div className="medium_divider" />
              <div className="divider center_icon">
                <i className="linearicons-credit-card" />
              </div>
              <div className="medium_divider" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="heading_s1">
                <h4>Thông tin mua hàng</h4>
              </div>
              <form method="post">
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="billingEmail"
                    id="billingEmail"
                    placeholder="Email *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="billingName"
                    id="billingName"
                    placeholder="Họ và Tên *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="billingPhone"
                    id="billingPhone"
                    placeholder="Số điện thoại *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="billingAddress"
                    id="billingAddress"
                    required
                    placeholder="Địa chỉ *"
                  />
                </div>

                <div className="form-group mb-3" id="province">
                  {/* <label htmlFor="province"></label> */}
                  <div className="custom_select">
                    <select
                      className="form-control"
                      id="billingProvince"
                      onChange={handleProvinceChange}
                    >
                      <option value="" placeholder="">
                        Tỉnh thành
                      </option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div
                  className="form-group mb-3"
                  id="city"
                  onChange={handleDistrictChange}
                  disabled={!provinces.length}
                >
                  {/* <label htmlFor="city"></label> */}
                  <div className="custom_select">
                    <select
                      className="form-control"
                      id="billingCity"
                      onChange={handleDistrictChange}
                    >
                      <option value="">Quận, huyện</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div
                  className="form-group mb-3"
                  id="district"
                  disabled={!districts.length || !provinces.length}
                >
                  {/* <label htmlFor="district"></label> */}
                  <div className="custom_select">
                    <select className="form-control" id="billingDistrict">
                      <option value="">Phường, xã</option>
                      {ward.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ship_detail">
                  <div className="form-group mb-3">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="differentaddress"
                          onClick={handleShowOtherAddress}
                        />
                        <label
                          className="form-check-label label_info"
                          htmlFor="differentaddress"
                        >
                          <span>Giao hàng đến địa chỉ khác</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {showOtherAddress ? (
                    <div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          required
                          className="form-control"
                          name="shippingName"
                          id="shippingName"
                          placeholder="Họ và Tên *"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="shippingPhone"
                          id="shippingPhone"
                          placeholder="Số điện thoại *"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="shippingAddress"
                          id="shippingAddress"
                          required
                          placeholder="Địa chỉ *"
                        />
                      </div>

                      <div className="form-group mb-3" id="province">
                        {/* <label htmlFor="province"></label> */}
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingProvince"
                            onChange={handleProvinceChange}
                          >
                            <option value="" placeholder="">
                              Tỉnh thành
                            </option>
                            {provinces.map((province) => (
                              <option key={province.code} value={province.code}>
                                {province.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div
                        className="form-group mb-3"
                        id="city"
                        onChange={handleDistrictChange}
                        disabled={!provinces.length}
                      >
                        {/* <label htmlFor="city"></label> */}
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingCity"
                            onChange={handleDistrictChange}
                          >
                            <option value="">Quận, huyện</option>
                            {districts.map((district) => (
                              <option key={district.code} value={district.code}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div
                        className="form-group mb-3"
                        id="district"
                        disabled={!districts.length || !provinces.length}
                      >
                        {/* <label htmlFor="district"></label> */}
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingDistrict"
                          >
                            <option value="">Phường, xã</option>
                            {ward.map((district) => (
                              <option key={district.code} value={district.code}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="form-group mb-0">
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Ghi chú (tuỳ chọn)"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="order_review">
                <div className="heading_s1">
                  <h4>Đơn hàng ({amount} sản phẩm)</h4>
                </div>
                <div className="table-responsive order_table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <ProductCartSidebar
                          key={new Date().getTime() + Math.random()}
                          name={item.name}
                          price={item.sellingPrice}
                          image={item.picUrl}
                          amount={item.attribute.amount}
                          handleQuantityChange={(newQuantity) =>
                            handleQuantityChange(item.id, newQuantity)
                          }
                        />
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tạm tính</th>
                        <td className="product-subtotal"> {formattedTotal} </td>
                      </tr>
                      <tr>
                        <th>Phí vận chuyển</th>
                        <td>Miễn phí</td>
                      </tr>
                      <tr>
                        <th>Thành tiền</th>
                        <td className="product-subtotal"> {formattedTotal} </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment_method">
                  <div className="heading_s1">
                    <h4>Phương thức thanh toán</h4>
                  </div>
                  <div className="payment_option">
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        required
                        type="radio"
                        name="payment_option"
                        id="exampleRadios3"
                        defaultValue="option3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios3"
                      >
                        Chuyển khoản qua ngân hàng
                      </label>
                      {/* <p data-method="option3" className="payment-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.{" "}
                      </p> */}
                    </div>
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios4"
                        defaultValue="option4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios4"
                      >
                        Thanh toán khi nhận hàng (COD)
                      </label>
                      {/* <p data-method="option4" className="payment-text">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p> */}
                    </div>
                    {/* <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios5"
                        defaultValue="option5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios5"
                      >
                        Paypal
                      </label>
                    </div> */}
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center">
                  <Link href="/" className="col">
                    <GrFormPrevious />
                    <span>Tiếp Tục mua sắm</span>
                  </Link>
                  <a href="#" className="btn btn-fill-out">
                    Đặt hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
