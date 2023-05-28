import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionBannerSlider = () => {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade light_arrow"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active background_bg">
            <Image
              src="/assets/images2/image-15@2x.png"
              width={500}
              height={500}
              alt="img"
            />
            <div className="banner_slide_content">
              <div className="container">
                {/* STRART CONTAINER */}
                <div className="row">
                  <div className="col-lg-7 col-9">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        Get up to 50% off Today Only!
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Woman Fashion
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="shop-left-sidebar.html"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CONTAINER*/}
            </div>
          </div>

          <div className="carousel-item background_bg">
            <Image
              src="/assets/images/banner2.jpg"
              width={500}
              height={500}
              alt="img"
            />
                        <div className="banner_slide_content">
              <div className="container">
                {/* STRART CONTAINER */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        50% off in all products
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Man Fashion
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="shop-left-sidebar.html"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CONTAINER*/}
            </div>
          </div>

          <div className="carousel-item background_bg">
            <Image
              src="/assets/images/banner3.jpg"
              width={500}
              height={500}
              alt="img"
            />
                        <div className="banner_slide_content">
              <div className="container">
                {/* STRART CONTAINER */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        50% off in all products
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                      >
                        Man Fashion
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="shop-left-sidebar.html"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CONTAINER*/}
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <i className="ion-chevron-left" />
        </Link>
        <Link
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <i className="ion-chevron-right" />
        </Link>
      </div>
    </div>
  );
};

export default SectionBannerSlider;
