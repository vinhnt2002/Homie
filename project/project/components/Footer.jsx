"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";

//icons
import { BiMap } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import { AiFillFacebook, AiFillGooglePlusSquare } from "react-icons/ai";

const FAQS = [
  { id: 1, name: "About Us", url: "/" },
  { id: 2, name: "FAQ", url: "/" },
  { id: 3, name: "Location", url: "/" },
  { id: 4, name: "Affiliates", url: "/" },
  { id: 5, name: "Contact", url: "/" },
];
const ABOUT = [
  { id: 1, name: "My Account", url: "/" },
  { id: 2, name: "Discount", url: "/" },
  { id: 3, name: "Returns", url: "/" },
  { id: 4, name: "Orders History", url: "/" },
  { id: 5, name: "Order Tracking", url: "/" },
];

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="flex items-start justify-center md:flex-between flex-col lg:flex-row px-5 md:px-0 lg:gap-[40px] gap-0">
          <div className="w-full lg:w-1/3">
            <div className="flex gap-2 justify-start mb-[44px]">
              <Link href={"/"} className="flex-center gap-1">
                <Image
                  src={"/assets/images/logo.png"}
                  width={73}
                  height={73}
                  alt="Logo"
                />
                <span className=" text-[36px] leading-[34px] font-bold">
                  Tiệm Hommie
                </span>
              </Link>
            </div>
            <div className="">
              <h2 className=" text-[18px] leading-[22px] font-semibold my-[23px]">
                Liên hệ với chúng tôi
              </h2>
              <ul className="flex flex-col gap-y-[10px]">
                <li>
                  <Link
                    href={"/"}
                    className="flex items-center gap-2 text-slategray-200"
                  >
                    <BiMap size={18} />
                    <span className="text-[14px] leading-[26px] ">
                      132 Bến Vân Đồn P6 Q4, TP. Hồ Chí Minh
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-slategray-200"
                    type="email"
                    href="mailto:chieunganvo88@gmail.com"
                  >
                    <TfiEmail />
                    <span className="text-[14px] leading-[26px]">
                      mailto:chieunganvo88@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 text-slategray-200"
                    type="tel"
                    href="tel:093 839 30 84"
                  >
                    <TfiEmail />
                    <span className="text-[14px] leading-[26px]">
                      093 839 30 84
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-fit md:w-full lg:w-2/3 mt-0 md:mt-7 lg:mt-0">
            <div className="flex relative">

              <div className="flex items-start justify-between w-fit md:w-full md:flex-row flex-col">
                <div className="w-full mt-7 md:mt-0 ">
                  <h2 className="text-[18px] leading-[22px] font-semibold mb-[10px]">
                    FAQS
                  </h2>
                  <ul className="flex flex-col gap-y-[10px]">
                    {FAQS.map((item) => {
                      return (
                        <li className="" key={item.id}>
                          <Link
                            href={item.url}
                            className="flex items-center gap-2 text-slategray-200"
                          >
                            <span className="">{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="w-full mt-7 md:mt-0 ">
                  <h2 className="text-[18px] leading-[22px] font-semibold mb-[10px]">
                    About
                  </h2>
                  <ul className="flex flex-col gap-y-[10px]">
                    {ABOUT.map((item) => {
                      return (
                        <li className="" key={item.id}>
                          <Link
                            href={item.url}
                            className="flex items-center gap-2 text-slategray-200"
                          >
                            <span className="">{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="w-full mt-7 md:mt-0 ">
                  <h2 className="text-[18px] leading-[22px] font-semibold mb-[10px]">
                    Social Media
                  </h2>
                  <ul className="flex flex-col gap-y-[10px]">
                    <li className="">
                      <Link
                        href={"https://www.facebook.com/tiemhomie.sg"}
                        className=""
                      >
                        <AiFillFacebook size={36} color="#3b5998" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className=" absolute md:hidden w-[339px] h-[142px] top-[50%] transform translate-y-[-50%] left-[130px]">
                  <Image
                    src={"/assets/images/footerimage.png"}
                    height={142}
                    width={339}
                    alt="footer"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
