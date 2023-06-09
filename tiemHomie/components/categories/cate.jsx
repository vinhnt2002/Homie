import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGift } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import classes from "./cate.module.css"
import Link from "next/link";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const CateHome = () => {
    return (
        <div className={`${classes.category}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                        <Carousel
                            // keyBoardControl
                            // transitionDuration={500}
                            // infinite
                            autoPlaySpeed={3000}
                            autoPlay
                            swipeable
                            arrows={false}
                            // partialVisible
                            // itemClass="carousel-item-padding-40-px"
                            // showDots
                            // centerMode
                            responsive={responsive}>
                                <div className={`${classes.card}`}>
                            <Link href="/shop_left">
                                    <FaGift className={`${classes.icon}`} />
                                    <h6 className={`${classes.label}`}>Quà tặng</h6>
                            </Link>
                            </div>
                            <div className={`${classes.card}`}>
                            <Link href="/shop_left">
                                    <FaHeadphones className={`${classes.icon}`} />
                                    <h6 className={`${classes.label}`}>Phụ kiện</h6>
                            </Link>
                            </div>
                            <div className={`${classes.card}`}>
                            <Link href="/shop_left">
                                    <FaHome className={`${classes.icon}`} />
                                    <h6 className={`${classes.label}`}>Trang trí nhà cửa</h6>
                            </Link>
                            </div>
                            <div className={`${classes.card}`}>
                            <Link href="/shop_left">
                                    <FaCoffee className={`${classes.icon}`} />
                                    <h6 className={`${classes.label}`}>Thư giãn</h6>
                            </Link>
                            </div>
                            <div className={`${classes.card}`}>
                            <Link href="/shop_left">
                                    <FaPuzzlePiece className={`${classes.icon}`} />
                                    <h6 className={`${classes.label}`}>Tiện ích</h6>
                            </Link>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )


    // return(
    //     <div>
    //         <Carousel responsive={responsive} className="align-self-center">
    //             <div>item1</div>
    //             <div>item2</div>
    //             <div>item3</div>
    //             <div>item4</div>
    //         </Carousel>
    //     </div>
    // )
}
export default CateHome