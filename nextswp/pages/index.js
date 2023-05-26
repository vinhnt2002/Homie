import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Slider from "react-slick";
import Styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import FeaturedProductHeader from '../components/productHeader/FeaturedProductHeader'
import ProductCard from '../components/productCard/ProductCard'
import BannerSlider from '../components/bannerSliders/BannerSlider'

function Home() {

  const [showTabs, setShowTabs] = useState(true)
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,

        }
      }
    ]
  };

  const products = [
    {
      imageUrl: 'assets/images2/image-14@2x.png',
      title: 'Cá mặt ngơ',
      price: '190.000',
      salePercent: '5%',
      rating: 4.5,
      del: ' 200,000',
      description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa ',
    },
    {
      imageUrl: 'assets/images2/image-17@2x.png',
      title: 'Chén chấm mèo ú',
      price: '120,000',
      salePercent: '20%',
      rating: 4.2,
      del: '150,000',
      description: 'Chén chấm mèo ú kiêm gác đũa',
    },
    // Add more products as needed
    {
      imageUrl: 'assets/images2/image-16@2x.png',
      title: 'Vịt hài hước funny',
      price: '220.000',
      del: '250,000',
      salePercent: '12%',
      rating: 4.5,
      description: 'Bằng tuổi mình người ta bồng con hết rồi',
    },
    {
      imageUrl: 'assets/images2/image-15@2x.png',
      title: 'Mèo đội quả quýt',
      price: '150.000',
      salePercent: '25%',
      del: '200,000',
      rating: 4.2,
      description: 'Mèo đội quả quýt được tin là mang lời chúc đại cát đại lợi...',
    },

    // Add more products as needed////////////////dsadasd/////////
    {
      imageUrl: 'assets/images2/product-img1jpg@2x.png',
      title: 'Mèo gốm may mắn để bàn',
      price: '250.000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'kèm thảm lót đỏ và hộp giấy in hoa',
    },
    {
      imageUrl: 'assets/images2/product-img2jpg@2x.png',
      title: 'Ly sứ Little Girl',
      price: '180.000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'gồm 1 tách sứ & nắp silicon như hình',
    },
    {
      imageUrl: 'assets/images2/product-img3jpg@2x.png',
      title: 'Ong Cánh Hoa',
      price: '250.000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'bé xinh vừa mềm êm vừa đáng yêu',
    },
    {
      imageUrl: 'assets/images2/product-img4jpg@2x.png',
      title: 'Quả bí lông cừu',
      price: '320,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Màu nắng hay là màu mắt em',
    },
    {
      imageUrl: 'assets/images2/product-img1jpg1@2x.png',
      title: 'Smiley Cup',
      price: '250,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'set gồm tách và đĩa sứ',
    },
    {
      imageUrl: 'assets/images2/product-img2jpg1@2x.png',
      title: 'Cún Milo',
      price: '350,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Gương mặt này ai nỡ không đối xử dịu dàng cơ chứ, tui còn ôm...',
    },
    {
      imageUrl: 'assets/images2/product-img3jpg2@2x.png ',
      title: 'Túi đựng mỹ phẩm',
      price: '150,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'bé xinh vừa mềm êm vừa đáng yêu.',
    },
    // {
    //   imageUrl: 'assets/images2/product-img1jpg2@2x.png',
    //   title: 'Ly giữ nhiệt Funny Party',
    //   price: '250,000',
    //   // salePercent: '25%',
    //   del: '0',
    //   rating: 4.2,
    //   description: 'Tặng gì cho crush “mát lòng mát dạ”',
    // },
    {
      imageUrl: 'assets/images2/product-img4jpg3@2x.png',
      title: 'Thỏ Cà Rốt ',
      price: '170,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: '3 em thỏ ngộ nghĩnh tay ôm cà rốt với chi tiết thêu tinh tế',
    }, {
      imageUrl: 'assets/images2/product-img3jpg3@2x.png ',
      title: 'Chú lừa Donkie',
      price: '350,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Bộ lông mềm mượt còn gương mặt lại cưng thiệt cưng, tỉ mỉ từng... ',
    }, {
      imageUrl: 'assets/images2/product-img6jpg@2x.png ',
      title: 'Cá mập quần bông',
      price: '290,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Có anh ở đây đố đứa nào dám ăn hiếp em nhoa',
    }, {
      imageUrl: 'assets/images2/product-img7jpg@2x.png ',
      title: 'Gối Cầu Vồng',
      price: '380,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Vỏ gối bằng chất liệu vải canvas chắc chắn, hoạ tiết cầu vồng...',
    }, {
      imageUrl: 'assets/images2/product-img8jpg@2x.png ',
      title: 'Spa time',
      price: '150,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Điều tôi muốn khi bên ngoài nóng hơn 40 độ',
    }, {
      imageUrl: 'assets/images2/product-img12jpg@2x.png ',
      title: 'Smiley Cup',
      price: '250,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'set gồm tách và đĩa sứ    ',
    }, {
      imageUrl: 'assets/images2/product-img10jpg@2x.png ',
      title: 'Khủng long Greenie',
      price: '250,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Trong vườn bao nhiêu cây lá nhưng không cây nào xanh...',
    }, {
      imageUrl: ' assets/images2/',
      title: 'Gối cổ kèm bịt mắt mèo',
      price: '170,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'gồi tàu xe đi chơi lễ sao cho không mỏi và ngủ ngon nè',
    },
    {
      imageUrl: 'assets/images2/product-img4jpg3@2x.png',
      title: 'Thỏ Cà Rốt ',
      price: '170,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: '3 em thỏ ngộ nghĩnh tay ôm cà rốt với chi tiết thêu tinh tế',
    }, {
      imageUrl: 'assets/images2/product-img3jpg3@2x.png ',
      title: 'Chú lừa Donkie',
      price: '350,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Bộ lông mềm mượt còn gương mặt lại cưng thiệt cưng, tỉ mỉ từng... ',
    }, {
      imageUrl: 'assets/images2/product-img6jpg@2x.png ',
      title: 'Cá mập quần bông',
      price: '290,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Có anh ở đây đố đứa nào dám ăn hiếp em nhoa',
    }, {
      imageUrl: 'assets/images2/product-img7jpg@2x.png ',
      title: 'Gối Cầu Vồng',
      price: '380,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Vỏ gối bằng chất liệu vải canvas chắc chắn, hoạ tiết cầu vồng...',
    }, {
      imageUrl: 'assets/images2/product-img8jpg@2x.png ',
      title: 'Spa time',
      price: '150,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Điều tôi muốn khi bên ngoài nóng hơn 40 độ',
    }, {
      imageUrl: 'assets/images2/product-img12jpg@2x.png ',
      title: 'Smiley Cup',
      price: '250,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'set gồm tách và đĩa sứ    ',
    }, {
      imageUrl: 'assets/images2/product-img10jpg@2x.png ',
      title: 'Khủng long Greenie',
      price: '250,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'Trong vườn bao nhiêu cây lá nhưng không cây nào xanh...',
    }, {
      imageUrl: ' assets/images2/',
      title: 'Gối cổ kèm bịt mắt mèo',
      price: '170,000',
      // salePercent: '25%',
      del: '0',
      rating: 4.2,
      description: 'gồi tàu xe đi chơi lễ sao cho không mỏi và ngủ ngon nè',
    },

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
              <div className={Styles.topTitle}>
              <FeaturedProductHeader className="d-flex justify-content-start" title="Top Sản Phẩm" showTabs={showTabs} />
              </div>
              <div className="row">
                <Slider {...settings} className="overflow-hidden" >

                {products.slice(0, 4).map((product, index) => (
                    <div key={index} className="col-md-3">
                       
                      <ProductCard {...product} showProductActionBox={showProductActionBox} /></div>
                   
                  ))} 
                </Slider>

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
                    image="assets/images/shop-banner-img1jpg@2x.png"
                    title1="Super Sale"
                    title2="Bộ sưu tập mới"
                    buttonLink="shop-left-sidebar.html"
                    buttonText="Mua Ngay"
                  />
                </div>
                <div className="col-md-6">
                  <Banner 
                    image="assets/images/shop-banner-img2jpg@2x.png"
                    title1="Sale 40% Off"
                    title2="SUMMER COMING"
                    buttonLink="shop-left-sidebar.html"
                    buttonText="Mua Ngay"

                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}
          {/* START SECTION SHOP */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className='d-flex justify-content-center'>
                <FeaturedProductHeader className="d-flex justify-content-center" title="Hàng Mới Về" />
              </div>

              <div className="row">
                <div className='col-12'>
                  <Slider {...settings} className='overflow-hidden'>

                  {products.slice(5, 9).map((product, index) => (
                      <div key={index} className="col-md-3">
                        <ProductCard {...product} showProductActionBox={showProductActionBox} />
                      </div>
                    ))}
                  </Slider>
                </div>

              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP */}
          <div className="section small_pt pb_20">
            <div className="container">


              <div className='d-flex justify-content-center'>
                <FeaturedProductHeader className="d-flex justify-content-center" title="Bán Chạy Tại Hommie" />
              </div>
              <div className="row">
                <div className='col-12'>
                  {/* <Slider {...settings}> */}
                 <div className={Styles.containerNones}>
                 <div className=" product_list d-flex flex-wrap"  >
                  
                    
                  {products.slice(9, 18).map((product, index) => (
                      <div key={index} className="col-md-4 justify-content-lg-around " >
                        <div className={Styles.horizon}>
                          
                          <ProductCard   {...product}  />
                        </div>
                      </div>
                    ))}
                  
                  </div>
                 </div>
                  {/* </Slider> */}
                </div>
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