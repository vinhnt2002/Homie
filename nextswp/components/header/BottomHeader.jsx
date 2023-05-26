import React, { useState } from "react";
import styles from "./BottomHeader.module.css";
// import {AiOutlineGift} from 'react-icons/ai';
import { BsGift, BsGithub } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";
import { SiHappycow } from "react-icons/si";
import { BsBalloon } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const BottomHeader = () => {

  const [showCategory, setShowCategory] = useState(true);

  const handleClick = (e) =>{
      e.preventDefault();
      setShowCategory(!showCategory);
  }
  return (
    <div className="bottom_header light_skin main_menu_uppercase mb-4">
      <div className={styles.primary_bg}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-3">
              <div className="categories_wrap">
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navCatContent"
                  aria-expanded="false"
                  onClick={handleClick}
                  className={`${styles.categories_btn} categories_btn`}
                >
                  <i className="linearicons-menu" />
                  <span>Phân Loại </span>
                </button>
                {showCategory &&
                <div id="navCatContent" className="nav_cat navbar collapse">
                  <ul>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="dropdown-item nav-link dropdown-toggler"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className={styles.side_left}>
                          <BsGift /> <span>Quà Tặng</span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-5">
                            <ul className="d-lg-flex">
                              {/* <li className="mega-menu-col col-lg-6"> */}
                                <ul className= {styles.leftsideChild}>
                                  <li className="dropdown-header">
                                    Danh Mục
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              {/* </li> */}
                              {/* <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li className="dropdown-header">
                                    Popular Item
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Curabitur laoreet
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Vivamus in tortor
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Donec vitae facilisis
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Quisque condimentum
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Etiam ac rutrum
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Donec vitae ante ante
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Donec porttitor
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Curabitur tempus
                                    </a>
                                  </li>
                                </ul>
                              </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-6">
                            <div className="header-banner2">
                              <img
                                src="assets/images/menu_banner1.jpg"
                                alt="menu_banner1"
                              />
                              <div className="banne_info">
                                <h6>10% Off</h6>
                                <h4>New Arrival</h4>
                                <a href="#">Shop now</a>
                              </div>
                            </div>
                            <div className="header-banner2">
                              <img
                                src="assets/images/menu_banner2.jpg"
                                alt="menu_banner2"
                              />
                              <div className="banne_info">
                                <h6>15% Off</h6>
                                <h4>Men's Fashion</h4>
                                <a href="#">Shop now</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="dropdown-item nav-link dropdown-toggler"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className={styles.side_left}>
                          <BsBrush /> <span>Trang Trí Nhà Cửa</span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-5">
                            <ul className="d-lg-flex">
                              {/* <li className="mega-menu-col col-lg-6"> */}
                              <ul className= {styles.leftsideChild}>
                                  <li className="dropdown-header">
                                    Danh Mục
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              {/* </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <a href="#">
                                <img
                                  src="assets/images/menu_banner4.jpg"
                                  alt="menu_banner4"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="dropdown-item nav-link dropdown-toggler"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className={styles.side_left}>
                          <SiHappycow /> <span>Thư Giản</span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-5">
                            <ul className="d-lg-flex">
                              {/* <li className="mega-menu-col col-lg-6"> */}
                              <ul className= {styles.leftsideChild}>
                                  <li className="dropdown-header">
                                    Danh Mục
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              {/* </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <a href="#">
                                <img
                                  src="assets/images/menu_banner5.jpg"
                                  alt="menu_banner5"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="dropdown-item nav-link dropdown-toggler"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className={styles.side_left}>
                          <BsBalloon /> <span>Tiện Ích</span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-5">
                            <ul className="d-lg-flex">
                              {/* <li className="mega-menu-col col-lg-6"> */}
                              <ul className= {styles.leftsideChild}>
                                  <li className="dropdown-header">
                                    Danh Mục
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              {/* </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <a href="#">
                              <img
                                  src="assets/images/menu_banner4.jpg"
                                  alt="menu_banner4"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className="dropdown-item nav-link dropdown-toggler"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <div className={styles.side_left}>
                          <BsGithub /> <span>Phụ Kiện</span>
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-5">
                            <ul className="d-lg-flex">
                              {/* <li className="mega-menu-col col-lg-6"> */}
                              <ul className= {styles.leftsideChild}>
                                  <li className="dropdown-header">
                                    Danh Mục
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              {/* </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
                            <div className="header-banner2">
                              <a href="#">
                                <img
                                  src="assets/images/menu_banner5.jpg"
                                  alt="menu_banner5"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a className="dropdown-item nav-link nav_item" href="#">
                        <i /> <span></span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item nav-link nav_item" href="#">
                        <i /> <span></span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item nav-link nav_item" href="#">
                        <i /> <span></span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item nav-link nav_item" href="#">
                        <i /> <span></span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item nav-link nav_item" href="#">
                        <i /> <span></span>
                      </a>
                    </li>
                  </ul>
                  {/* <div className="more_categories">More Categories</div> */}
                </div>
                }
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 col-9">
              <div className={styles.navbar_expand_lg}>
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler side_navbar_toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSidetoggle"
                    aria-expanded="false"
                  >
                    <span className="ion-android-menu" />
                  </button>

                  <div
                    className="collapse navbar-collapse mobile_side_menu"
                    id="navbarSidetoggle"
                  >
                    <div className={styles.mobile_side_menu}>
                      <ul className="navbar-nav">
                        <li className={styles.mobile_side_tx}>
                          <a
                            data-bs-toggle="dropdown"
                            className="nav-link active"
                            href="index"
                          >
                            Trang Chủ
                          </a>
                        </li>

                        <li
                          className={`${styles.mobile_side_tx} dropdown dropdown-mega-menu`}
                        >
                          <a
                            className={`${styles.mobile_side_tx} dropdown-toggle nav-link`}
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            Sản Phẩm
                          </a>
                          <div className="dropdown-menu">
                            <ul className="mega-menu d-lg-flex">
                              <li className="mega-menu-col col-lg-2">
                                <ul className={styles.ul_padding}>
                                  <li className="dropdown-header">Quà Tặng</li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-3">
                                <ul className={styles.ul_padding}>
                                  <li className="dropdown-header">
                                    Trang Trí Nhà Cửa
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mèo Gốm
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-2">
                                <ul className={styles.ul_padding}>
                                  <li className="dropdown-header">Thư Giãn</li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Thú Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Bông
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                     href="#"
                                    >
                                      Quạt
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-3">
                                <ul className={styles.ul_padding}>
                                  <li className="dropdown-header">Tiện ích</li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Chén Đĩa Ly Sứ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Mền
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Quạt
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                     href="#"
                                    >
                                      Gối Tựa Lưng
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Gối Cổ
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Ly Giữ Nhiệt
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-2">
                                <ul className={styles.ul_padding}>
                                  <li className="dropdown-header">Phụ Kiện</li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Móc Khoá
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Xách
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Túi Mỹ Phẩm
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className={styles.side_mobile_img} >
                            <div className="d-lg-flex menu_banners row g-3 px-3">
                              
                                <div className="col-lg-6">
                                  <div className="header-banner">
                                    <img
                                      src="assets/images/menu_banner1.jpg"
                                      alt="menu_banner1"
                                    />
                                    <div className="banne_info">
                                      <h6>10% Off</h6>
                                      <h4>New Arrival</h4>
                                      <a href="#">Shop now</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="header-banner">
                                    <img
                                      src="assets/images/menu_banner2.jpg"
                                      alt="menu_banner2"
                                    />
                                    <div className="banne_info">
                                      <h6>15% Off</h6>
                                      <h4>Men's Fashion</h4>
                                      <a href="#">Shop now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        
                        <li className={styles.mobile_side_tx}>
                          <a className="nav-link nav_item" href="#">
                            Set Quà Tặng
                          </a>
                        </li>

                        <li className={styles.mobile_side_tx}>
                          <a className="nav-link nav_item" href="contact">
                            Câu Chuyện Thương Hiệu
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="navbar-nav attr-nav align-items-center">
                    <li>
                      <a href="#" className="nav-link">
                        <i className="linearicons-user" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link">
                        <i className="linearicons-heart" />
                        <span className="wishlist_count">0</span>
                      </a>
                    </li>
                    <li className="dropdown cart_dropdown">
                      <a
                        className="nav-link cart_trigger"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i className="linearicons-cart" />
                        <span className="cart_count">2</span>
                      </a>
                      <div className="cart_box dropdown-menu dropdown-menu-right">
                        <ul className="cart_list">
                          <li>
                            <a href="#" className="item_remove">
                              <i className="ion-close" />
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
                              <i className="ion-close" />
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
                            <a href="#" className="btn btn-fill-line view-cart">
                              View Cart
                            </a>
                            <a href="#" className="btn btn-fill-out checkout">
                              Checkout
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="pr_search_icon">
                    <div className={styles.search_icon}>
                      <a
                        href="javascript:void(0);"
                        className="nav-link pr_search_trigger"
                      >
                        <i className="linearicons-magnifier" />
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
