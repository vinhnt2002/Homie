import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Banner from '../components/Banner'
import BannerSlider from '../components/BannerSlider'
import FeaturedProductHeader from '../components/FeaturedProductHeader'
import ProductCard from '../components/ProductCard'


function Home() {
  
  const [showTabs,setShowTabs] = useState(true)
  const [showProductActionBox, setShowProductActionBox] = useState(true);


  const slides = [
    {
      image: 'assets/images/banner4.jpg',
      discount: 'Get up to 50% off Today Only!',
      title: 'Woman Fashion',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
    {
      image: 'assets/images/banner5.jpg',
      discount: '50% off in all products',
      title: 'Man Fashion',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
    {
      image: 'assets/images/banner6.jpg',
      discount: 'Taking your Viewing Experience to Next Level',
      title: 'Summer Sale',
      buttonLink: 'shop-left-sidebar.html',
      buttonText: 'Shop Now',
    },
  ];

  const products = [
    {
      imageUrl: 'assets/images/product_img1.jpg',
      title: 'Product 1',
      price: '$20',
      salePercent: '25%',
      rating: 4.5,
      del: 150000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: 'assets/images/product_img1.jpg',
      title: 'Product 2',
      price: '$30',
      salePercent: '30%',
      rating: 4.2,
      description: 'Nullam id varius nunc id varius nunc.',
    },
    // Add more products as needed
    {
      imageUrl: 'assets/images/product_img1.jpg',
      title: 'Product 1',
      price: '$20',
      salePercent: '25%',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: 'assets/images/product_img1.jpg',
      title: 'Product 2',
      price: '$30',
      salePercent: '30%',
      rating: 4.2,
      description: 'Nullam id varius nunc id varius nunc.',
    },
    // Add more products as needed
  ];
  return (
    <>
      {/* <!-- START SECTION BANNER --> */}
      <div>
        {/* Example usage of the BannerSlider component */}
        <BannerSlider slides={slides} />
      </div>
      {/* <!-- END SECTION BANNER --> */}
      {/* START MAIN CONTENT  */}
      <>
        <div className="main_content">
          {/* START SECTION SHOP */}
          <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader title="Exclusive Products" showTabs={showTabs} />
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
              <FeaturedProductHeader title="Deal Of The Days " />
              <div className="row">
                {products.map((product, index) => (
                  <div key={index} className="col-md-3">
                    <ProductCard {...product}  showProductActionBox={showProductActionBox}  />
                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP */}
          <div className="section small_pt pb_20">
            <div className="container">
              <FeaturedProductHeader title="Here is 3 item in one row " showTabs={showTabs} />
              <div className="row">
                {products.map((product, index) => (
                  <div key={index} className="col-md-4">
                    {/* <div className='custom-item'>  */}
                    <ProductCard {...product}  />
                    {/* </div> */}
                  </div>
                ))}

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