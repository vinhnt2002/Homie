"use client";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "@/redux/reducers/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

const formatPrice = (price) => {
  if (price === undefined) {
    return "undefined"; 
  }
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductCard = ({
  productData,
  showProductActionBox,
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
                >
                  <Link href="" onClick={handleAddToCart}>
                    <i
                      className="icon-basket-loaded"
                    />{" "}
                    Add To Cart
                  </Link>
                </li>
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
                  <p className="text-truncate">
                    {productData.description}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
