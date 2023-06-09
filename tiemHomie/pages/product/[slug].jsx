import { useRouter } from "next/router";
import React, { useState } from "react";
import productsData from "../../data/product.json";
import Image from "next/image";
import Link from "next/link";
import ProductGallery from "../../components/productDetail/ProductGallery";
import FeaturedProductHeader from "../../components/section/featuredProduct/FeaturedProductHeader";
import ProductList from "../../components/section/productCard/ProductList";
import Tabs from "../../components/tabs/Tabs";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  console.log([product]);

  return (
    // <div>
    //   <h1>Product Detail: {router.query.slug}</h1>
    //   <h2>{product.attribute.name}</h2>
    //   <Image src={product.attribute.imageUrl} alt={product.attribute.name} width={50} height={50} />
    //   <p>{product.attribute.description}</p>
    // </div>

    <>
      <BreadCrumb
        descriptionTitle="Chi Tiết Sản Phẩm"
        title="Chi Tiết Sản Phẩm"
      ></BreadCrumb>

      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START SECTION SHOP */}
        <div className="section">
          <div className="container">
            {/* Main Details of the pages NEED TO WRITE THE LOGIC */}
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="product-image">
                  <div className="product_img_box">
                    <Image
                      src={product.attribute.imageUrl2}
                      width={600}
                      height={600}
                      alt="img"
                      id="product_img"
                    />
                    <Link href="#" className="product_img_zoom" title="Zoom">
                      <span className="linearicons-zoom-in" />
                    </Link>
                  </div>
                  <ProductGallery />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                  <div className="product_description">
                    <h4 className="product_title">
                      <Link href="#">{product.attribute.title}</Link>
                    </h4>
                    <div className="product_price">
                      <span className="price">{product.attribute.price}</span>
                      <br></br>
                      <del>{product.attribute.original_price}</del>
                      {/* <div className="on_sale">
                        <span>35% Off</span>
                          </div>   */}
                    </div>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <span className="rating_num">(21)</span>
                    </div>
                    <div className="pr_desc">
                      <p>{product.attribute.description}</p>
                    </div>

                    <div className="product_sort_info">
                      <ul>
                        <li>
                          <i className="linearicons-shield-check" /> Giao Hàng
                          Toàn Quốc
                        </li>
                        <li>
                          <i className="linearicons-sync" /> Cam Kết Đổi/Trả
                          Hàng Miễn Phí
                        </li>
                        <li>
                          <i className="linearicons-bag-dollar" /> Thanh Toán
                          Khi Nhận Hàng
                        </li>
                      </ul>
                    </div>
                    {/* <div className="pr_switch_wrap">
                      <span className="switch_lable">Color</span>
                      <div className="product_color_switch">
                        <span className="active" data-color="#87554B" />
                        <span data-color="#333333" />
                        <span data-color="#DA323F" />
                      </div>
                    </div> */}
                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Size</span>
                      <div>
                        <span className="border border-warning">
                          SIZE 15X7 CM
                        </span>
                        {/* <span>s</span>
                         <span>m</span>
                         <span>l</span>
                         <span>xl</span> */}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cart_extra">
                    <div className="cart-product-quantity">
                      <div className="quantity">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus"
                        />
                        <input
                          type="text"
                          name="quantity"
                          defaultValue={1}
                          title="Qty"
                          className="qty"
                          size={4}
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus"
                        />
                      </div>
                    </div>
                    <div className="cart_btn">
                      <Link href="cart">
                        <button
                          className={`btn btn-outline-light btn-sm pb-2 btn-warning`}
                          type="button"
                        >
                          <i className="icon-basket-loaded" /> Thêm Vào Giỏ Hàng
                        </button>
                      </Link>
                      {/* <Link className="add_compare" href="#">
                       <i className="icon-shuffle" />
                                </Link> */}
                      <Link className="add_wishlist" href="#">
                        <i className="icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <ul className="product-meta">
                    <li>
                      SKU: <Link href="#">BE45VGRT</Link>
                    </li>
                    <li>
                      Category: <Link href="#">Phụ kiện</Link>
                    </li>
                    <li>
                      Tags:{" "}
                      <Link href="#" rel="tag">
                        {product.attribute.title}
                      </Link>
                    </li>
                  </ul>
                  <div className="product_share">
                    <span>Share:</span>
                    <ul className="social_icons">
                      <li>
                        <Link href="#">
                          <i className="ion-social-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ion-social-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ion-social-googleplus" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ion-social-youtube-outline" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ion-social-instagram-outline" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* The Tabs NEED TO WRITE THE LOGIC  */}
            <Tabs />

            {/* Section Product DONE */}
            <div className="section small_pt small_pb">
              <div className="container">
                <div className="">
                  <FeaturedProductHeader
                    className="d-flex justify-content-center"
                    title="Có Thể Bạn Cũng Quan Tâm"
                  />
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div
                    className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                    data-loop="true"
                    data-dots="false"
                    data-nav="true"
                    data-margin={20}
                    data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                  >
                    <ProductList
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
            {/* Section Product DONE */}
          </div>
        </div>
        {/* END SECTION SHOP */}
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = productsData.map((p) => ({
    params: {
      slug: p.attribute.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = productsData.find((p) => p.attribute.slug === slug);

  return {
    props: {
      product,
    },
  };
}

export default ProductDetail;
