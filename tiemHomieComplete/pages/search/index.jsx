import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProductCard from "../../components/section/productCard/ProductCard";
import Pagination from "../../components/FilterProductByComponent/paging/Pagination";
import SortBySelected from "../../components/FilterProductByComponent/sortBySelected/SortBySelected";
import SideBar from "../../components/FilterProductByComponent/sidebar/SideBar";
import FilterButton from "../../components/FilterProductByComponent/sidebar/FilterButton";

const Product = ({ products, collections, productCount }) => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  // const encodeSearchQuery = encodeURI(searchQuery || "");

  console.log("Search param", searchQuery);

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  // console.log();

  useEffect(() => {
    const normalizeString = (str) => {
      // Remove accents and special characters
      const normalizedStr = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // Remove Unicode characters
      const removedUnicodeStr = normalizedStr.replace(/[^\x00-\x7F]/g, "");

      return removedUnicodeStr;
    };

    const filteredProducts = products.filter((product) =>
      normalizeString(product.name.toLowerCase()).includes(
        normalizeString(searchQuery.toLowerCase())
      )
    );

    setData(filteredProducts);
  }, [searchQuery, data]);

  const itemsPerPage = 9;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  let i = 0;
  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      case "price":
        sortedData = sortedData.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedData = sortedData.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedData = filteredProducts;
        break;
    }

    setData(sortedData);
  };
  const handleSortOptionChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSortOption(selectedOption);
    sortData(selectedOption); // Pass selectedOption as an argument to sortData
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState([0, 1000000]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  console.log(data);

  useEffect(() => {
    const normalizeString = (str) => {
      // Remove accents and special characters
      const normalizedStr = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      // Remove Unicode characters
      const removedUnicodeStr = normalizedStr.replace(/[^\x00-\x7F]/g, "");

      return removedUnicodeStr;
    };

    const filteredProducts = products.filter((product) =>
      normalizeString(product.name.toLowerCase()).includes(
        normalizeString(searchQuery.toLowerCase())
      )
    );
    const filteredData = filteredProducts.filter(
      (product) =>
        product.price >= value[0] && product.price <= value[1]
    );
    setData(filteredData);
    setSelectedSortOption(""); // Reset selected sort option
  }, [value, setData, setSelectedSortOption]);

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
                  <FilterButton handleShow={handleShow} />
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
            <SideBar
              collections={collections}
              productCount={productCount}
              show={show}
              handleClose={handleClose}
              handleSliderChange={handleSliderChange}
              value={value}
            />
          </div>
        </div>
      </div>
      {/* END SECTION SHOP */}
    </div>
  );
};

export default Product;
export async function getStaticProps() {
    
  const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await productsResponse.json();
  const collectionsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
  const collections = await collectionsResponse.json();
    
  const productCount = collections.map((collection) => {
    let count = 0;
    collection.products.map(() => count++)
    return count;
    }
  )
  
  return {
    props: {
      products,
      collections,
      productCount,
    },
  };
}
