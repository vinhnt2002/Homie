
'use client'

import Link from "next/link"

const ProductCard = ({ imageUrl, title, price, salePercent, rating, del, description , showProductActionBox}) => {

  return (

    <div className="item">
      <div className="product m-1 ">
        <div className="product_img">
          <Link href="/cart">
            <img src={imageUrl} alt="product_img" />
          </Link>
          {showProductActionBox && (
          <div className="product_action_box">
            <ul className="list_none pr_action_btn">
              <li className="add-to-cart">
                <Link href="/cart">
                  <i className="icon-basket-loaded" /> Add To Cart
                </Link>
              </li>
              <li>
                <Link href="/cart" className="popup-ajax">
                  <i className="icon-shuffle" />
                </Link>
              </li>
              <li>
                <Link href="/cart" className="popup-ajax">
                  <i className="icon-magnifier-add" />
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <i className="icon-heart" />
                </Link>
              </li>
            </ul>
          </div>
          )}
        </div>
        <div className="product_info">
          <h6 className="product_title">
            <Link href="/cart" >
              <span>{title}</span>
            </Link>
          </h6>

          <div className="pr_desc d-block">
            <p>{`${description.substring(0,45)}...`} </p>
          </div>

          <div className="product_price">
            <span className="price">{price} VND</span>
            <del>{del} VND</del>
            <div className="on_sale">
              <span>{salePercent} Off</span>
            </div>
          </div>
         

        </div>
        </div>
      </div>
  )
}

export default ProductCard