import React from "react";
import SectionBannerSlider from "../components/SectionBannerSlider/SectionBannerSlider";
import ProductList from "../components/section/productCard/ProductList";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import ExclusiveProducts from "../components/section/featuredProduct/FirstFeature";

function Home() {
  return (
    <div>
      <div>
        <>
          {/* START SECTION BANNER */}
          <SectionBannerSlider />
          {/* END SECTION BANNER */}
        </>

        {/* END SECTION BANNER */}
        {/* END MAIN CONTENT */}
        <div className="main_content">
          {/* START SECTION SHOP */}
          <div className="section small_pb">
            <div className="container">
                  <ExclusiveProducts/>
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
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                          <ProductList/>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sellers"
                      role="tabpanel"
                      aria-labelledby="sellers-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        <ProductList/>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="featured"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                          <ProductList/>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="special"
                      role="tabpanel"
                      aria-labelledby="special-tab"
                    >
                      <div
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                          <ProductList/>
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
                  <div className="single_banner">
                    <img
                      src="assets/images/shop-banner-img1jpg@2x.png"
                      alt="shop_banner_img1"
                    />
                    <div className="single_banner_info">
                      <h5 className="single_bn_title1 text-light">Super Sale</h5>
                      <h3 className="single_bn_title text-light">Bộ sưu tập mới</h3>
                      <Link
                      className="text-light"
                        href="shop_left"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_banner">
                    <img
                      src="assets/images/shop-banner-img2jpg@2x.png"
                      alt="shop_banner_img2"
                    />
                    <div className="single_banner_info">
                      <h3 className="single_bn_title text-light">SUMMNER COMING</h3>
                      <h4 className="single_bn_title1">Sale 40% Off</h4>
                      <Link
                        href="shop_left"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}

          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
            <FeaturedProductHeader className="d-flex justify-content-center" title="Hàng Mới Về" />
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
                    

                      <ProductList/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP */}
          <div className="section small_pt pb_20">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading_tab_header">
                    <div className="heading_s2">
                      <h2>Featured Products</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="product_slider product_list carousel_slider owl-carousel owl-theme nav_style3"
                    data-loop="true"
                    data-dots="false"
                    data-nav="true"
                    data-margin={20}
                    data-responsive='{"0":{"items": "1"}, "767":{"items": "2"}, "991":{"items": "3"}, "1199":{"items": "3"}}'
                  >
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img1.jpg"
                              alt="product_img1"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Blue Dress For Woman
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
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
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img6.jpg"
                              alt="product_img6"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Blue casual check shirt
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "68%" }}
                              />
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img12.jpg"
                              alt="product_img12"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Black T-shirt for woman
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "70%" }}
                              />
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img2.jpg"
                              alt="product_img2"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Lether Gray Tuxedo
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "68%" }}
                              />
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img7.jpg"
                              alt="product_img7"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              white black line dress
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "87%" }}
                              />
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img10.jpg"
                              alt="product_img10"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Red &amp; Black check shirt
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$95.00</del>
                            <div className="on_sale">
                              <span>25% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "68%" }}
                              />
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img3.jpg"
                              alt="product_img3"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              woman full sliv dress
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "87%" }}
                              />
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img8.jpg"
                              alt="product_img8"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Men blue jins Shirt
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "70%" }}
                              />
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img13.jpg"
                              alt="product_img13"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Pink Dress for woman
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$65.00</span>
                            <del>$80.00</del>
                            <div className="on_sale">
                              <span>30% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "80%" }}
                              />
                            </div>
                            <span className="rating_num">(28)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img4.jpg"
                              alt="product_img4"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              light blue Shirt
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$69.00</span>
                            <del>$89.00</del>
                            <div className="on_sale">
                              <span>20% Off</span>
                            </div>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "70%" }}
                              />
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img9.jpg"
                              alt="product_img9"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              T-Shirt Form Girls
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$45.00</span>
                            <del>$55.25</del>
                            <div className="on_sale">
                              <span>35% Off</span>
                            </div>
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
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img14.jpg"
                              alt="product_img14"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              White shirt for man
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$60.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "68%" }}
                              />
                            </div>
                            <span className="rating_num">(15)</span>
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
        </div>
        {/* END MAIN CONTENT */}
      </div>
    </div>
  );
}

export default Home;
