import React, { useEffect } from "react";
import { useState } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Cart from "./Cart/Cart";
import Search from "./SeachingGroup/Search";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateTotal } from "@/redux/reducers/cartSlice";
import Backdrop from "./Backdrop/Backdrop";
import { useSession } from "next-auth/react";
import UserDrop from "./userDrop/UserDrop";
import WishListForm from "./Wishlish/WishListForm";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = (e) => {
    e.preventDefault();
    setIsCartOpen(true);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
    setIsUserDropdown(false);
    setIsWishListDropdown(false);
  };

  const handleCartClose = (e) => {
    e.preventDefault();
    setIsCartOpen(false);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
    setIsUserDropdown(false);
    setIsWishListDropdown(false);
  };

  const [isUserDropdown, setIsUserDropdown] = useState(false);

  const handleUserDropdown = (e) => {
    e.preventDefault();
    setIsUserDropdown(!isUserDropdown);
  };

  const [isWishListDropdown, setIsWishListDropdown] = useState(false);

  const handleWishlistOpen = (e) => {
    e.preventDefault();
    setIsWishListDropdown(true);
    setIsCartOpen(false);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
    setIsUserDropdown(false);
  };

  const handleWishlistClose = (e) => {
    e.preventDefault();
    setIsWishListDropdown(false);
    setIsCartOpen(false);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
    setIsUserDropdown(false);
  };

  const router = useRouter();

  const { data: session } = useSession();

  //Redux
  const amount = useSelector((store) => store.cart.amount);
  const wishListAmount = useSelector((store) => store.cart.wishlistAmount);

  const { products } = useDispatch((store) => store.counter);
  const { userInfo, wishList } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };
  return (
    <>
      {isCartOpen ? (
        <>
          <Backdrop
            handleCartClose={handleCartClose}
            handleWishlistClose={handleWishlistClose}
            isCartOpen={isCartOpen}
            isWishListDropdown={isWishListDropdown}
          />
        </>
      ) : (
        <>
          <Backdrop
            handleCartClose={handleCartClose}
            handleWishlistClose={handleWishlistClose}
            isCartOpen={isCartOpen}
            isWishListDropdown={isWishListDropdown}
          />
        </>
      )}

      <header
        className="header_wrap "
      >
        <div className="top-header p-0 pt-2">
          <div className="container  mx-auto px-2 w-100">
            <div className="row align-items-center ">
              {/* Logo */}
              <div className="col-6 col-md-4 col-sm-6 col-xl-4 col-xxl-4 order-md-0 order-xl-0">
                <div className="d-flex align-items-center justify-content-md-start mb-2">
                  <Link className={style.logo} href="/">
                    <img src="/assets/images2/logo_title.png" alt="logo" />
                    <h2
                      className="justify-content-center my-0 ms-2"
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily: "Pacifico",
                        fontWeight: 400,
                      }}
                    >
                      Tiệm Homie
                    </h2>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-6 col-sm-12 col-xl-6 col-xxl-6 align-items-center justify-content-center order-md-1 order-sm-3 order-3 order-xl-1">
                <Search className="me-16 order-sm-last order-md-last" />
              </div>

              <div className="col-6 col-md-2 col-sm-6 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-end order-md-2 order-xl-2 px-1">
                <ul className="navbar-nav attr-nav align-items-center">
                  <li className={style.loginBtn}>
                    {userInfo ? (
                      <div className="pe-1" onClick={handleUserDropdown}>
                        <img
                          src={userInfo.image || "/assets/images2/user.png"}
                          alt=""
                          className={style.userInfo}
                        />
                      </div>
                    ) : (
                      <>
                        <Link href="login">
                          <i className="ti-user"></i>
                        </Link>
                      </>
                    )}

                    {isUserDropdown ? (
                      <>
                        {" "}
                        <UserDrop />
                      </>
                    ) : (
                      <></>
                    )}
                  </li>

                  <li className="cart_hover">
                    <a
                      href="#"
                      className="nav-link"
                      onClick={handleWishlistOpen}
                    >
                      <i className="linearicons-heart" />
                      <span className="wishlist_count"> {wishListAmount} </span>
                    </a>
                  </li>

                  {isWishListDropdown ? (
                    <>
                      <div className={`${style.cartSidebarOpen} `}>
                        <WishListForm
                          handleWishlistClose={handleWishlistClose}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                    <div className={`${style.cartSidebarClose} `}>
                        <WishListForm
                        />
                      </div>
                    </>
                  )}

                  <li className="cart_hover">
                    <a
                      className="nav-link cart_trigger"
                      href="#"
                      data-bs-toggle=""
                      onClick={handleCartOpen}
                    >
                      <i className="linearicons-cart"></i>
                      <span className="cart_count"> {amount} </span>
                    </a>

                    {isCartOpen ? (
                      <>
                        <div className="slide-in-left">
                          <div className={`${style.cartSidebarOpen} `}>
                            <Cart handleCartClose={handleCartClose} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="slide-in-left">
                          <div className={`${style.cartSidebarClose} `}>
                            <Cart />
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                  <button
                    className="navbar-toggler mt-0 mb-2 me-1 px-1"
                    type="button"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                  >
                    <span
                      className={`${style.toggle} ion-android-menu fs-3`}
                    ></span>
                  </button>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${style.bgHeader} bottom_header dark_skin main_menu_uppercase `}
          >
            <div className="container p-0">
              <nav className={`${style.content} navbar navbar-expand-lg`}>
                <div
                  className={`collapse navbar-collapse justify-content-center${
                    isNavbarOpen ? " show" : ""
                  }`}
                  // id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="dropdown mx-3">
                      <Link
                        data-bs-toggle=""
                        className={`${
                          router.pathname === "/" ? "active" : ""
                        } nav-link`}
                        href="/"
                      >
                        Trang Chủ
                      </Link>
                    </li>
                    <li className="dropdown dropdown-mega-menu mx-3 ">
                      <a
                        className={`${
                          router.pathname === "/collection" ? "active" : ""
                        } dropdown-toggle nav-link nav-item`}
                        href="/collection"
                        data-bs-toggle="dropdown"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        Sản Phẩm
                      </a>
                      <div
                        className={`dropdown-menu ${
                          isDropdownOpen ? "show" : ""
                        }`}
                      >
                        <ul className="mega-menu d-lg-flex">
                          <li className="mega-menu-col col-lg-2">
                            <ul>
                              <li className="dropdown-header">Quà Tặng</li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav-item"
                                  href="/category/thu-bong"
                                  onClick={handleLinkClick}
                                >
                                  Thú Bông
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/chen-dia-ly-su"
                                  onClick={handleLinkClick}
                                >
                                  Chén Đĩa Ly Sứ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/meo-gom"
                                  onClick={handleLinkClick}
                                >
                                  Mèo Gốm
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/men"
                                  onClick={handleLinkClick}
                                >
                                  Mền
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/tui-xach"
                                  onClick={handleLinkClick}
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
                                  href="/category/thu-bong"
                                  onClick={handleLinkClick}
                                >
                                  Thú Bông
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/goi-bong"
                                  onClick={handleLinkClick}
                                >
                                  Gối Bông
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/chen-dia-ly-su"
                                  onClick={handleLinkClick}
                                >
                                  Chén Đĩa Ly Sứ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/meo-gom"
                                  onClick={handleLinkClick}
                                >
                                  Mèo Gốm
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/men"
                                  onClick={handleLinkClick}
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
                                  href="/category/thu-bong"
                                  onClick={handleLinkClick}
                                >
                                  Thú Bông
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/goi-bong"
                                  onClick={handleLinkClick}
                                >
                                  Gối Bông
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/men"
                                  onClick={handleLinkClick}
                                >
                                  Mền
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/quat"
                                  onClick={handleLinkClick}
                                >
                                  Quạt
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-2">
                            <ul>
                              <li className="dropdown-header">Tiện Ích</li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/chen-dia-ly-su"
                                  onClick={handleLinkClick}
                                >
                                  Chén Đĩa Ly Sứ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/men"
                                  onClick={handleLinkClick}
                                >
                                  Mền
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/quat"
                                  onClick={handleLinkClick}
                                >
                                  Quạt
                                </Link>
                              </li> */}
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/goi-tua-lung"
                                  onClick={handleLinkClick}
                                >
                                  Gối Tựa Lưng
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/goi-co"
                                  onClick={handleLinkClick}
                                >
                                  Gối Cổ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/ly-giu-nhiet"
                                  onClick={handleLinkClick}
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
                                  href="/category/moc-khoa"
                                  onClick={handleLinkClick}
                                >
                                  Móc Khoá
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/tui-xach"
                                  onClick={handleLinkClick}
                                >
                                  Túi Xách
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  className="dropdown-item nav-link nav_item"
                                  href="/category/tui-my-pham"
                                  onClick={handleLinkClick}
                                >
                                  Túi Mỹ Phẩm
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                        </ul>
                        <div className="d-lg-flex menu_banners row g-3 px-3">
                          <div className="col-sm-4">
                            <div className="header-banner">
                              <img
                                src="/assets/images/shop-banner-img1jpg@2x.png"
                                alt="menu_banner1"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="header-banner">
                              <img
                                src="/assets/images/shop-banner-img2jpg@2x.png"
                                alt="menu_banner2"
                              />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="header-banner">
                              <img
                                src="/assets/images/shop-banner-img1jpg@2x.png"
                                alt="menu_banner3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        className={`${
                          router.pathname === "/collection" ? "active" : ""
                        } nav-link nav_item mx-3`}
                        href="/collection"
                        passHref
                      >
                        Set Quà Tặng
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          router.pathname === "/contact" ? "active" : ""
                        } nav-link nav_item mx-3`}
                        href="/contact"
                        passHref
                      >
                        Câu Chuyện Thương Hiệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;