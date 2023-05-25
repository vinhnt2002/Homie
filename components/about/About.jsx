import React from 'react'
import classes from '../about/About.module.css'
const About = () => {
  return (
    
    <>
  {/* START SECTION BREADCRUMB */}
<div className={classes.bg}>
<div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
      {/* STRART CONTAINER */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className={classes.head}>
          <div className="page-title">
            <h1>Câu chuyện thương hiệu</h1>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <ol className="breadcrumb justify-content-md-end">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active">About</li>
          </ol>
        </div>
      </div>
    </div>
    {/* END CONTAINER*/}
  </div>
</div>
  {/* END SECTION BREADCRUMB */}
  {/* START MAIN CONTENT */}
  <div className="main_content">
    {/* STAT SECTION ABOUT */}
    <div className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_img scene mb-4 mb-lg-0">

              <div className={classes.img}>
<img src=" ./assets/images/image-29@2x.png" alt="about_img" />
              </div>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading_s1">
              <h2>Chúng tôi là ai</h2>
            </div>
            <p>
            Tiệm Homie cung cấp các sản phẩm quà tặng, trang trí nhà cửa, thư giãn và phụ kiện, làm cho cuộc sống của bạn xinh đẹp và dễ chịu hơn.
            </p>
            <p>
            Facebook: Tiệm Homie
Instagram: tiemhomieHotline/Zalo: 0386660782
Liên hệ xem hàng: Chung cư Masteri Millennium 132 Bến Vân Đồn, phường 6 quận 4, TP.HCM (Nhà riêng , Gọi trước khi qua)
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* END SECTION ABOUT */}
   
    
  
  </div>
  {/* END MAIN CONTENT */}
</>

  )
}

export default About