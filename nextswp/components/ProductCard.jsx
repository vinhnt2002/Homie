'use client'

const ProductCard = ({ imageUrl, title, price, salePercent, rating, del, description , showProductActionBox}) => {


  return (

    <div className="item">
      <div className="product">
        <div className="product_img">
          <a href="shop-product-detail.html">
            <img src={imageUrl} alt="product_img" />
          </a>
          {showProductActionBox && (
          <div className="product_action_box">
            <ul className="list_none pr_action_btn">
              <li className="add-to-cart">
                <a href="#">
                  <i className="icon-basket-loaded" /> Add To Cart
                </a>
              </li>
              <li>
                <a href="shop-compare.html" className="popup-ajax">
                  <i className="icon-shuffle" />
                </a>
              </li>
              <li>
                <a href="shop-quick-view.html" className="popup-ajax">
                  <i className="icon-magnifier-add" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-heart" />
                </a>
              </li>
            </ul>
          </div>
          )}
        </div>
        <div className="product_info">
          <h6 className="product_title">
            <a href="shop-product-detail.html">{title}</a>
          </h6>

          <div className="pr_desc">
            <p>{description}</p>
          </div>

          <div className="product_price">
            <span className="price">{price}</span>
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