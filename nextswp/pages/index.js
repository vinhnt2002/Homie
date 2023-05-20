import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import BannerSlider from '../components/Banner'
function Home() {
  const slides = [
    {
      image: 'assets/images/banner4.jpg',
      discount: 'Get up to 50% off Today Only!',
      title: 'Woman Fashion',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
    {
      image: 'assets/images/banner5.jpg',
      discount: '50% off in all products',
      title: 'Man Fashion',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
    {
      image: 'assets/images/banner6.jpg',
      discount: 'Taking your Viewing Experience to Next Level',
      title: 'Summer Sale',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
  ];
  return (
    <>



      {/* <!-- START SECTION BANNER --> */}
      <div>
        {/* Example usage of the BannerSlider component */}
        <BannerSlider slides={slides} />
      </div>
      {/* <!-- END SECTION BANNER --> */}


      {/* START MAIN CONTENT  */}
      <>
        <div className="main_content">
          {/* START SECTION SHOP */}
          <div className="section small_pb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading_tab_header">
                    <div className="heading_s2">
                      <h2>Exclusive Products</h2>
                    </div>
                    <div className="tab-style2">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#tabmenubar"
                        aria-expanded="false"
                      >
                        <span className="ion-android-menu" />
                      </button>
                      <ul
                        className="nav nav-tabs justify-content-center justify-content-md-end"
                        id="tabmenubar"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="arrival-tab"
                            data-bs-toggle="tab"
                            href="#arrival"
                            role="tab"
                            aria-controls="arrival"
                            aria-selected="true"
                          >
                            New Arrival
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="sellers-tab"
                            data-bs-toggle="tab"
                            href="#sellers"
                            role="tab"
                            aria-controls="sellers"
                            aria-selected="false"
                          >
                            Best Sellers
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="featured-tab"
                            data-bs-toggle="tab"
                            href="#featured"
                            role="tab"
                            aria-controls="featured"
                            aria-selected="false"
                          >
                            Featured
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="special-tab"
                            data-bs-toggle="tab"
                            href="#special"
                            role="tab"
                            aria-controls="special"
                            aria-selected="false"
                          >
                            Special Offer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img1.jpg"
                                  alt="product_img1"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                  <span data-color="#DA323F" />
                                </div>
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
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#847764" />
                                  <span data-color="#0393B5" />
                                  <span data-color="#DA323F" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash">New</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img3.jpg"
                                  alt="product_img3"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#7C502F" />
                                  <span data-color="#2F366C" />
                                  <span data-color="#874A3D" />
                                </div>
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
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">light blue Shirt</a>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#A92534" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img5.jpg"
                                  alt="product_img5"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  blue dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                  <span data-color="#5FB7D4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-danger">Hot</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img6.jpg"
                                  alt="product_img6"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-success">Sale</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img7.jpg"
                                  alt="product_img7"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#7C502F" />
                                  <span data-color="#2F366C" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img8.jpg"
                                  alt="product_img8"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#444653" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
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
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img9.jpg"
                                  alt="product_img9"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#B5B6BB" />
                                  <span data-color="#333333" />
                                  <span data-color="#DA323F" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-danger">Hot</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img6.jpg"
                                  alt="product_img6"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img11.jpg"
                                  alt="product_img11"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  Black dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#090909" />
                                  <span data-color="#AC644D" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-success">Sale</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img7.jpg"
                                  alt="product_img7"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#7C502F" />
                                  <span data-color="#2F366C" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img8.jpg"
                                  alt="product_img8"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#444653" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img5.jpg"
                                  alt="product_img5"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  blue dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                  <span data-color="#5FB7D4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img12.jpg"
                                  alt="product_img12"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <span className="pr_flash">New</span>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#1B1B25" />
                                  <span data-color="#444653" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-danger">Hot</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img10.jpg"
                                  alt="product_img10"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#E8ADA9" />
                                  <span data-color="#C38F77" />
                                  <span data-color="#BE7154" />
                                </div>
                              </div>
                            </div>
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
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img5.jpg"
                                  alt="product_img5"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  blue dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                  <span data-color="#5FB7D4" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img12.jpg"
                                  alt="product_img12"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <span className="pr_flash">New</span>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#1B1B25" />
                                  <span data-color="#444653" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img9.jpg"
                                  alt="product_img9"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#B5B6BB" />
                                  <span data-color="#333333" />
                                  <span data-color="#DA323F" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-success">Sale</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img10.jpg"
                                  alt="product_img10"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#E8ADA9" />
                                  <span data-color="#C38F77" />
                                  <span data-color="#BE7154" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-danger">Hot</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img7.jpg"
                                  alt="product_img7"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#7C502F" />
                                  <span data-color="#2F366C" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img11.jpg"
                                  alt="product_img11"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  Black dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#090909" />
                                  <span data-color="#AC644D" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img8.jpg"
                                  alt="product_img8"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#444653" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash">Sale</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img6.jpg"
                                  alt="product_img6"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                </div>
                              </div>
                            </div>
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
                        className="product_slider carousel_slider owl-carousel owl-theme nav_style1"
                        data-loop="true"
                        data-dots="false"
                        data-nav="true"
                        data-margin={20}
                        data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                      >
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img4.jpg"
                                  alt="product_img4"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">light blue Shirt</a>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#A92534" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img9.jpg"
                                  alt="product_img9"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#B5B6BB" />
                                  <span data-color="#333333" />
                                  <span data-color="#DA323F" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img8.jpg"
                                  alt="product_img8"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  Men Checks Casual Shirt
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#444653" />
                                  <span data-color="#B9C2DF" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash">New</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img1.jpg"
                                  alt="product_img1"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                  <span data-color="#DA323F" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img12.jpg"
                                  alt="product_img12"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <span className="pr_flash bg-danger">Hot</span>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#1B1B25" />
                                  <span data-color="#444653" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img6.jpg"
                                  alt="product_img6"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#87554B" />
                                  <span data-color="#333333" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <span className="pr_flash bg-success">Sale</span>
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img7.jpg"
                                  alt="product_img7"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#333333" />
                                  <span data-color="#7C502F" />
                                  <span data-color="#2F366C" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="product">
                            <div className="product_img">
                              <a href="shop-product-detail.html">
                                <img
                                  src="assets/images/product_img11.jpg"
                                  alt="product_img11"
                                />
                              </a>
                              <div className="product_action_box">
                                <ul className="list_none pr_action_btn">
                                  <li className="add-to-cart">
                                    <a href="#">
                                      <i className="icon-basket-loaded" /> Add To Cart
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-compare.html" className="popup-ajax">
                                      <i className="icon-shuffle" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="shop-quick-view.html"
                                      className="popup-ajax"
                                    >
                                      <i className="icon-magnifier-add" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="icon-heart" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product_info">
                              <h6 className="product_title">
                                <a href="shop-product-detail.html">
                                  Black dress for woman
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
                              <div className="pr_desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit. Phasellus blandit massa enim. Nullam id varius
                                  nunc id varius nunc.
                                </p>
                              </div>
                              <div className="pr_switch_wrap">
                                <div className="product_color_switch">
                                  <span className="active" data-color="#090909" />
                                  <span data-color="#AC644D" />
                                </div>
                              </div>
                            </div>
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
                  <div className="single_banner">
                    <img
                      src="assets/images/shop_banner_img1.jpg"
                      alt="shop_banner_img1"
                    />
                    <div className="single_banner_info">
                      <h5 className="single_bn_title1">Super Sale</h5>
                      <h3 className="single_bn_title">New Collection</h3>
                      <a href="shop-left-sidebar.html" className="single_bn_link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_banner">
                    <img
                      src="assets/images/shop_banner_img2.jpg"
                      alt="shop_banner_img2"
                    />
                    <div className="single_banner_info">
                      <h3 className="single_bn_title">New Season</h3>
                      <h4 className="single_bn_title1">Sale 40% Off</h4>
                      <a href="shop-left-sidebar.html" className="single_bn_link">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}
          {/* START SECTION SHOP */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading_tab_header">
                    <div className="heading_s2">
                      <h2>Deal Of The Days</h2>
                    </div>
                    <div className="deal_timer">
                      <div
                        className="countdown_time countdown_style1"
                        data-time="2021/09/28 13:22:15"
                      />
                    </div>
                  </div>
                </div>
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
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img1.jpg"
                              alt="product_img1"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded" /> Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="shop-compare.html" className="popup-ajax">
                                  <i className="icon-shuffle" />
                                </a>
                              </li>
                              <li>
                                <a href="shop-quick-view.html" className="popup-ajax">
                                  <i className="icon-magnifier-add" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">Blue Dress For Woman</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus blandit massa enim. Nullam id varius nunc id
                              varius nunc.
                            </p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch">
                              <span className="active" data-color="#87554B" />
                              <span data-color="#333333" />
                              <span data-color="#DA323F" />
                            </div>
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
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded" /> Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="shop-compare.html" className="popup-ajax">
                                  <i className="icon-shuffle" />
                                </a>
                              </li>
                              <li>
                                <a href="shop-quick-view.html" className="popup-ajax">
                                  <i className="icon-magnifier-add" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">Lether Gray Tuxedo</a>
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
                              <div className="product_rate" style={{ width: "68%" }} />
                            </div>
                            <span className="rating_num">(15)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus blandit massa enim. Nullam id varius nunc id
                              varius nunc.
                            </p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch">
                              <span className="active" data-color="#847764" />
                              <span data-color="#0393B5" />
                              <span data-color="#DA323F" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product">
                        <span className="pr_flash">New</span>
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img3.jpg"
                              alt="product_img3"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded" /> Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="shop-compare.html" className="popup-ajax">
                                  <i className="icon-shuffle" />
                                </a>
                              </li>
                              <li>
                                <a href="shop-quick-view.html" className="popup-ajax">
                                  <i className="icon-magnifier-add" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">woman full sliv dress</a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div className="product_rate" style={{ width: "87%" }} />
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus blandit massa enim. Nullam id varius nunc id
                              varius nunc.
                            </p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch">
                              <span className="active" data-color="#333333" />
                              <span data-color="#7C502F" />
                              <span data-color="#2F366C" />
                              <span data-color="#874A3D" />
                            </div>
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
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded" /> Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="shop-compare.html" className="popup-ajax">
                                  <i className="icon-shuffle" />
                                </a>
                              </li>
                              <li>
                                <a href="shop-quick-view.html" className="popup-ajax">
                                  <i className="icon-magnifier-add" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">light blue Shirt</a>
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
                              <div className="product_rate" style={{ width: "70%" }} />
                            </div>
                            <span className="rating_num">(22)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus blandit massa enim. Nullam id varius nunc id
                              varius nunc.
                            </p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch">
                              <span className="active" data-color="#333333" />
                              <span data-color="#A92534" />
                              <span data-color="#B9C2DF" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img5.jpg"
                              alt="product_img5"
                            />
                          </a>
                          <div className="product_action_box">
                            <ul className="list_none pr_action_btn">
                              <li className="add-to-cart">
                                <a href="#">
                                  <i className="icon-basket-loaded" /> Add To Cart
                                </a>
                              </li>
                              <li>
                                <a href="shop-compare.html" className="popup-ajax">
                                  <i className="icon-shuffle" />
                                </a>
                              </li>
                              <li>
                                <a href="shop-quick-view.html" className="popup-ajax">
                                  <i className="icon-magnifier-add" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="icon-heart" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">blue dress for woman</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                          <div className="pr_desc">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus blandit massa enim. Nullam id varius nunc id
                              varius nunc.
                            </p>
                          </div>
                          <div className="pr_switch_wrap">
                            <div className="product_color_switch">
                              <span className="active" data-color="#87554B" />
                              <span data-color="#333333" />
                              <span data-color="#5FB7D4" />
                            </div>
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
            <div className="container-fluid px-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="sale_banner">
                    <a className="hover_effect1" href="#">
                      <img
                        src="assets/images/shop_banner_img3.jpg"
                        alt="shop_banner_img3"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="sale_banner">
                    <a className="hover_effect1" href="#">
                      <img
                        src="assets/images/shop_banner_img4.jpg"
                        alt="shop_banner_img4"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="sale_banner">
                    <a className="hover_effect1" href="#">
                      <img
                        src="assets/images/shop_banner_img5.jpg"
                        alt="shop_banner_img5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}
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
                            <a href="shop-product-detail.html">Blue Dress For Woman</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
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
                              <div className="product_rate" style={{ width: "68%" }} />
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
                              <div className="product_rate" style={{ width: "70%" }} />
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
                            <a href="shop-product-detail.html">Lether Gray Tuxedo</a>
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
                              <div className="product_rate" style={{ width: "68%" }} />
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
                              <div className="product_rate" style={{ width: "87%" }} />
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
                              <div className="product_rate" style={{ width: "68%" }} />
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
                            <a href="shop-product-detail.html">woman full sliv dress</a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$68.00</span>
                            <del>$99.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div className="product_rate" style={{ width: "87%" }} />
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
                            <a href="shop-product-detail.html">Men blue jins Shirt</a>
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
                              <div className="product_rate" style={{ width: "70%" }} />
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
                            <a href="shop-product-detail.html">Pink Dress for woman</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
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
                            <a href="shop-product-detail.html">light blue Shirt</a>
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
                              <div className="product_rate" style={{ width: "70%" }} />
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
                            <a href="shop-product-detail.html">T-Shirt Form Girls</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
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
                            <a href="shop-product-detail.html">White shirt for man</a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$60.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div className="product_rate" style={{ width: "68%" }} />
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
                              src="assets/images/product_img5.jpg"
                              alt="product_img5"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">blue dress for woman</a>
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
                              <div className="product_rate" style={{ width: "80%" }} />
                            </div>
                            <span className="rating_num">(21)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img11.jpg"
                              alt="product_img11"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">Black dress for woman</a>
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
                              <div className="product_rate" style={{ width: "87%" }} />
                            </div>
                            <span className="rating_num">(25)</span>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product_img">
                          <a href="shop-product-detail.html">
                            <img
                              src="assets/images/product_img15.jpg"
                              alt="product_img15"
                            />
                          </a>
                        </div>
                        <div className="product_info">
                          <h6 className="product_title">
                            <a href="shop-product-detail.html">
                              Pink Dress for Baby Kids
                            </a>
                          </h6>
                          <div className="product_price">
                            <span className="price">$55.00</span>
                            <del>$60.00</del>
                          </div>
                          <div className="rating_wrap">
                            <div className="rating">
                              <div className="product_rate" style={{ width: "68%" }} />
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
          {/* START SECTION CLIENT LOGO */}
          <div className="section small_pt">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading_tab_header">
                    <div className="heading_s2">
                      <h2>Our Brands</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div
                    className="client_logo carousel_slider owl-carousel owl-theme nav_style3"
                    data-dots="false"
                    data-nav="true"
                    data-margin={30}
                    data-loop="true"
                    data-autoplay="true"
                    data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'
                  >
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo1.png" alt="cl_logo" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo2.png" alt="cl_logo" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo3.png" alt="cl_logo" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo4.png" alt="cl_logo" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo5.png" alt="cl_logo" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="cl_logo">
                        <img src="assets/images/cl_logo6.png" alt="cl_logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </>
      {/* END MAIN CONTENT  */}




    </>

  )
}

export default Home