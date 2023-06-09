import React, { useState } from "react";
import Slider from "react-slick";
import FeaturedProductHeader from "./FeaturedProductHeaderBug";
import ProductCard from "../productCard/ProductCard";

const FeaturedProductFilter = ({ productData }) => {
  const [activeTab, setActiveTab] = useState("Hàng Mới Về");
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

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
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const filteredProductData = productData.filter(
    (product) => product.category === activeTab
  );              

  return (
    <div className="section small_pt small_pb">
      <div className="container">
        <div className="topTitle">
          <FeaturedProductHeader
            title="Top Sản Phẩm"
            showTabs={{
              activeTab: activeTab,
              handleTabChange: handleTabChange,
            }}
          />
        </div>
        <div className="row">
          <Slider {...settings} className="overflow-hidden">
            {filteredProductData.map((product, index) => (
              <div key={index} className="col-md-3">
                <ProductCard
                  productData={product}
                  showProductActionBox={showProductActionBox}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductFilter;
