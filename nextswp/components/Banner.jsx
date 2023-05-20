import React from 'react';

const BannerSlider = ({ slides }) => {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-3">
            <div
              id="carouselExampleControls"
              className="carousel slide light_arrow"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === 0 ? 'active' : ''
                    } background_bg`}
                    data-img-src={slide.image}
                  >
                    <div className="banner_slide_content banner_content_inner">
                      <div className="col-lg-8 col-10">
                        <div className="banner_content overflow-hidden">
                          <h5
                            className="mb-3 staggered-animation font-weight-light"
                            data-animation="slideInLeft"
                            data-animation-delay="0.5s"
                          >
                            {slide.discount}
                          </h5>
                          <h2
                            className="staggered-animation"
                            data-animation="slideInLeft"
                            data-animation-delay="1s"
                          >
                            {slide.title}
                          </h2>
                          <a
                            className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                            href={slide.buttonLink}
                            data-animation="slideInLeft"
                            data-animation-delay="1.5s"
                          >
                            {slide.buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ol className="carousel-indicators indicators_style1">
                {slides.map((_, index) => (
                  <li
                    key={index}
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide-to={index}
                    className={index === 0 ? 'active' : ''}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;


// import React from "react";

// const Banner = ({ image, title, description, buttonLink, buttonText, style }) => {
//   return (
//     <div className="banner_section" style={style}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-9 offset-lg-3">
//             <div className="banner_content_inner">
//               <div className="background_bg" style={{ backgroundImage: `url(${image})` }}>
//                 <div className="banner_content overflow-hidden">
//                   <h5 className="mb-3 font-weight-light">{description}</h5>
//                   <h2>{title}</h2>
//                   <a className="btn btn-fill-out rounded-0 text-uppercase" href={buttonLink}>
//                     {buttonText}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
