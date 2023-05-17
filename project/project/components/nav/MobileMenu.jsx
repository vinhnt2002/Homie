import Link from "next/link";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Product", subMenu: true },
  { id: 3, name: "Colllection", url: "/Collection" },
  { id: 4, name: "Blog", url: "/Blog" },
];

const subMenuData = [
  { id: 1, name: "Gau Bong", doc_count: 11 },
  { id: 2, name: "Coc Nuoc", doc_count: 8 },
  { id: 3, name: "Do Luu Niem", doc_count: 64 },
  { id: 4, name: "Vay", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col 
    md:hidden font-bold 
    absolute top-[50px] left-0
    w-full h-[calc(100vh-50px)]
    bg-white border-t
    text-black
    ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BiChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul
                    className=" bg-black/[0.05] -mx-5 mt-4 -mb-4
                  "
                  >
                    {/* SHOW SUBMENU CATE MOBILE */}
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          key={submenu.id}
                          href="/"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li
                            className="py-4 px-8 border-t flex justify-between"
                          >
                            {submenu.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                    {/* END SUBMENU MOBILE */}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
