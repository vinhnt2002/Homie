import React from 'react'

const detail = () => {
  return (
    <>
  {/* START SECTION BREADCRUMB */}
  <div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
      {/* STRART CONTAINER */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="page-title">
            <h1>Product Detail</h1>
          </div>
        </div>
        <div className="col-md-6">
          <ol className="breadcrumb justify-content-md-end">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active">Product Detail</li>
          </ol>
        </div>
      </div>
    </div>
    {/* END CONTAINER*/}
  </div>
  {/* END SECTION BREADCRUMB */}

  
  {/* START MAIN CONTENT */}
  <div className="main_content">
    {/* START SECTION SHOP */}
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <div className="product-image">
              <div className="product_img_box">
                <img
                  id="product_img"
                  src="assets/images/product_img1.jpg"
                  data-zoom-image="assets/images/product_zoom_img1.jpg"
                  alt="product_img1"
                />
                <a href="#" className="product_img_zoom" title="Zoom">
                  <span className="linearicons-zoom-in" />
                </a>
              </div>
              <div
                id="pr_item_gallery"
                className="product_gallery_item slick_slider"
                data-slides-to-show={4}
                data-slides-to-scroll={1}
                data-infinite="false"
              >
                <div className="item">
                  <a
                    href="#"
                    className="product_gallery_item active"
                    data-image="assets/images/product_img1.jpg"
                    data-zoom-image="assets/images/product_zoom_img1.jpg"
                  >
                    <img
                      src="assets/images/product_small_img1.jpg"
                      alt="product_small_img1"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="#"
                    className="product_gallery_item"
                    data-image="assets/images/product_img1-2.jpg"
                    data-zoom-image="assets/images/product_zoom_img2.jpg"
                  >
                    <img
                      src="assets/images/product_small_img2.jpg"
                      alt="product_small_img2"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="#"
                    className="product_gallery_item"
                    data-image="assets/images/product_img1-3.jpg"
                    data-zoom-image="assets/images/product_zoom_img3.jpg"
                  >
                    <img
                      src="assets/images/product_small_img3.jpg"
                      alt="product_small_img3"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="#"
                    className="product_gallery_item"
                    data-image="assets/images/product_img1-4.jpg"
                    data-zoom-image="assets/images/product_zoom_img4.jpg"
                  >
                    <img
                      src="assets/images/product_small_img4.jpg"
                      alt="product_small_img4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="pr_detail">
              <div className="product_description">
                <h4 className="product_title">
                  <a href="#">Blue Dress For Woman</a>
                </h4>
                <div className="product_price">
                  <span className="price">$45.00</span>
                  <del>$55.25</del>
                  <div className="on_sale">
                    <span>35% Off</span>
                  </div>
                </div>
                <div className="rating_wrap">
                  <div className="rating">
                    <div className="product_rate" style={{ width: "80%" }} />
                  </div>
                  <span className="rating_num">(21)</span>
                </div>
                <div className="pr_desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus blandit massa enim. Nullam id varius nunc id
                    varius nunc.
                  </p>
                </div>
                <div className="product_sort_info">
                  <ul>
                    <li>
                      <i className="linearicons-shield-check" /> 1 Year AL
                      Jazeera Brand Warranty
                    </li>
                    <li>
                      <i className="linearicons-sync" /> 30 Day Return Policy
                    </li>
                    <li>
                      <i className="linearicons-bag-dollar" /> Cash on Delivery
                      available
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
                  <div className="product_size_switch">
                    <span>xs</span>
                    <span>s</span>
                    <span>m</span>
                    <span>l</span>
                    <span>xl</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="cart_extra">
                <div className="cart-product-quantity">
                  <div className="quantity">
                    <input type="button" defaultValue="-" className="minus" />
                    <input
                      type="text"
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                      className="qty"
                      size={4}
                    />
                    <input type="button" defaultValue="+" className="plus" />
                  </div>
                </div>
                <div className="cart_btn">
                  <button
                    className="btn btn-fill-out btn-addtocart"
                    type="button"
                  >
                    <i className="icon-basket-loaded" /> Add to cart
                  </button>
                  <a className="add_compare" href="#">
                    <i className="icon-shuffle" />
                  </a>
                  <a className="add_wishlist" href="#">
                    <i className="icon-heart" />
                  </a>
                </div>
              </div>
              <hr />
              <ul className="product-meta">
                <li>
                  SKU: <a href="#">BE45VGRT</a>
                </li>
                <li>
                  Category: <a href="#">Clothing</a>
                </li>
                <li>
                  Tags:{" "}
                  <a href="#" rel="tag">
                    Cloth
                  </a>
                  ,{" "}
                  <a href="#" rel="tag">
                    printed
                  </a>{" "}
                </li>
              </ul>
              <div className="product_share">
                <span>Share:</span>
                <ul className="social_icons">
                  <li>
                    <a href="#">
                      <i className="ion-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-googleplus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-youtube-outline" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-instagram-outline" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="large_divider clearfix" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tab-style3">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="Description-tab"
                    data-bs-toggle="tab"
                    href="#Description"
                    role="tab"
                    aria-controls="Description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Additional-info-tab"
                    data-bs-toggle="tab"
                    href="#Additional-info"
                    role="tab"
                    aria-controls="Additional-info"
                    aria-selected="false"
                  >
                    Additional info
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Reviews-tab"
                    data-bs-toggle="tab"
                    href="#Reviews"
                    role="tab"
                    aria-controls="Reviews"
                    aria-selected="false"
                  >
                    Reviews (2)
                  </a>
                </li>
              </ul>
              <div className="tab-content shop_info_tab">
                <div
                  className="tab-pane fade show active"
                  id="Description"
                  role="tabpanel"
                  aria-labelledby="Description-tab"
                >
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Vivamus bibendum
                    magna Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                  </p>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="Additional-info"
                  role="tabpanel"
                  aria-labelledby="Additional-info-tab"
                >
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Capacity</td>
                        <td>5 Kg</td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>Black, Brown, Red,</td>
                      </tr>
                      <tr>
                        <td>Water Resistant</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>Artificial Leather</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tab-pane fade"
                  id="Reviews"
                  role="tabpanel"
                  aria-labelledby="Reviews-tab"
                >
                  <div className="comments">
                    <h5 className="product_tab_title">
                      2 Review For <span>Blue Dress For Woman</span>
                    </h5>
                    <ul className="list_none comment_list mt-4">
                      <li>
                        <div className="comment_img">
                          <img src="assets/images/user1.jpg" alt="user1" />
                        </div>
                        <div className="comment_block">
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                          <p className="customer_meta">
                            <span className="review_author">Alea Brooks</span>
                            <span className="comment-date">March 5, 2018</span>
                          </p>
                          <div className="description">
                            <p>
                              Lorem Ipsumin gravida nibh vel velit auctor
                              aliquet. Aenean sollicitudin, lorem quis bibendum
                              auctor, nisi elit consequat ipsum, nec sagittis
                              sem nibh id elit. Duis sed odio sit amet nibh
                              vulputate
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comment_img">
                          <img src="assets/images/user2.jpg" alt="user2" />
                        </div>
                        <div className="comment_block">
                          <div className="rating_wrap">
                            <div className="rating">
                              <div
                                className="product_rate"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                          <p className="customer_meta">
                            <span className="review_author">Grace Wong</span>
                            <span className="comment-date">June 17, 2018</span>
                          </p>
                          <div className="description">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="review_form field_form">
                    <h5>Add a review</h5>
                    <form className="row mt-3">
                      <div className="form-group col-12 mb-3">
                        <div className="star_rating">
                          <span data-value={1}>
                            <i className="far fa-star" />
                          </span>
                          <span data-value={2}>
                            <i className="far fa-star" />
                          </span>
                          <span data-value={3}>
                            <i className="far fa-star" />
                          </span>
                          <span data-value={4}>
                            <i className="far fa-star" />
                          </span>
                          <span data-value={5}>
                            <i className="far fa-star" />
                          </span>
                        </div>
                      </div>
                      <div className="form-group col-12 mb-3">
                        <textarea
                          required="required"
                          placeholder="Your review *"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required="required"
                          placeholder="Enter Name *"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6 mb-3">
                        <input
                          required="required"
                          placeholder="Enter Email *"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-12 mb-3">
                        <button
                          type="submit"
                          className="btn btn-fill-out"
                          name="submit"
                          value="Submit"
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="small_divider" />
            <div className="divider" />
            <div className="medium_divider" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="heading_s1">
              <h3>Releted Products</h3>
            </div>
            <div
              className="releted_product_slider carousel_slider owl-carousel owl-theme"
              data-margin={20}
              data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
            >
              <div className="item">
                <div className="product">
                  <div className="product_img">
                    <a href="shop-product-detail.html">
                      <img
                        src="assets/images/product_img1.jpg"
                        alt="product_img1"
                      />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                          <a href="#">
                            <i className="icon-basket-loaded" /> Add To Cart
                          </a>
                        </li>
                        <li>
                          <a href="shop-compare.html">
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
                  </div>
                  <div className="product_info">
                    <h6 className="product_title">
                      <a href="shop-product-detail.html">
                        Blue Dress For Woman
                      </a>
                    </h6>
                    <div className="product_price">
                      <span className="price">$45.00</span>
                      <del>$55.25</del>
                      <div className="on_sale">
                        <span>35% Off</span>
                      </div>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                    <div className="pr_switch_wrap">
                      <div className="product_color_switch">
                        <span className="active" data-color="#87554B" />
                        <span data-color="#333333" />
                        <span data-color="#DA323F" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="product_img">
                    <a href="shop-product-detail.html">
                      <img
                        src="assets/images/product_img2.jpg"
                        alt="product_img2"
                      />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                          <a href="#">
                            <i className="icon-basket-loaded" /> Add To Cart
                          </a>
                        </li>
                        <li>
                          <a href="shop-compare.html">
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
                  </div>
                  <div className="product_info">
                    <h6 className="product_title">
                      <a href="shop-product-detail.html">Lether Gray Tuxedo</a>
                    </h6>
                    <div className="product_price">
                      <span className="price">$55.00</span>
                      <del>$95.00</del>
                      <div className="on_sale">
                        <span>25% Off</span>
                      </div>
                    </div>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "68%" }}
                        />
                      </div>
                      <span className="rating_num">(15)</span>
                    </div>
                    <div className="pr_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                    <div className="pr_switch_wrap">
                      <div className="product_color_switch">
                        <span className="active" data-color="#847764" />
                        <span data-color="#0393B5" />
                        <span data-color="#DA323F" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <span className="pr_flash">New</span>
                  <div className="product_img">
                    <a href="shop-product-detail.html">
                      <img
                        src="assets/images/product_img3.jpg"
                        alt="product_img3"
                      />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                          <a href="#">
                            <i className="icon-basket-loaded" /> Add To Cart
                          </a>
                        </li>
                        <li>
                          <a href="shop-compare.html">
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
                  </div>
                  <div className="product_info">
                    <h6 className="product_title">
                      <a href="shop-product-detail.html">
                        woman full sliv dress
                      </a>
                    </h6>
                    <div className="product_price">
                      <span className="price">$68.00</span>
                      <del>$99.00</del>
                    </div>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "87%" }}
                        />
                      </div>
                      <span className="rating_num">(25)</span>
                    </div>
                    <div className="pr_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                    <div className="pr_switch_wrap">
                      <div className="product_color_switch">
                        <span className="active" data-color="#333333" />
                        <span data-color="#7C502F" />
                        <span data-color="#2F366C" />
                        <span data-color="#874A3D" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="product_img">
                    <a href="shop-product-detail.html">
                      <img
                        src="assets/images/product_img4.jpg"
                        alt="product_img4"
                      />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                          <a href="#">
                            <i className="icon-basket-loaded" /> Add To Cart
                          </a>
                        </li>
                        <li>
                          <a href="shop-compare.html">
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
                  </div>
                  <div className="product_info">
                    <h6 className="product_title">
                      <a href="shop-product-detail.html">light blue Shirt</a>
                    </h6>
                    <div className="product_price">
                      <span className="price">$69.00</span>
                      <del>$89.00</del>
                      <div className="on_sale">
                        <span>20% Off</span>
                      </div>
                    </div>
                    <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "70%" }}
                        />
                      </div>
                      <span className="rating_num">(22)</span>
                    </div>
                    <div className="pr_desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                    <div className="pr_switch_wrap">
                      <div className="product_color_switch">
                        <span className="active" data-color="#333333" />
                        <span data-color="#A92534" />
                        <span data-color="#B9C2DF" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="product">
                  <div className="product_img">
                    <a href="shop-product-detail.html">
                      <img
                        src="assets/images/product_img5.jpg"
                        alt="product_img5"
                      />
                    </a>
                    <div className="product_action_box">
                      <ul className="list_none pr_action_btn">
                        <li className="add-to-cart">
                          <a href="#">
                            <i className="icon-basket-loaded" /> Add To Cart
                          </a>
                        </li>
                        <li>
                          <a href="shop-compare.html">
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
                  </div>
                  <div className="product_info">
                    <h6 className="product_title">
                      <a href="shop-product-detail.html">
                        blue dress for woman
                      </a>
                    </h6>
                    <div className="product_price">
                      <span className="price">$45.00</span>
                      <del>$55.25</del>
                      <div className="on_sale">
                        <span>35% Off</span>
                      </div>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc.
                      </p>
                    </div>
                    <div className="pr_switch_wrap">
                      <div className="product_color_switch">
                        <span className="active" data-color="#87554B" />
                        <span data-color="#333333" />
                        <span data-color="#5FB7D4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* END SECTION SHOP */}
    {/* START SECTION SUBSCRIBE NEWSLETTER */}

  </div>
</>

  )
}

export default detail