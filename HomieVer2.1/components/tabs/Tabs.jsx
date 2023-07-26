import React from 'react'

const Tabs = ({description}) => {
  return (
    <>
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
                        MÔ TẢ SẢN PHẨM
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
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Tabs