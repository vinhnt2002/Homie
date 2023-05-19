import Banner from "@components/productCard/Banner";
import Wrapper from "@components/Wrapper";
import ProductCart from "@components/productCard/ProductCard";
import BannerSmall from "@components/productCard/BannerSmall";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className="h-[4000px] ">
      <Banner />
      <Wrapper>


        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[26px] md:text-[36px] mb-5 font-semibold leading-tight">
            Top sản phẩm
          </div>
        </div>

         {/* products grid start and Content with 4 item in one row */}
        <div className="grid grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        {/* products grid end */}

        {/*product banner small  with 2 item in one row  */}
        <div className="grid grid-cols-2 gap-5 my-14 px-5 md:px-0">
          <BannerSmall />
          <BannerSmall />
        </div>
        {/* end banner small  */}

        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[26px] md:text-[36px] mb-5 font-semibold leading-tight">
            Sản phẩm mới
          </div>
        </div>
         {/* products grid start and Content with 4 item in one row */}
        <div className="grid grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        {/* products grid end */}

        
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[26px] md:text-[36px] mb-5 font-semibold leading-tight">
            Chỉ có tại Hommie
          </div>
        </div>

        {/* products grid start and Content with 4 item in one row */}
        <div className="grid grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <ProductCart /> 
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        {/* products grid end */}
        

        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[26px] md:text-[36px] mb-5 font-semibold leading-tight">
            Bán chạy tại Hommie
          </div>
        </div>

        {/*products grid start and Content with 3 item in one row  */}
        <div className="grid grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <Link href="/product/1" className="w-[252px] h-[390px]">
            <Image
              src="/assets/images/image-14@2x.png"
              width={250}
              height={250}
              alt="product img"
            />
            <div>
              <h2>Product Name</h2>
              <div>
                <span>190.000VND</span>
                <p>Desc</p>
                <span>200.000VND</span>
              </div>
            </div>
          </Link>
          <Link href="/product/1" className="w-[252px] h-[390px]">
            <Image
              src="/assets/images/image-14@2x.png"
              width={250}
              height={250}
              alt="product img"
            />
            <div>
              <h2>Product Name</h2>
              <div>
                <span>190.000VND</span>
                <p>Desc</p>
                <span>200.000VND</span>
              </div>
            </div>
          </Link>
          <Link href="/product/1" className="w-[252px] h-[390px]">
            <Image
              src="/assets/images/image-14@2x.png"
              width={250}
              height={250}
              alt="product img"
            />
            <div>
              <h2>Product Name</h2>
              <div>
                <span>190.000VND</span>
                <p>Desc</p>
                <span>200.000VND</span>
              </div>
            </div>
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default Home;
