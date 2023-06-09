"use client";
import Image from "next/image";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart} from "@/redux/reducers/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.success('Thêm vào giỏ hàng thành công!!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}


const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductCard = ({
  productData,
  showProductActionBox,
  showSaleOfprice,
}) => {
  // const {  attribute :  {p, imageUrl, title, price, salePercent, rating, del, description, rating_num} } = productData;

  const dispatch = useDispatch();


  return (
    <div className="m-1">
    <ToastContainer />
      <Link href={`/${productData.code}`}>
        <div className="product">
          {/* <span className="pr_flash">New</span> */}
          <div className="product_img text-center">
            <div>

              <Link href="/shop_left">
              <div className={Styles.img}>
                  <Image height={200} width={200}  src={productData.picUrl} alt={productData.name} />
                </div>
              </Link>
              {showProductActionBox && (
                <div className="product_action_box">
                  <ul className="list_none pr_action_btn">
                    <li className="add-to-cart" 
                    onClick={() => {
                      dispatch(
                        addToCart({
                          name: productData.name,
                          sellingPrice: productData.sellingPrice,
                          picUrl: productData.picUrl,
                          attribute: {
                            amount: 1,
                          },
                        }));
                        notify();

                    }}>
                      <Link href="/"
                      >
                        
                        <i className="icon-basket-loaded" onClick={() => {
                          notify();
                        }} /> Add To Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="popup-ajax">
                        <i className="icon-shuffle" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="popup-ajax">
                        <i className="icon-magnifier-add" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="icon-heart" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="product_info ">
            <div className={Styles.downClass}>
              <div className={Styles.productTitle}>
                <h6
                  className="product_title"
                  style={{ color: "#292B2C", textDecoration: "none" }}
                >
                  <Link
                    href="#"
                    style={{ color: "#292B2C", textDecoration: "none" }}
                  >
                    {productData.name}
                  </Link>
                </h6>
              </div>

              <div className={Styles.desSize}>
                <div className="pr_desc d-block">
                  <div className={Styles.overF}>
                    <p>
                      {productData.description}
                      {/* Màu đỏ cầu sức khoẻ, bình an, xua đuổi các việc không may. Màu trắng kêu gọi tài khí, phúc khí, mời gọi nhân duyên tốt lành, tài lộc cho gia chủ.... */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="product_price">
                <div className="">
                  <span className="price">
                    {formatPrice(productData.sellingPrice)} VND
                  </span>
                  <br></br>

                  {/* {productData.orginal_price && (
                  <>
                    <div>
                      <del>{productData.orginal_price} VND </del>
                    </div>
                    <div className="on_sale">
                      <span>{productData.salePercent} Off</span>
                    </div>
                  </>
                )} */}

                  {showSaleOfprice && (
                    <del className="">
                      {formatPrice(productData.sellingPrice)} VND
                    </del>
                  )}
                </div>
                <div className="on_sale">
                  {showSaleOfprice && (
                    <span>{productData.sellingPrice} Off</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
