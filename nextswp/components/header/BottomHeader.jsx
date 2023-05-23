import React from 'react'
import styles from './BottomHeader.module.css';
// import {AiOutlineGift} from 'react-icons/ai';
import { BsGift, BsGithub } from 'react-icons/bs';
import { BsBrush } from 'react-icons/bs';
import { SiHappycow } from 'react-icons/si';
import { BsBalloon } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const BottomHeader = () => {
  return (
    <div className={`${styles.bg_primary} bottom_header light_skin main_menu_uppercase mb-4 `} >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-3">
              <div className={`${styles.all_cata} categories_wrap `}>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navCatContent"
                  aria-expanded="false"
                  className= {`${styles.mt_5} categories_btn`} 
                >
                    <i className= {`${styles.text_bl} linearicons-menu`} />
                  <span className= {`${styles.text_sb}`} >PHÂN LOẠI </span>
                </button>
                <div id="navCatContent" className="nav_cat navbar collapse">
                  <ul className={styles.p_0}>
                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className= {`${styles.sidebar_size} dropdown-item nav-link dropdown-toggler`}
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i/> <BsGift className= {styles.sidebar_icon} /> <span  className= {styles.ml_5}>Quà Tặng</span>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li className="dropdown-header">
                                    Featured Item
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Vestibulum sed
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
                                      Donec vitae facilisis
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
                                      Donec vitae ante ante
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
                                      Quisque condimentum
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
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
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-5">
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
                        className= {`${styles.sidebar_size} dropdown-item nav-link dropdown-toggler`}
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i/> <BsBrush className= {styles.sidebar_icon} /> <span  className= {styles.ml_5}>Trang Trí Nhà Cửa</span>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li className="dropdown-header">
                                    Featured Item
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Vestibulum sed
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
                                      Donec vitae facilisis
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
                                      Donec vitae ante ante
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
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
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
                                </ul>
                              </li>
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
                        className= {`${styles.sidebar_size} dropdown-item nav-link dropdown-toggler`}
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i/> <SiHappycow className= {styles.sidebar_icon} /> <span className= {styles.ml_5} >Thư Giản</span>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-7">
                            <ul className="d-lg-flex">
                              <li className="mega-menu-col col-lg-6">
                                <ul>
                                  <li className="dropdown-header">
                                    Featured Item
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item nav-link nav_item"
                                      href="#"
                                    >
                                      Vestibulum sed
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
                                      Donec vitae facilisis
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
                                      Donec vitae ante ante
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
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-6">
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
                                </ul>
                              </li>
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
                        className= {`${styles.sidebar_size} dropdown-item nav-link dropdown-toggler`}
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i/> <BsBalloon className= {styles.sidebar_icon} />
                        <span  className= {styles.ml_5}>Tiện Ích</span>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Woman's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-list-left-sidebar.html"
                                >
                                  Vestibulum sed
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-left-sidebar.html"
                                >
                                  Donec porttitor
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-right-sidebar.html"
                                >
                                  Donec vitae facilisis
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-list.html"
                                >
                                  Curabitur tempus
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-load-more.html"
                                >
                                  Vivamus in tortor
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Men's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-cart.html"
                                >
                                  Donec vitae ante ante
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="checkout.html"
                                >
                                  Etiam ac rutrum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="wishlist.html"
                                >
                                  Quisque condimentum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="compare.html"
                                >
                                  Curabitur laoreet
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="order-completed.html"
                                >
                                  Vivamus in tortor
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Kid's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail.html"
                                >
                                  Donec vitae facilisis
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-left-sidebar.html"
                                >
                                  Quisque condimentum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-right-sidebar.html"
                                >
                                  Etiam ac rutrum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Donec vitae ante ante
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Donec porttitor
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="dropdown dropdown-mega-menu">
                      <a
                        className= {`${styles.sidebar_size} dropdown-item nav-link dropdown-toggler`}
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        <i/> <BsGithub className= {styles.sidebar_icon} />
                        <span  className= {styles.ml_5}>Phụ Kiện</span>
                      </a>
                      <div className="dropdown-menu">
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Woman's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-list-left-sidebar.html"
                                >
                                  Vestibulum sed
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-left-sidebar.html"
                                >
                                  Donec porttitor
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-right-sidebar.html"
                                >
                                  Donec vitae facilisis
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-list.html"
                                >
                                  Curabitur tempus
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-load-more.html"
                                >
                                  Vivamus in tortor
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Men's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-cart.html"
                                >
                                  Donec vitae ante ante
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="checkout.html"
                                >
                                  Etiam ac rutrum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="wishlist.html"
                                >
                                  Quisque condimentum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="compare.html"
                                >
                                  Curabitur laoreet
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="order-completed.html"
                                >
                                  Vivamus in tortor
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Kid's</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail.html"
                                >
                                  Donec vitae facilisis
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-left-sidebar.html"
                                >
                                  Quisque condimentum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-right-sidebar.html"
                                >
                                  Etiam ac rutrum
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Donec vitae ante ante
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Donec porttitor
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    
                    
                  
                    {/* <li>
                    <ul className="more_slide_open">
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="login.html"
                        >
                          <i className="flaticon-pijamas" />{" "}
                          <span>Sleepwear</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="register.html"
                        >
                          <i className="flaticon-scarf" />{" "}
                          <span>Seasonal Wear</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="404.html"
                        >
                          <i className="flaticon-vintage" />{" "}
                          <span>Ethinic Wear</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="coming-soon.html"
                        >
                          <i className="flaticon-pregnant" />{" "}
                          <span>Baby Clothing</span>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  </ul>
                  <div className="more_categories">More Categories</div>
                </div>
              </div>
              
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6 col-9">
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
                  className= {`${styles.text_translate_0_10} collapse navbar-collapse mobile_side_menu`}
                  id="navbarSidetoggle"
                >
                  <ul className= {`${styles.nav_trans} navbar-nav `}>
                    <li className="dropdown">
                      <a
                        data-bs-toggle="dropdown"
                        className="nav-link"
                        href="#"
                      >
                        Trang Chủ
                      </a>
                    </li>

                    {/* san pham */}
                    <li className= {`${styles.dropdown_product} dropdown dropdown-mega-menu`}>
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
                            <ul className={styles.ul_padding_0}>
                              <li className="dropdown-header">Quà Tặng</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-three-columns.html"
                                >
                                  Thú Bông
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-four-columns.html"
                                >
                                  Gối Bông
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-grid-view.html"
                                >
                                  Chén Đĩa Ly Sứ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-list-view.html"
                                >
                                  Mèo Gốm
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-left-sidebar.html"
                                >
                                  Mèo
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-left-sidebar.html"
                                >
                                  Túi Xách
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-3">
                            <ul className={styles.ul_padding_0}>
                              <li className="dropdown-header">Trang Trí Nhà Cửa</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-cart.html"
                                >
                                  Thú Bông
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="checkout.html"
                                >
                                  Chén Đĩa Ly Sứ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="wishlist.html"
                                >
                                  Mèo Gốm
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="compare.html"
                                >
                                  Mền
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-2">
                            <ul className={styles.ul_padding_0}>
                              <li className="dropdown-header">Thư Giãn</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail.html"
                                >
                                  Thú Bông
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-left-sidebar.html"
                                >
                                  Gối Bông
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-right-sidebar.html"
                                >
                                  Mền
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Quạt
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-2">
                            <ul className={styles.ul_padding_0}>
                              <li className="dropdown-header">Tiện Ích</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail.html"
                                >
                                  Chén Đĩa Ly Sứ
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-left-sidebar.html"
                                >
                                  Mền
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-right-sidebar.html"
                                >
                                  Quạt
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-thumbnails-left.html"
                                >
                                  Gối Tựa Lưng
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-accordion-style.html"
                                >
                                  Gối Cổ
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-2">
                            <ul className={styles.ul_padding_0}>
                              <li className="dropdown-header">Phụ Kiện</li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail.html"
                                >
                                  Móc Khoá
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-left-sidebar.html"
                                >
                                  Túi Xách
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item nav-link nav_item"
                                  href="shop-product-detail-right-sidebar.html"
                                >
                                  Túi Mỹ Phẩm
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>



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

                     










                    </li>


                    <li>
                      <a className="nav-link nav_item" href="contact.html">
                        Set Quà Tặng
                      </a>
                    </li>
                    <li>
                      <a className="nav-link nav_item" href="contact.html">
                        Câu Chuyện Thương Hiệu
                      </a>
                    </li>
                  </ul>
                </div>



                <ul className= {`${styles.icon_right} navbar-nav attr-nav align-items-center`} >



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
                  <a
                    href="javascript:void(0);"
                    className="nav-link pr_search_trigger"
                  >
                    <i className="linearicons-magnifier" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BottomHeader
