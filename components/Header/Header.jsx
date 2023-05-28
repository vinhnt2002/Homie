import React, { FC } from "react";
import style from "./Header.module.css";
import Link from "next/link";

const Header = ({}) => {
  return (
    <header
      className="header_wrap fixed-top header_with_topbar"
      style={{ marginTop: "50px" }}
    >
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="lng_dropdown me-2">
                  {/* <div className={style.topLeft}>
                    <div>
                      <img src="assets/images/engpng@2x.png" alt="" />
                      <p>VietNam</p>
                    </div>
                    <div>
                      <p>VND</p>
                    </div>
                  </div> */}
                </div>

                <ul className="contact_detail text-center text-lg-start">
                  <li>
                    <i className="ti-mobile"></i>
                    <span>093 839 30 84</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center text-md-end">
                <ul className="header_list">
                  {/* <li>
                    <a href="shop_left">
                      <i className="ti-control-shuffle"></i>
                      <span>Compare</span>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="shop_left">
                      <i className="ti-heart"></i>
                      <span>Wishlist</span>
                    </a>
                  </li> */}
                  <li>
                    <a href="login.html">
                      <i className="ti-user"></i>
                      <span>Login</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottom_header dark_skin main_menu_uppercase"
          style={{ marginTop: "25px" }}
        >
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <Link className={style.logo} href="/">
                <img src="assets/images/image-141@2x.png" alt="logo" />
                <p className={style.logoTitle}>Tiệm Homie</p>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-expanded="false"
              >
                <span className="ion-android-menu"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="dropdown">
                    <Link
                      data-bs-toggle="dropdown"
                      className="nav-link active"
                      href="/"
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li className="dropdown dropdown-mega-menu">
                    <a
                      className="dropdown-toggle nav-link"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Sản Phẩm
                    </a>
                    <div className="dropdown-menu">
                      <ul className="mega-menu d-lg-flex">
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Quà Tặng</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mèo Gốm
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Xách
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-3">
                          <ul>
                            <li className="dropdown-header">
                              Trang Trí Nhà Cửa
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mèo Gốm
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Thư Giãn</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Thú Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Bông
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Quạt
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-2">
                          <ul>
                            <li className="dropdown-header">Tiện Ích</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Chén Đĩa Ly Sứ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Mền
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Quạt
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Tựa Lưng
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Gối Cổ
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Ly Giữ Nhiệt
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-menu-col col-lg-3">
                          <ul>
                            <li className="dropdown-header">Phụ Kiện</li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Móc Khoá
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Xách
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item nav-link nav_item"
                                href="shop_left"
                              >
                                Túi Mỹ Phẩm
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="d-lg-flex menu_banners row g-3 px-3">
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img1jpg@2x.png"
                              alt="menu_banner1"
                            />
                            {/* <div className="banne_info">
                              <h6>10% Off</h6>
                              <h4>New Arrival</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img2jpg@2x.png"
                              alt="menu_banner2"
                            />
                            {/* <div className="banne_info">
                              <h6>15% Off</h6>
                              <h4>Men's Fashion</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="header-banner">
                            <img
                              src="assets/images/shop-banner-img1jpg@2x.png"
                              alt="menu_banner3"
                            />
                            {/* <div className="banne_info">
                              <h6>23% Off</h6>
                              <h4>Kids Fashion</h4>
                              <a href="#">Shop now</a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link className="nav-link nav_item" href="shop_left">
                      Set Quà Tặng
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link nav_item" href="contact">
                      Câu Chuyện Thương Hiệu
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav attr-nav align-items-center">
                <li>
                  <a
                    href="javascript:void(0);"
                    className="nav-link search_trigger"
                  >
                    <i className="linearicons-magnifier"></i>
                  </a>
                  <div className="search_wrap">
                    <span className="close-search">
                      <i className="ion-ios-close-empty"></i>
                    </span>
                    <form>
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        id="search_input"
                      />
                      <button type="submit" className="search_icon">
                        <i className="ion-ios-search-strong"></i>
                      </button>
                    </form>
                  </div>
                  <div className="search_overlay"></div>
                </li>
                <li className="dropdown cart_dropdown">
                  <a
                    className="nav-link cart_trigger"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="linearicons-cart"></i>
                    <span className="cart_count">2</span>
                  </a>
                  <div className="cart_box dropdown-menu dropdown-menu-right">
                    <ul className="cart_list">
                      <li>
                        <a href="#" className="item_remove">
                          <i className="ion-close"></i>
                        </a>
                        <a href="#">
                          <img
                            src="assets/images/cart_thamb1.jpg"
                            alt="cart_thumb1"
                          />
                          Variable product 001
                        </a>
                        <span className="cart_quantity">
                          {" "}
                          1 x{" "}
                          <span className="cart_amount">
                            {" "}
                            <span className="price_symbole">$</span>
                          </span>
                          78.00
                        </span>
                      </li>
                      <li>
                        <a href="#" className="item_remove">
                          <i className="ion-close"></i>
                        </a>
                        <a href="#">
                          <img
                            src="assets/images/cart_thamb2.jpg"
                            alt="cart_thumb2"
                          />
                          Ornare sed consequat
                        </a>
                        <span className="cart_quantity">
                          {" "}
                          1 x{" "}
                          <span className="cart_amount">
                            {" "}
                            <span className="price_symbole">$</span>
                          </span>
                          81.00
                        </span>
                      </li>
                    </ul>
                    <div className="cart_footer">
                      <p className="cart_total">
                        <strong>Subtotal:</strong>{" "}
                        <span className="cart_price">
                          {" "}
                          <span className="price_symbole">$</span>
                        </span>
                        159.00
                      </p>
                      <p className="cart_buttons">
                        <a
                          href="#"
                          className="btn btn-fill-line rounded-0 view-cart"
                        >
                          View Cart
                        </a>
                        <a
                          href="#"
                          className="btn btn-fill-out rounded-0 checkout"
                        >
                          Checkout
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
