import { useEffect, useRef } from "react";
import React, { useState } from "react";
import SectionBannerSlider from "../components/SectionBanner/SectionBannerSlider";
// import ProductList from "../components/section/productCard/ProductList";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import productData from "../data/product.json";
import ProductCard from "../components/section/productCard/ProductCard";
import ProductList from "../components/section/productCard/ProductList";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import CateHome from "../components/categories/cate";
import Link from "next/link";

import { getAllProduct } from "../action/menuApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home.module.css";

function Home({ products, categories }) {
  const [showTabs, setShowTabs] = useState(true);
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [showSaleOfprice, setShowSaleOfPrice] = useState(true);
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProductsCate, setFilteredProductsCate] = useState([]);

  const arrivalSliderRef = useRef(null);
  const sellersSliderRef = useRef(null);
  const featuredSliderRef = useRef(null);
  const specialSliderRef = useRef(null);
  const sliderRef5 = useRef(null);
  const sliderRef6 = useRef(null);
  const sliderRef7 = useRef(null);


 


  const getSliderItems = () => {
    const itemsPerSlide = 3; // Số sản phẩm hiển thị trên mỗi slide
    const totalSlides = Math.ceil(products.length / itemsPerSlide); // Tổng số slide
    const sliderItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideItems = products.slice(startIndex, endIndex);
      sliderItems.push(slideItems);
    }
    return sliderItems;
  };
  console.log(getSliderItems);

  const specialSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 3, // Scroll 3 items at a time
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

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

  // console.log(products);

  useEffect(() => {
    const filterProductCate = categories.map((category) => {
      const filteredProducts = products.filter((product) =>
        product.categoryId.includes(category.id)
      );
      return {
        category: category,
        products: filteredProducts,
      };
    });
    setFilteredProductsCate(filterProductCate);
  }, []);

  console.log(filteredProductsCate);

  // console.log(categories);

  return (
    <div>
      <div>
        <>
          {/* START SECTION BANNER */}
          <SectionBannerSlider />
          {/* END SECTION BANNER */}
        </>
        <div className="single_banner">
          <div className="row">
            <div className="col-12">
              <CateHome />
            </div>
          </div>
        </div>

        {/* END MAIN CONTENT */}
        <div className="main_content">
          {/* START SECTION SHOP DONE */}
          <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader showTabs={showTabs} title="Top Sản Phẩm" />
              <div className="row">
                <div className="col-12">
                  <div className="tab_slider">
                    <div
                      className="tab-pane fade show active"
                      id="arrival"
                      role="tabpanel"
                      aria-labelledby="arrival-tab"
                    >
                      <div
                        className={styles.shop}
                        style={{ position: "relative" }}
                      >
                        <Slider ref={arrivalSliderRef} {...settings}>
                          {filteredProductsCate.length > 0 &&
                            filteredProductsCate[5].products.map((product) => (
                              <div key={product.id} className="item">
                                <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                              />
                              </div>
                            ))}

                          {/* {products.map((product) => (
                            <div key={product.id} className="item ">
                              <ProductCard
                                productData={product}
                                showProductActionBox={showProductActionBox}
                              />
                            </div>
                          ))} */}
                        </Slider>
                        <div className={styles.buttons}>
                          <div className={styles.prevB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-prev-button"
                              onClick={() =>
                                arrivalSliderRef.current.slickPrev()
                              }
                            >
                              <FaChevronLeft className={styles.leftA} />
                            </button>
                          </div>
                          <div className={styles.nextB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-next-button"
                              onClick={() =>
                                arrivalSliderRef.current.slickNext()
                              }
                            >
                              <FaChevronRight className={styles.rightA} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sellers"
                      role="tabpanel"
                      aria-labelledby="sellers-tab"
                    >
                      <div
                        className={styles.shop}
                        style={{ position: "relative" }}
                      >
                        <Slider ref={sellersSliderRef} {...settings}>
                        {filteredProductsCate.length > 0 &&
                            filteredProductsCate[12].products.map((product) => (
                              <div key={product.id} className="item">
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
                              onClick={() =>
                                sellersSliderRef.current.slickPrev()
                              }
                            >
                              <FaChevronLeft className={styles.leftA} />
                            </button>
                          </div>
                          <div className={styles.nextB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-next-button"
                              onClick={() =>
                                sellersSliderRef.current.slickNext()
                              }
                            >
                              <FaChevronRight className={styles.rightA} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="featured"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                    >
                      <div
                        className={styles.shop}
                        style={{ position: "relative" }}
                      >
                        <Slider ref={featuredSliderRef} {...settings}>
                        {filteredProductsCate.length > 0 &&
                            filteredProductsCate[7].products.map((product) => (
                              <div key={product.id} className="item">
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
                              onClick={() =>
                                featuredSliderRef.current.slickPrev()
                              }
                            >
                              <FaChevronLeft className={styles.leftA} />
                            </button>
                          </div>
                          <div className={styles.nextB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-next-button"
                              onClick={() =>
                                featuredSliderRef.current.slickNext()
                              }
                            >
                              <FaChevronRight className={styles.rightA} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="special"
                      role="tabpanel"
                      aria-labelledby="special-tab"
                    >
                      <div
                        className={styles.shop}
                        style={{ position: "relative" }}
                      >
                        <Slider ref={specialSliderRef} {...settings}>
                        {filteredProductsCate.length > 0 &&
                            filteredProductsCate[4].products.map((product) => (
                              <div key={product.id} className="item">
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
                              onClick={() =>
                                specialSliderRef.current.slickPrev()
                              }
                            >
                              <FaChevronLeft className={styles.leftA} />
                            </button>
                          </div>
                          <div className={styles.nextB}>
                            <button
                              type="button"
                              role="presentation"
                              className="custom-next-button"
                              onClick={() =>
                                specialSliderRef.current.slickNext()
                              }
                            >
                              <FaChevronRight className={styles.rightA} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION BANNER */}
          <div className="section pb_20 small_pt">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img1jpg@2x.png"
                    title1={
                      <span
                        className={styles.bannerL}
                        style={{ fontWeight: "400", fontSize: "80%" }}
                      >
                        Super Sale
                      </span>
                    }
                    title2={
                      <span
                        className={styles.bannerL}
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 700,
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        Bộ sưu tập mới
                      </span>
                    }
                    buttonLink="shop_left"
                    buttonText={
                      <span className={styles.bannerL}>Mua ngay</span>
                    }
                  />
                </div>
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img2jpg@2x.png"
                    title2={
                      <span
                        className={styles.bannerR}
                        style={{ fontSize: "62%", color: "black" }}
                      >
                        Sale 40% Off
                      </span>
                    }
                    title1={
                      <span
                        className={styles.bannerR}
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 700,
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        SUMMER COMING
                      </span>
                    }
                    buttonLink="shop_left"
                    buttonText={
                      <span
                        className={styles.BannerR}
                        style={{ color: "black" }}
                      >
                        Mua Ngay
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}

          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Sản Phẩm Mới"
                />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.shop} style={{ position: "relative" }}>
                    <Slider ref={sliderRef5} {...settings}>
                    {filteredProductsCate.length > 0 &&
                            filteredProductsCate[14].products.map((product) => (
                              <div key={product.id} className="item">
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
                          onClick={() => sliderRef5.current.slickPrev()}
                        >
                          <FaChevronLeft className={styles.leftA} />
                        </button>
                      </div>
                      <div className={styles.nextB}>
                        <button
                          type="button"
                          role="presentation"
                          className="custom-next-button"
                          onClick={() => sliderRef5.current.slickNext()}
                        >
                          <FaChevronRight className={styles.rightA} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Chỉ Có Tại Homie"
                />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.shop} style={{ position: "relative" }}>
                    <Slider ref={sliderRef6} {...settings}>
                    {filteredProductsCate.length > 0 &&
                            filteredProductsCate[4].products.map((product) => (
                              <div key={product.id} className="item">
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
                          <FaChevronLeft className={styles.leftA} />
                        </button>
                      </div>
                      <div className={styles.nextB}>
                        <button
                          type="button"
                          role="presentation"
                          className="custom-next-button"
                          onClick={() => sliderRef6.current.slickNext()}
                        >
                          <FaChevronRight className={styles.rightA} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP  */}
          <div className="section small_pt pb_20">
            <div className="container col-12">
              <div className="heading-tab-header  ">
                <div className="">
                  <div>
                    <FeaturedProductHeader
                      className="d-flex justify-content-center"
                      title="Bán Chạy Tại Homie"
                    />
                  </div>
                  <div
                    className={styles.buttonsN}
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <div className={styles.prevBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-prev-button"
                        onClick={() => sliderRef7.current.slickPrev()}
                      >
                        <FaChevronLeft className={styles.leftAN} />
                      </button>
                    </div>
                    <div className={styles.nextBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-next-button"
                        onClick={() => sliderRef7.current.slickNext()}
                      >
                        <FaChevronRight className={styles.rightAN} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="product_list">
                    <div className={styles.shop}>
                      <Slider
                        ref={sliderRef7}
                        {...specialSettings}
                        className="overflow-hidden"
                      >
                        {getSliderItems().map((sliderItems, index) => (
                          <div key={index} className="gridContainer">
                            {sliderItems.map((product, innerIndex) => (
                              <div
                                key={innerIndex}
                                className="item "
                                style={{
                                  maxHeight: "220px",
                                  overflow: "hidden",
                                }}
                              >
                                <ProductList
                                  productData={product}
                                  // showProductActionBox={showProductActionBox}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
        </div>
        {/* END MAIN CONTENT */}
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const data = await getAllProduct();

  const products = data.products; // take the products attribute in the menu
  const categories = data.categories;

  return {
    props: { products, categories },
  };
}
