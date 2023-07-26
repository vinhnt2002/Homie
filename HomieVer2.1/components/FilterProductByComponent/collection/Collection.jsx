import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Collection.module.css";
import Link from "next/link";
import { FaCoffee, FaGift, FaHeadphones, FaHome, FaPuzzlePiece } from "react-icons/fa";
const CollBar = ({ collections }) => {

  const settings = {
    dots: false,
    infinite: false,
    loop: true,
    arrows: false,
    speed: 250,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 800,
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
  const icons = [<FaHome />, <FaGift />, <FaCoffee />, <FaPuzzlePiece />, <FaHeadphones />];

  return (
    <div className={`${classes.category}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Slider {...settings}>
        {collections.slice(0, 5).map((collection, index) => (
          <div className={`${classes.card}`} key={index}>
            <Link href={`/collection/${collection.code}`}>
              <div className={`${classes.icon}`}>{icons[index % icons.length]}</div>
              <h6 className={`${classes.label}`}>{collection.name}</h6>
            </Link>
          </div>
        ))}
      </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollBar;
