"use client";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";

const ProductCard = ({ productData, showProductActionBox }) => {
  const {imageUrl, title, price, salePercent, rating, del, description } =
    productData;
  return (
    <div className={Styles.itemContainer}>
      <div className="item">
       
       <div className="product ">
        <span className="pr_flash">New</span>
        <div className={Styles.productImg}>
        <div className="product_img">
            <Link href="/">
             <div className={Styles.img}>
             <img
                src={imageUrl}
                style={{  objectFit: "contain",
                width: "100%",
                height: "100%", }}
                alt="product_img"
              />
             </div>
            </Link>
            {showProductActionBox && (
              <div className="product_action_box">
                <ul className="list_none pr_action_btn">
                  <li className="add-to-cart">
                    <Link href="/detail">
                      <i className="icon-basket-loaded" /> Add To Cart
                    </Link>
                  </li>
                  <li>
                    <Link href="/detail" className="popup-ajax">
                      <i className="icon-shuffle" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/detail" className="popup-ajax">
                      <i className="icon-magnifier-add" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/detail">
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
                    href="/detail"
                    style={{ color: "#292B2C", textDecoration: "none" }}
                  >
                    {title}
                  </Link>
                </h6>
              </div>

              <div className={Styles.desSize}>
                <div className="pr_desc d-block">
                  <div className={Styles.overF}>
                    <p>{description}</p>
                  </div>
                </div>
              </div>

              <div className="product_price">
                <div className="">
                  <span className="price">{price} VND</span>
                  <br></br>
                  <del className="m">{del} VND</del>
                </div>
                <div className="on_sale">
                  <span>{salePercent} Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProductCard;

