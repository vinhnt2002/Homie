import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProductCard from "../../components/section/productCard/ProductCard";
import Pagination from "../../components/FilterProductByComponent/paging/Pagination";
import SortBySelected from "../../components/FilterProductByComponent/sortBySelected/SortBySelected";
import SideBar from "../../components/FilterProductByComponent/sidebar/SideBar";
import FilterButton from "../../components/FilterProductByComponent/sidebar/FilterButton";

const shopleft = ({ products, collections, productCount }) => {
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState(products);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      //   case 'popularity':
      //     sortedData = sortedData.sort((a, b) => a.popularity - b.popularity);
      //     break;
        case 'date':
          sortedData = sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
          break;
      case "price":
        sortedData = sortedData.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedData = sortedData.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedData = products;
        break;
    }

    setData(sortedData);
  };
  const handleSortOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    sortData(selectedOption); 
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState([0, 1000000]);

  const handleSliderChange = (newValue) => {
      setValue(newValue);
  };
  useEffect(() => {
    const filteredData = products.filter(
      (product) =>
        product.price >= value[0] && product.price <= value[1]
    );
  
    let sortedData = [...filteredData];
    if (selectedSortOption === "price") {
      sortedData = filteredData.sort(
        (a, b) => a.price - b.price
      );
    } else if (selectedSortOption === "price-desc") {
      sortedData = filteredData.sort(
        (a, b) => b.price - a.price
      );
      //more types sorted here
    }
  
    setData(sortedData);

  }, [value, products, selectedSortOption, setData,setSelectedSortOption]);
  return (
    <div className="main_content">
      <BreadCrumb
        descriptionTitle="Tất Cả Sản Phẩm"
        title="Tất cả sản phẩm"
        middlePath="Bộ sưu tập"
      ></BreadCrumb>
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
            <div className="row align-items-center mb-4 pb-1">
                <div className="col-12 d-flex justify-content-between product_header">
                  <SortBySelected
                    handleSortOptionChange={handleSortOptionChange}
                    selectedSortOption={selectedSortOption}
                  />
                  <FilterButton handleShow={handleShow}/>
                </div>
              </div>
              <div className="row shop_container">
                {paginatedData.map((product, index) => (
                  <div key={index} className="col-md-4">
                    <ProductCard
                      productData={product}
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                ))}
                <Pagination
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <SideBar collections={collections} productCount={productCount}  show={show} handleClose={handleClose} handleSliderChange={handleSliderChange} value={value}/>          
            </div>
        </div>
      </div>
      {/* END SECTION SHOP */}
    </div>
  );
};

export default shopleft;

export async function getStaticProps() {
  const productsResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/products`);
  const products = await productsResponse.json();

  const collectionsResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/collections`);
  const collections = await collectionsResponse.json();

const productCount = collections.map((collection) => {
  let count = 0;
  collection.products.map(() => count++)
  return count;
  }
)
  return {
    props: { products, collections, productCount },
  };
}
