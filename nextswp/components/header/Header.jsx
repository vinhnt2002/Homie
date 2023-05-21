import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import styles from './Header.module.css'; 

const Header = () => {
  return (
    <header className="header_wrap">
      <TopHeader />
      <div className="middle-header dark_skin">
        <div className="container">
          <div className="nav_block">
            <a className="navbar-brand" href="index.html">
              
              <div className={styles.flex}>
              <img
                className= {styles.logo}
                src="assets/images/image-141@2x.png"
                alt="logo"
              />
                   <h2 style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Pacifico', fontSize: '36px', fontWeight: 400, lineHeight: '34px',  textAlign: 'left' }}>Tiệm Homie</h2>
                   </div>
            </a>
            <div className="contact_phone order-md-last">
              <i className="linearicons-phone-wave" />
              <span>093 839 30 84</span>
            </div>
            <div className="product_search_form">
              <form>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className={`${styles.custom_select} custom_select`}>
                      <select className="first_null">
                        <option value="">Phân Loại</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Shirt-Tops">Shirt &amp; Tops</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Pents">Pents</option>
                        <option value="Jeans">Jeans</option>
                      </select>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Search Product..."
                    required=""
                    type="text"
                  />
                  <button type="submit" className="search_btn">
                    <i className="linearicons-magnifier" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <BottomHeader />
    </header>
  );
};

export default Header;
