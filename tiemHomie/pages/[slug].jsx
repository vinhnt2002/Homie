import { useRouter } from "next/router";
import React, { useState } from "react";
import productsData from "../data/product.json";
import Image from "next/image";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import ProductList from "../components/section/productCard/ProductList";
import Tabs from "../components/tabs/Tabs";
import ProductGallery from "../components/productDetail/ProductGallery";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productData from "../data/product.json";
import ProductCard from "../components/section/productCard/ProductCard";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageZoom from 'react-image-zoom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToCart} from "@/redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../action/menuApi";

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


const ProductDetail = ({ product }) => {
  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString().replace(/,/g, ".");
    return formattedPrice;
  };


  const dispatch = useDispatch();
  const sliderRef6 = useRef(null);
  const router = useRouter();
  const productUrl = `https://example.com${router.asPath}`; // Replace with your website URL

  const handleFacebookShare = () => {
    const url = encodeURIComponent(productUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  const handleTwitterShare = () => {
    const text = encodeURIComponent('Check out this awesome product!'); // Replace with your desired tweet text
    const url = encodeURIComponent(productUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleGooglePlusShare = () => {
    const url = encodeURIComponent(productUrl);
    window.open(`https://plus.google.com/share?url=${url}`, '_blank');
  };

  const handleYouTubeShare = () => {
    // Replace with your desired YouTube video URL
    const videoUrl = 'https://www.youtube.com/watch?v=your-video-id';
    window.open(`https://www.youtube.com/share?url=${videoUrl}`, '_blank');
  };

  const handleInstagramShare = () => {
    // Replace with your desired Instagram sharing URL or handle
    const instagramUrl = 'https://www.instagram.com/your-instagram-handle';
    window.open(instagramUrl, '_blank');
  };

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    arrows: false,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  console.log([product]);
  const images = [
    product.picUrl,
    product.picUrl,
    product.picUrl,
    product.picUrl,
    // product.picUrl,
    '/assets/images2/image-14@2x.png',
    // '/assets/images2/image-14@2x.png',
    // '/assets/images2/image-14@2x.png'
  ]
  return (
    <>
    <ToastContainer />

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
                  <div className="">

                    <div>
                      <Carousel
                        infiniteLoop
                        showIndicators={false}
                        showStatus={false}
                        thumbWidth={119}
                        useKeyboardArrows
                        showArrows={false}
                        swipeable
                      // className="productCarousel"
                      >
                        {images.map((imgUrl, index) => (
                          <div><img src={imgUrl} alt="img" key={index}></img></div>
                        ))}

                      </Carousel>
                    </div>

                    {/* <Link href="#" className="product_img_zoom" title="Zoom">
                      <span className="linearicons-zoom-in" />
                    </Link> */}
                  </div>
                  {/* <ProductGallery /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                  <div className="product_description">
                    <h4 className="product_title">
                      <Link href="#">{product.name}</Link>
                    </h4>
                    <div className="product_price" >
                    <span className="price" >{formatPrice(product.sellingPrice)} VND</span>
                      <br></br>
                      {/* <div className="on_sale">
                        <span>35% Off</span>
                          </div>   */}
                    </div>
                    {/* <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <span className="rating_num">(21)</span>
                    </div> */}
                    <div className="pr_desc">
                      <p>{product.description}</p>
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
                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Color</span>
                      <div className={`${styles.product_color_switch}`}>
                        <span className={styles.active} data-color="#87554B" />
                        <span data-color="red" />
                        <span data-color="#DA323F" />
                      </div>
                    </div>
                    <div className="pr_switch_wrap">
                      <span className="switch_lable">Size</span>
                      <div>
                        <span className={styles.active}>
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
                      
                        <button
                          className={`btn btn-outline-light btn-sm pb-2`} style={{ backgroundColor: '#F79C43' }}
                          type="button"
                      onClick={() => {
                        dispatch(
                          addToCart({
                            name: product.name,
                            sellingPrice: product.sellingPrice,
                            picUrl: product.picUrl,
                            attribute: {
                              amount: 1,
                            },
                          }));
                          notify();
                      }}

                        >
                          <i className="icon-basket-loaded" /> Thêm Vào Giỏ Hàng
                        </button>
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
                      Category: <Link href="#">gau bong</Link>
                    </li>
                    <li>
                      Tags:{" "}
                      <Link href="#" rel="tag">
                        {product.name}
                      </Link>
                    </li>
                  </ul>
                  <div className="product_share">
                    <span>Share:</span>
                    <ul className="social_icons">
                      <li>
                        <Link href="#" onClick={handleFacebookShare}>
                          <i className="ion-social-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleTwitterShare}>
                          <i className="ion-social-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleGooglePlusShare}>
                          <i className="ion-social-googleplus" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleYouTubeShare}>
                          <i className="ion-social-youtube-outline" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleInstagramShare}>
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

            {/* Section Product HERE HAVE AN PROBLEM */}
            {/* <div className="section small_pt small_pb">
              <div className="container">
                <div className="">
                  <FeaturedProductHeader
                    className="d-flex justify-content-center"
                    title="Có Thể Bạn Cũng Quan Tâm"
                  />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-12">
                      <div className={styles.shop} style={{ position: "relative" }}>
                        <Slider ref={sliderRef6} {...settings}>
                          {productData.map((product) => (
                            <div key={product.id} className="item" >
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                              />
                            </div>
                          ))}
                        </Slider>
                        <div className={styles.buttons}>
                          <div className={styles.prevB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-prev-button"
                              onClick={() => sliderRef6.current.slickPrev()}
                            >
                              <FaChevronLeft
                                className={styles.leftA}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "orange")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "gray")
                                }
                              />
                            </button>
                          </div>
                          <div className={styles.nextB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-next-button"
                              onClick={() => sliderRef6.current.slickNext()}
                            >
                              <FaChevronRight
                                className={styles.rightA}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "orange")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "gray")
                                }
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Section Product HERE HAVE AN PROBLEM */}
          </div>
        </div>
        {/* END SECTION SHOP */}
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
      </div>
    </>
  );
};
export async function getStaticPaths() {

  const data = await getAllProduct();
  const products = data.products   // take the products attribute in the menu

  const paths = products.map((p) => ({
    params: {
      slug: (p.code),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productId = (params.slug);

  const data = await getAllProduct();

  const products = data.products   // take the products attribute in the menu


  const product = products.find((p) => p.code === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
export default ProductDetail;
