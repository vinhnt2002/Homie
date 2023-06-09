import React from 'react'
import Link from 'next/link'
import classes from '../ButtonCustomer.module.css'
const ProductDetail = () => {


  return (
    <div className="pr_detail">
    <div className="product_description">
      <h4 className="product_title">
        <Link href="#">Mèo Gốm May Mắn Để Bàn</Link>
      </h4> 
      <div className="product_price">
        <span className="price">220.000 VND</span><br></br>
         <del>230.000 VND</del>
        {/* <div className="on_sale">
          <span>35% Off</span>
        </div>   */}
      </div>
      <div className="rating_wrap">
        <div className="rating">
          <div
            className="product_rate"
            style={{ width: "80%" }}
          />
        </div>
        <span className="rating_num">(21)</span>
      </div>
      <div className="pr_desc">
        <p>
        Màu đỏ cầu sức khoẻ, bình an, xua đuổi các việc không may.
        Màu trắng kêu gọi tài khí, phúc khí, mời gọi nhân duyên tốt lành, tài lộc cho gia chủ.
        </p>
      </div>
      
      <div className="product_sort_info">
        <ul>
          <li>
            <i className="linearicons-shield-check" /> Giao Hàng Toàn Quốc
          </li>
          <li>
            <i className="linearicons-sync" /> Cam Kết Đổi/Trả Hàng Miễn Phí
          </li>
          <li>
            <i className="linearicons-bag-dollar" /> Thanh Toán Khi Nhận Hàng
          </li>
        </ul>
      </div>
      <div className="pr_switch_wrap">
        <span className="switch_lable">Color</span>
        <div className="product_color_switch">
          <span className="active" data-color="#87554B" />
          <span data-color="#333333" />
          <span data-color="#DA323F" />
        </div>
      </div>
      <div className="pr_switch_wrap">
        <span className="switch_lable">Size</span>
        <div>
          <span className="border border-warning">SIZE 15X7 CM</span>
          {/* <span>s</span>
          <span>m</span>
          <span>l</span>
          <span>xl</span> */}
        </div>
      </div>
    </div>
    <hr />
    <div className="cart_extra">
      <div className="cart-product-quantity">
        <div className="quantity">
          <input
            type="button"
            defaultValue="-"
            className="minus"
          />
          <input
            type="text"
            name="quantity"
            defaultValue={1}
            title="Qty"
            className="qty"
            size={4}
          />
          <input
            type="button"
            defaultValue="+"
            className="plus"
          />
        </div>
      </div>
      <div className="cart_btn">
        <Link 
        href="cart"
        ><button
        className={`btn btn-outline-light btn-sm pb-2 btn-warning`}
        type="button"
        
      >
        <i className="icon-basket-loaded" />
         Thêm Vào Giỏ Hàng
      </button>
      </Link>
        {/* <Link className="add_compare" href="#">
          <i className="icon-shuffle" />
        </Link> */}
        <Link className="add_wishlist" href="#">
          <i className="icon-heart" />
        </Link>
      </div>
    </div>
    <hr />
    <ul className="product-meta">
      <li>
        SKU: <Link href="#">BE45VGRT</Link>
      </li>
      <li>
        Category: <Link href="#">Phụ kiện</Link>
      </li>
      <li>
        Tags:{" "}
        <Link href="#" rel="tag">
        Mèo gốm may mắn
        </Link>
        {/* ,{" "}
        <Link href="#" rel="tag">
          printed
        </Link>{" "} */}
      </li>
    </ul>
    {/* <div className="product_share">
      <span>Share:</span>
      <ul className="social_icons">
        <li>
          <Link href="#">
            <i className="ion-social-facebook" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="ion-social-twitter" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="ion-social-googleplus" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="ion-social-youtube-outline" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="ion-social-instagram-outline" />
          </Link>
        </li>
      </ul>
    </div> */}
  </div>
  )
}

export default ProductDetail