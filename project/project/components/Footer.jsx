import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";

//icons
import { BiMap } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";

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
    <footer className="bg-white text-[#687188]">
      <Wrapper>
        {/* div tong */}
        <div className="py-8 flex flex-wrap items-center justify-between">
          {/* div Ngoai cung trai */}
          <div className="flex flex-col">
            <div
              className="w-full flex flex-row justify-center gap-1 
            items-center md:w-auto mb-6 md:mb-6"
            >
              <Image
                src="/assets/images/image-141@2x.png"
                width={73}
                height={73}
                alt="Hommie Logo"
                className="rounded-full"
              />
              <div className="text-xl font-bold">Tiệm Homie</div>
            </div>

            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className=" text-lg font-semibold">Liên hệ với chúng tôi</h2>
            </div>

            <div className="w-full md:w-auto mb-6 md:mb-0">
              <div className="flex items-center mb-2 gap-2">
                <BiMap />
                <div>32 Bến Vân Đồn P6 Q4, TP. Hồ Chí Minh</div>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <TfiEmail />
                <a
                  className="border-b-2 "
                  href="mailto:chieunganvo88@gmail.com"
                  target="_blank"
                >
                  chieunganvo88@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BsPhone />
                <div>093 839 30 84</div>
              </div>
            </div>
          </div>

          {/* col 2  */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">FAQS</h2>
            <ul>
              {FAQS.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <li className="text-inherit">
                      <Link href="/" >
                        {item.name}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>

          {/* col 3 */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <ul>
              {ABOUT.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <li className="text-inherit">
                      <Link href="/" >
                        {item.name}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>

          {/* col 4 */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Facebook</h2>

            <Link
              href="https://www.facebook.com/tiemhomie.sg"
              className="text-inherit border-b-2"
            >
              This is the Link
            </Link>
            <div className="w-full md:w-auto">
              <Image
                src="/assets/images/image-29@2x.png"
                width={339}
                height={142}
                alt="hello"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
