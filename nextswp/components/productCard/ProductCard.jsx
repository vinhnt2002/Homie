
'use client'
import Styles from "../productCard/ProductCard.module.css"
import Link from "next/link"

const ProductCard = ({ imageUrl, title, price, salePercent, rating, del, description, showProductActionBox }) => {

  return (

    <div className={Styles.boxx}>
      <div className="item">
        <div className="product m-1 ">
          <div className="product_img">
            <Link href="/cart">
              <img src={imageUrl} style={{ width: '100%', height: 'auto' }} alt="product_img" />
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
          <div className="product_info ">
            <div className={Styles.downClass}>

              <div className={Styles.productTitle}>
                <h6 className="product_title" style={{ color: '#292B2C', textDecoration: 'none' }}>

                  <Link href="/cart" style={{ color: '#292B2C', textDecoration: 'none' }}>{title}</Link>

                </h6>
              </div>


              <div className={Styles.desSize}>
                <div className="pr_desc d-block">
                  <div className={Styles.overF}>
                    <p>{description}</p>
                  </div>

                </div>
              </div>

              <div className="product_price">
                <div className="">
                  <span className="price">{price} VND</span><br></br>
                  <del className="m">{del} VND</del>
                </div>
                <div className="on_sale">
                  <span>{salePercent} Off</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard