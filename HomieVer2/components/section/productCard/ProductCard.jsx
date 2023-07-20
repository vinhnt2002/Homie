"use client";
import Image from "next/image";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "@/redux/reducers/cartSlice";

import slugify from "slugify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function createSlugFromTitle(title) {
  const slug = slugify(title, {
    replacement: "-",
    lower: true,
    strict: true,
  });
  return slug;
}

const notify = () => {
  toast.success("Thêm vào giỏ hàng thành công!!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const notifyWishlist = () => {
  toast('❤️ Đã thêm vào danh sách ưa thích!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
};

  // const handleClick = (e) => {
  //   e.preventDefault();
  // }

  

const formatPrice = (price) => {
  if (price === undefined) {
    return "undefined"; // or any default value you want to display for undefined prices
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductCard = ({
  productData,
  showProductActionBox,
  showSaleOfprice,
}) => {

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
  
    dispatch(
      addToCart({
        id:productData.id,
        name: productData.name,
        sellingPrice: productData.price,
        picUrl: productData.images[0].url,
        sku: productData.code,
        attribute: {
          amount: 1,
        },
      })
    );
    notify();
  };

  const handleAddToWishList = (e) => {
    e.preventDefault();
  
    dispatch(
      addToWishList({
        name: productData.name,
        sellingPrice: productData.price,
        picUrl: productData.images[0].url,
        sku: productData.code,
        attribute: {
          amount: 1,
        },
      })
    );
    notifyWishlist();
  };

  return (
    <div className="m-1">
      <div className="product">
        {/* <span className="pr_flash">New</span> */}
        <div className="product_img text-center">
          <Link
            href={`/product/${productData.code}`}
          >
            <div className={Styles.img}>
              <img src={productData.images[0].url} alt={productData.name} />
            </div>
          </Link>
          {showProductActionBox && (
            <div className="product_action_box">
              <ul className="list_none pr_action_btn">
                <li
                  className="add-to-cart"
                  // onClick={() => {
                  //   dispatch(
                  //     addToCart({
                  //       name: productData.name,
                  //       sellingPrice: productData.sellingPrice,
                  //       picUrl: productData.picUrl,
                  //       sku:productData.code,
                  //       attribute: {
                  //         amount: 1,
                  //       },
                  //     })
                  //   );
                  //   notify();
                  // }}
                >
                  <Link href="" onClick={handleAddToCart}>
                    <i
                      className="icon-basket-loaded"
                      // onClick={() => {
                      //   // notify();
                      // }}
                    />{" "}
                    Add To Cart
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="popup-ajax">
                    <i className="icon-shuffle" />
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="#" className="popup-ajax">
                    <i className="icon-magnifier-add" />
                  </Link>
                </li> */}
                <li>
                  <Link href="#" onClick={handleAddToWishList}>
                    <i className="icon-heart" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="product_info ">
          <div className={Styles.downClass}>
            <div className={Styles.productTitle}>
              <h6
                className="product_title"
                style={{ color: "#292B2C", textDecoration: "none" }}
              >
                <Link
                  href={`/product/${productData.code}`}
                  style={{ color: "#292B2C", textDecoration: "none" }}
                >
                  {productData.name}
                </Link>
              </h6>
            </div>

            <div className={Styles.desSize}>
              <div className="pr_desc d-block">
                <div className={Styles.overF}>

                <Link href={`/product/${productData.code}`}>
                  <p>
                    {productData.description}
                    {/* Màu đỏ cầu sức khoẻ, bình an, xua đuổi các việc không may. Màu trắng kêu gọi tài khí, phúc khí, mời gọi nhân duyên tốt lành, tài lộc cho gia chủ.... */}
                  </p>
                </Link>
                </div>
              </div>
            </div>

            <div className="product_price">
              <div className="">
                <Link href={`/product/${productData.code}`}>
                <span className="price">
                  {formatPrice(productData.price)} VND
                </span>
                </Link>
                
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

                {/* {showSaleOfprice && (
                  <del className="">
                    {formatPrice(productData.price)} VND
                  </del>
                )} */}
              </div>
              {/* <div className="on_sale">
                {showSaleOfprice && <span>{productData.sellingPrice} Off</span>}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
