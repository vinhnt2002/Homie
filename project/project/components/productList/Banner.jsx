import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative text-black text-[20px] w-full max-w-[1200px] mx-auto flex justify-end">
      <Image
        src={"/assets/images/footerimage.png"}
        height={500}
        width={835}
        alt="banner"
        className="flex mt-5 justify-center items-center
           "
      />
    </div>
  );
};

export default Banner;
