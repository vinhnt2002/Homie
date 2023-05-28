import React, { useState } from 'react'
// import ProductCard from '../components/productCard/ProductCard'
import BreadCrumb from '../components/breadCrumb/BreadCrumb';
import Styles from '../styles/Home.module.css'
const shopleft = () => {
  const [showProductActionBox, setShowProductActionBox] = useState(true);


  return (
    <div className="main_content">
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12">
                  <div className="d-flex justify-content-end product_header">
                    <div className="me-2 text-start">Sắp xếp theo</div>
                    <div className="custom_select text-end">
                      <select className="form-control form-control-sm">
                        <option value="order">Mặc định</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom_select">
                <select className="form-control form-control-sm">
                  <option value="">Showing</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                  <option value={18}>18</option>
                </select>
              </div>
              <div className="custom_select">
                <select className="form-control form-control-sm">
                  <option value="">Showing</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                  <option value={18}>18</option>
                </select>
              </div>

              <div className="row shop_container">
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
                <div className="col-md-4 col-6">
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
                      <div className="list_product_action_box">
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
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ul className="pagination mt-3 justify-content-center pagination_style1">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="linearicons-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <h5 className="widget_title">Danh Mục</h5>
                  <ul className="widget_categories">
                    <li>
                      <a href="#">
                        <span className="categories_name">Quà tặng</span>
                        <span className="categories_num">(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="categories_name">Trang trí nhà cửa</span>
                        <span className="categories_num">(6)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="categories_name">Thư giãn</span>
                        <span className="categories_num">(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="categories_name">Tiện ích</span>
                        <span className="categories_num">(7)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="categories_name">Phụ kiện</span>
                        <span className="categories_num">(12)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widget">
                  <h5 class="widget_title">Filter</h5>
                  <div class="filter_price">
                    <div id="price_filter" data-min="0" data-max="500" data-min-value="50"
                      data-max-value="300" data-price-sign="$"></div>
                    <div class="price_range">
                      <span>Price: <span id="flt_price"></span></span>
                      <input type="hidden" id="price_first"></input>
                      <input type="hidden" id="price_second"></input>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h5 className="widget_title">Brand</h5>
                  <ul className="list_brand">
                  <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "40%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "20%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                    <div className="custome-checkbox d-flex align-items-center">
    <div className='text-start me-2'>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="5starts"
                            defaultValue=""
                          />
                        </div>
                        <div className=''>
                          <label className="form-check-label d-flex " htmlFor="5starts">
                            <span>
                              <div className="text-end rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "0%" }}
                                  />
                                </div>
                              </div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <div className="shop_banner">
                    <div className="banner_img overlay_bg_20">
                      <img
                        src="assets/images/sidebar_banner_img.jpg"
                        alt="sidebar_banner_img"
                      />
                    </div>
                    <div className="shop_bn_content2 text_white">
                      <h5 className="text-uppercase shop_subtitle">
                        New Collection
                      </h5>
                      <h3 className="text-uppercase shop_title">
                        Sale 30% Off
                      </h3>
                      <a
                        href="#"
                        className="btn btn-white rounded-0 btn-sm text-uppercase"
                      >
                        Shop Now
                      </a>
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
  );
};

export default shopleft;
