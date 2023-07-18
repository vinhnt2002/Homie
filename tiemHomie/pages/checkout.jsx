import React, { useState, useEffect } from "react";
import classes from "../styles/Cart.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal, removeItem } from "@/redux/reducers/cartSlice";
import ProductCardPage from "../components/Header/Cart/ProductCartPage";
import ProductCartSidebar from "../components/Header/Cart/ProductCartSidebar";
import axios from "axios";
import ProductCheckout from "../components/Header/Cart/ProductCheckout";
import { store } from "@/redux/store";
import {removeAllFromCheckout} from "@/redux/reducers/checkoutSlice"

const CheckoutForm = () => {
  const [data, setData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [ward, setWard] = useState([]);
  const [showOtherAddress, setShowOtherAddress] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    billingProvince: "",
    billingDistrict: "",
    billingWard: "",
    billingAddress: "",
    notes: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    billingProvince: "",
    billingDistrict: "",
    billingWard: "",
    billingAddress: "",
  });

  // Validation rules
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Check if fields are empty
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Họ và tên không được để trống";
      isValid = false;
    }

    const phoneNumberPattern = /^[0][0-9]{9}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Số điện thoại phải bắt đầu bằng số 0 và gồm 10 chữ số";
      isValid = false;
    }

    if (formData.billingProvince.trim() === "") {
      newErrors.billingProvince = "Vui lòng chọn Tỉnh thành";
      isValid = false;
    }

    if (formData.billingDistrict.trim() === "") {
      newErrors.billingDistrict = "Vui lòng chọn Quận, huyện";
      isValid = false;
    }

    if (formData.billingWard.trim() === "") {
      newErrors.billingWard = "Vui lòng chọn Phường, xã";
      isValid = false;
    }

    if (formData.billingAddress.trim() === "") {
      newErrors.billingAddress = "Vui lòng nhập địa chỉ cụ thể";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


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
    setFormData((prevData) => ({
      ...prevData,
      billingProvince: selectedProvinceCode,
    }));

    // Gọi API để lấy danh sách quận, huyện dựa trên tỉnh, thành phố đã chọn
    axios
      .get(
        `https://provinces.open-api.vn/api/p/${selectedProvinceCode}?depth=2`
      )
      .then((response) => {
        setDistricts(response.data.districts);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };

  const handleDistrictChange = (event) => {
    const selectedCity = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      billingDistrict: selectedCity,
    }));
    // Gọi API để lấy danh sách xã dựa trên quận, huyện đã chọn
    axios
      .get(`https://provinces.open-api.vn/api/d/${selectedCity}?depth=2`)
      .then((response) => {
        setWard(response.data.wards);
      })
      .catch((error) => {
        console.error("Error fetching wards:", error);
      });
  };

  const handleWardChange = (event) => {
    const selectedWard = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      billingWard: selectedWard,
    }));
  };

  // console.log(districts)

  const { products, totalPriceCheckout, checkoutAmount } = useSelector(
    (store) => store.checkout
  );
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);

  var formattedTotalCheckout =
    totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  var formattedNum =
    totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";


    const onCheckout = async () => {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        productIds: products.map((item) => item.id)
      })
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, perform submission logic here
      console.log("Form is valid:", formData);
    } else {
      // Form is not valid, display error messages or handle them as needed
      console.log("Form is not valid. Please check the fields.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      </div>

      <div className="container bg-light pb-3">
        <div className="billingAddress bg-white py-4">
          <div className="d-flex align-items-center billingTitle p-2">
            <MdLocationPin style={{ color: "#f79c43" }} />
            <h5 style={{ color: "#f79c43" }} className="m-0">
              Địa chỉ nhận hàng
            </h5>
          </div>
          <div className="billingInformation d-flex justify-content-between flex-wrap text-body">
            <form action="" className="d-flex" onSubmit={handleSubmit}>
              <div className="container w-60">
                <div className="d-flex justify-content-between flex-wrap">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Họ và tên"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && (
                    <p className= {classes.errorMessage} >{errors.fullName}</p>
                  )}
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Số điện thoại"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && (
                    <p className={classes.errorMessage}>{errors.phoneNumber}</p>
                  )}
                </div>
                <div className=" container d-flex flex-wrap px-0 mt-3">
                  <div className="form-group mb-3 w-100 " id="province">
                    {/* <label htmlFor="province"></label> */}
                    <div className="custom_select">
                      <select
                        className="form-control"
                        id="billingProvince"
                        onChange={handleProvinceChange}
                        name="billingProvince"
                        value={formData.billingProvince}
                      >
                        <option value="" disabled selected>
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
                  {errors.billingProvince && (
                    <p className={classes.errorMessage}>{errors.billingProvince}</p>
                  )}
                  <div
                    className="form-group mb-3 w-100"
                    id="city"
                    onChange={handleDistrictChange}
                    disabled={!provinces.length}
                  >
                    {/* <label htmlFor="city"></label> */}
                    <div className="custom_select">
                      <select
                        className="form-control"
                        id="billingDistrict"
                        onChange={handleDistrictChange}
                        name="billingDistrict"
                        value={formData.billingDistrict}
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
                  {errors.billingDistrict && (
                    <p className={classes.errorMessage}>{errors.billingDistrict}</p>
                  )}
                  <div
                    className="form-group mb-3 w-100"
                    id="district"
                    disabled={!districts.length || !provinces.length}
                  >
                    {/* <label htmlFor="district"></label> */}
                    <div className="custom_select">
                      <select
                        className="form-control"
                        id="billingWard"
                        name="billingWard"
                        onChange={handleWardChange}
                        value={formData.billingWard}
                      >
                        <option value="">Phường, xã</option>
                        {ward.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.billingWard && (
                      <p className={classes.errorMessage}>{errors.billingWard}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Địa chỉ cụ thể"
                    name="billingAddress"
                    id="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                  />
                    <p className={classes.errorMessage}>{errors.billingAddress}</p>

                </div>
              </div>
              <div className="form-group w-50 ">
                <textarea
                  rows={14}
                  className="form-control"
                  placeholder="Ghi chú (tuỳ chọn)"
                  defaultValue={""}
                  
                />
              </div>
            </form>
          </div>
        </div>

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
                    required
                    type="radio"
                    name="payment_option"
                    id="exampleRadios3"
                    defaultValue="option3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="exampleRadios3"
                  >
                    Chuyển khoản qua ngân hàng
                  </label>

                  <div>
                    Chuyển khoản vào STK: 123456789 <br />
                    Ngân Hàng :
                  </div>
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
                    className="form-check-label text-muted"
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
            <div className="d-flex align-items-center justify-content-center col-6">
              <button className="btn btn-fill-out" onClick={handleSubmit}>

              Đặt hàng 

              </button>
              {/* <Link href="/payment" className="btn btn-fill-out">
                Đặt hàng
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
