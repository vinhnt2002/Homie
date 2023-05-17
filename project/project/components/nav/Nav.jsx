"use client";

import { useEffect, useState } from "react";
import Wrapper from "../Wrapper";

import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MobileMenu";


// icon
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

        // Dynamic Nav To SCROOL DOWN 
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

      // END SCROLL DOWN

  return (
    <nav
      className={`
    w-full 
    h-[50px]
    md:h-[66.61px] bg-orange-400
    flex items-center justify-between 
    z-20 sticky top-0 
    transition-transform duration-300 ${show}`}
    >
      <Wrapper
        className="
      h-[60px] 
      flex justify-between items-center"
      >
        {/* button category */}
        <Link href="/">
          <img src="" alt="" className="w-10 md:w-15" />
        </Link>

        {/* submenu */}
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        {/* Cart, Heart , User  */}
        <div className=" flex items-center gap-2  text-black">
          {/* ICON User START  */}
          <div className=" icon-nav ">
            <AiOutlineUser className="hidden md:flex text-[15px] md:text-[24px] text-white" />
          </div>
          {/* ICON END  */}

          {/* ICON Heart START  */}
          <div className=" icon-nav">
            <IoMdHeartEmpty className="text-[15px] md:text-[24px] text-white" />
            <div
              className="
               h-[14px]
               md:h-[18px]
               min-w-[14px]
               md:min-[18px]
               rounded-full
               bg-rose-500
               absolute
               left-5 top-1 md:left-7
               text-white text-[10px] md:text[12px]
               flex justify-center items-center
               px-[2px]
               md:px-[5px]
               "
            >
              0
            </div>
          </div>
          {/* ICON END  */}

          {/* ICON Cart START  */}
          <div className=" icon-nav">
            <BsCart className="text-[15px] md:text-[24px] text-white" />
            <div
              className="
               h-[14px]
               md:h-[18px]
               min-w-[14px]
               md:min-[18px]
               rounded-full
               bg-rose-500
               absolute
               left-5 top-1 md:left-7
               text-white text-[10px] md:text[12px]
               flex justify-center items-center
               px-[2px]
               md:px-[5px]
               
               "
            >
              5
            </div>
          </div>
          {/* ICON END  */}

          {/* Mobile Menu ICON  */}
          <div className="icon-nav -mr-2 md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-4 "
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-5 "
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;
