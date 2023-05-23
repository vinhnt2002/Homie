import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import classes from './BannerSlider.module.css'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const slides = [
  {
    image: "/assets/images/banner4.jpg",
    discount: "Get up to 50% off Today Only!",
    title: "Woman Fashion",
    buttonLink: "shop-left-sidebar.html",
    buttonText: "Shop Now",
  },
  {
    image: "/assets/images/banner5.jpg",
    discount: "50% off in all products",
    title: "Man Fashion",
    buttonLink: "shop-left-sidebar.html",
    buttonText: "Shop Now",
  },
  {
    image: "/assets/images/banner6.jpg",
    discount: "Taking your Viewing Experience to Next Level",
    title: "Summer Sale",
    buttonLink: "shop-left-sidebar.html",
    buttonText: "Shop Now",
  },
];

function BannerSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(slides.length - 1);
  };

  const onNextClick = () => {
    if (index === slides.length - 1) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  return (
    <>
      <div className="button-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-3"></div>
            <div className="col-lg-9 col-md-8 col-sm-6 col-9">
              <Carousel
                autoPlay={true}
                interval={5000}
                controls={false}
                indicators={true}
                onSelect={handleSelect}
                activeIndex={index}
              >
                {slides.map((slide, indexSlider) => (
                  <Carousel.Item key={indexSlider}>
                    <Image
                      src={slide.image}
                      height={400}
                      width={200}
                      alt={`Slide ${indexSlider}`}
                      className="d-block w-100"
                    />
                    <Carousel.Caption>
                      <h3>{slide.title}</h3>
                      <p>{slide.discount}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* btn icon  */}
              <button variant="primary" className={classes.prevBTN} onClick={onPrevClick}>
                {/* <FiChevronLeft/>  */}
                Prev
                {/* here is icon i was let in ipmort  */}
              </button>
              <button variant="primary" onClick={onNextClick}>
                Next
                {/* here is icon i was let in ipmort  */}

              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSlider;
