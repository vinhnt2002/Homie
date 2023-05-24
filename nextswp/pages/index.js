import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Slider from "react-slick";

import Banner from '../components/Banner'
import FeaturedProductHeader from '../components/FeaturedProductHeader'
import ProductCard from '../components/ProductCard'
import BannerSlider from '../components/bannerSliders/BannerSlider'


function Home() {

  const [showTabs, setShowTabs] = useState(true)
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };



  const products = [
    {
      imageUrl: 'assets/images2/image-14@2x.png',
      title: 'Product 1',
      price: '190.000',
      salePercent: '25%',
      rating: 4.5,
      del: 200.000,
      description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa ',
    },
    {
      imageUrl: 'assets/images2/image-15@2x.png',
      title: 'Product 2',
      price: '190.000',
      salePercent: '30%',
      rating: 4.2,
      description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
    },
    // Add more products as needed
    {
      imageUrl: 'assets/images2/image-16@2x.png',
      title: 'Product 1',
      price: '190.000',
      salePercent: '25%',
      rating: 4.5,
      description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
    },
    {
      imageUrl: 'assets/images2/image-14@2x.png',
      title: 'Product 2',
      price: '190.000',
      salePercent: '30%',
      rating: 4.2,
      description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
    },
    // Add more products as needed
  ];


  return (
    <>
      {/* <!-- START SECTION BANNER --> */}
      <div>
        {/* Example usage of the BannerSlider component */}
        <BannerSlider />
      </div>
      {/* <!-- END SECTION BANNER --> */}
      {/* START MAIN CONTENT  */}
      <>
        <div className="main_content">
          {/* START SECTION SHOP */}
          <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader title="Top Sản Phẩm" showTabs={showTabs} />
              <div className="row">
                  {products.map((product, index) => (
                    <div key={index} className="col-md-3">
                      <ProductCard {...product} showProductActionBox={showProductActionBox} />
                    </div>
                  ))}

              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION BANNER */}
          <div className="section pb_20 small_pt">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Banner
                    image="assets/images/shop_banner_img1.jpg"
                    title1="Super Sale"
                    title2="New Collection"
                    buttonLink="shop-left-sidebar.html"
                    buttonText="Shop Now"
                  />
                </div>
                <div className="col-md-6">
                  <Banner
                    image="assets/images/shop_banner_img2.jpg"
                    title1="Sale 40% Off"
                    title2="New Season"
                    buttonLink="shop-left-sidebar.html"
                    buttonText="Shop Now"

                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}
          {/* START SECTION SHOP */}
          <div className="section small_pt small_pb">
            <div className="container">
              <FeaturedProductHeader title="Hàng Mới Về" />
              <div className="row">
                {products.map((product, index) => (
                  <div key={index} className="col-md-3">
                    <ProductCard {...product} showProductActionBox={showProductActionBox} />
                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP */}
          <div className="section small_pt pb_20">
            <div className="container">
              <FeaturedProductHeader title="Bán Chạy Tại Hommie" showTabs={showTabs} />
              <div className="row">
                {/* <Slider {...settings}> */}

                  {products.map((product, index) => (
                    <div key={index} className="col-md-4">
                      {/* <div className='custom-item'>  */}
                      <ProductCard {...product} />
                      {/* </div> */}
                    </div>
                  ))}
                {/* </Slider> */}


              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
        </div>
      </>
      {/* END MAIN CONTENT  */}
    </>
  )
}

export default Home