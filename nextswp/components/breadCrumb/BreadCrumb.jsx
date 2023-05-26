import Link from 'next/link'
import React from 'react'
import classes from '../breadCrumb/BreadCrumb.module.css'
const BreadCrumb = ({title}) => {
  return (
    <>
 
    {/* START SECTION BREADCRUMB */}
<div className={classes.bg}>
<div className="breadcrumb_section bg_gray page-title-mini">
    <div className="container">
      {/* STRART CONTAINER */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className={classes.head}>
          <div className="page-title">
            <h1>Câu chuyện thương hiệu</h1>
          </div>
          </div>
        </div>
        <div className="col-md-6">
          <ol className="breadcrumb justify-content-md-end">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/">Pages</Link>
            </li>
            <li className="breadcrumb-item active">{title}</li>
          </ol>
        </div>
      </div>
    </div>
    {/* END CONTAINER*/}
  </div>
</div>
  {/* END SECTION BREADCRUMB */}
  </>
   )
}

export default  BreadCrumb