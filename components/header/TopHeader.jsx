import React from 'react'
import styles from './TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className="top-header d-none d-md-block">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-8">
        <div className="header_topbar_info">
          <div className="header_offer">
            {/* <span>Free Ground Shipping Over $250</span> */}
          </div>
          <div className="download_wrap">
            {/* <span className="me-3">Download App</span>
            <ul className="icon_list text-center text-lg-start">
              <li>
                <a href="#">
                  <i className="fab fa-apple" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-android" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-windows" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-4">
        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
          <div className="lng_dropdown">
            
            <div className={styles.flex}>
              <img src="assets/images/engpng@2x.png" alt="" />
              <p>VietNam</p>
            </div>

          </div>
          <div className="ms-3">

            <div className={styles.flex}>
              <p>VND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default TopHeader
