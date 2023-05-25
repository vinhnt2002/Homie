import React from "react";

const Banner = ({ image, title1, title2, buttonLink, buttonText, width, height }) => {
  const bannerStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="single_banner" style={bannerStyle}>
      <img src={image} alt="shop_banner_img" />
      <div className="single_banner_info">
        <h5 className="single_bn_title1">{title1}</h5>
        <h3 className="single_bn_title">{title2}</h3>
        <a href={buttonLink} className="single_bn_link">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
