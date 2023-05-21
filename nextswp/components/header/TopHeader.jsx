import React from 'react'
import styles from './TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className="top-header d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8"></div>
            <div className="col-lg-6 col-md-4">
              <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                {/* <div className="lng_dropdown">
                  <select name="countries" className="custome_select">
                    <option
                      value="en"
                      data-image="assets/images/eng.png"
                      data-title="English"
                    >
                      English
                    </option>
                    <option
                      value="fn"
                      data-image="assets/images/fn.png"
                      data-title="France"
                    >
                      France
                    </option>
                    <option
                      value="us"
                      data-image="assets/images/us.png"
                      data-title="United States"
                    >
                      United States
                    </option>
                  </select>
                </div> */}
                <div className={styles.flex}>
                    <img src="assets/images/engpng@2x.png" alt="" />
                    <p>VietNam</p>
                    <p>VND</p>
                </div>

                <div className="ms-3">
                  {/* <select name="countries" className="custome_select">
                    <option value="USD" data-title="USD">
                      USD
                    </option>
                    <option value="EUR" data-title="EUR">
                      EUR
                    </option>
                    <option value="GBR" data-title="GBR">
                      GBR
                    </option>
                  </select> */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TopHeader
