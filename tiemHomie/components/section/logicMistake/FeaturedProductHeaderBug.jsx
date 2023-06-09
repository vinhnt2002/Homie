// import Styles from "./FeaturedProductHeader.module.css";
// import React from "react";
import React from 'react'

const HaveABug = () => {
  return (
    <div>HaveABug</div>
  )
}

export default HaveABug

 
// const FeaturedProductHeader = ({ title, showTabs, handleTabChange }) => {
//   const handleTabClick = (tabId) => {
//     // Call the handleTabChange function with the selected tab ID
//     showTabs.handleTabChange(tabId);
//   };

//   return (
//     <div className="row">
//       <div className="col-12">
//         <div className="heading_tab_header">
//           <div className="justify-content-center">
//             <div className={Styles.titleLeft}>
//               <div className="heading_s2">
//                 <span>{title}</span>
//               </div>
//             </div>
//           </div>
//           <div className={Styles.titleRight}>
//             {showTabs && (
//               <div className="tab-style2">
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#tabmenubar"
//                   aria-expanded="false"
//                 >
//                   <span className="ion-android-menu" />
//                 </button>
//                 <ul
//                   className="nav nav-tabs justify-content-center justify-content-md-end"
//                   id="tabmenubar"
//                   role="tablist"
//                 >
//                   <li className="nav-item">
//                     <div className={Styles.redText}>
//                       <a
//                         className={`nav-link ${showTabs.activeTab === "Hàng Mới Về" ? "active" : ""}`}
//                         id="arrival-tab"
//                         onClick={() => handleTabClick("Hàng Mới Về")}
//                         // href="#Hàng Mới Về"
//                         role="tab"
//                         aria-controls="arrival"
//                         aria-selected={showTabs.activeTab === "Hàng Mới Về"}
//                       >
//                         Hàng Mới Về
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <div className={Styles.redText}>
//                       <a
//                         className={`nav-link ${showTabs.activeTab === "Bán Chạy" ? "active" : ""}`}
//                         id="sellers-tab"
//                         onClick={() => handleTabClick("Bán Chạy")}
//                         // href="#Bán Chạy"
//                         role="tab"
//                         aria-controls="sellers"
//                         aria-selected={showTabs.activeTab === "Bán Chạy"}
//                       >
//                         Bán Chạy
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <div className={Styles.redText}>
//                       <a
//                         className={`nav-link ${showTabs.activeTab === "Đặc Biệt" ? "active" : ""}`}
//                         id="featured-tab"
//                         onClick={() => handleTabClick("Đặc Biệt")}
//                         // href="#Đặc Biệt"
//                         role="tab"
//                         aria-controls="featured"
//                         aria-selected={showTabs.activeTab === "Đặc Biệt"}
//                       >
//                         Đặc Biệt
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <div className={Styles.redText}>
//                       <a
//                         className={`nav-link ${showTabs.activeTab === "Chỉ Có Tại Hommie" ? "active" : ""}`}
//                         id="special-tab"
//                         onClick={() => handleTabClick("Chỉ Có Tại Hommie")}
//                         // href="#Chỉ Có Tại Hommie"
//                         role="tab"
//                         aria-controls="special"
//                         aria-selected={showTabs.activeTab === "Chỉ Có Tại Hommie"}
//                       >
//                         Chỉ Có Tại Hommie
//                       </a>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//  );
// };

// export default FeaturedProductHeader;
