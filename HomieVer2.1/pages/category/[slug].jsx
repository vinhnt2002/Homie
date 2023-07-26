import React, { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import ProductCard from "../../components/section/productCard/ProductCard";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import SortBySelected from "../../components/FilterProductByComponent/sortBySelected/SortBySelected";
import Pagination from "../../components/FilterProductByComponent/paging/Pagination";
import SideBar from "../../components/FilterProductByComponent/sidebar/SideBar";
import FilterButton from "../../components/FilterProductByComponent/sidebar/FilterButton";

const ShopLeft = ({
  products,
  category,
  filteredProducts,
  productCount,
  collections,
}) => {

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  // LOGIC TO FETCH DATA
  useEffect(() => {
    setData(filteredProducts);
  }, [filteredProducts]);

  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      case "price":
        sortedData = sortedData.sort(
          (a, b) => a.price - b.price
        );
        break;
      case "price-desc":
        sortedData = sortedData.sort(
          (a, b) => b.price - a.price
        );
        break;
      default:
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

  // Sidebar (offCanvas)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Price filter
  const [value, setValue] = useState([0, 1000000]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const filteredData = filteredProducts.filter(
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
  }, [value, products, selectedSortOption, setData, setSelectedSortOption]);

  return (
    <div className="main_content">
      <BreadCrumb
        descriptionTitle={category.name}
        title={category.name}
        middlePath="Danh mục"
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
                {paginatedData.map((product) => (
                  <div key={product.id} className="col-md-4">
                    <ProductCard
                      productData={product}
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                ))}
              </div>
              <Pagination
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
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

export default ShopLeft;


export async function getStaticPaths() {
  const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = await categoriesResponse.json();

  const paths = categories.map((c) => ({
    params: {
      slug: c.code,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const categoriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = await categoriesResponse.json();
  const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await productsResponse.json();
  const collectionsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`);
  const collections = await collectionsResponse.json();
  
  const categoryId = params.slug;
  const category = categories.find((c) => c.code === categoryId);
  
  const filteredProducts = products.filter((product) =>
    product.categoryId.includes(category.id)
  );
  const productCount = collections.map((collection) => {
    let count = 0;
    collection.products.map(() => count++)
    return count;
    }
  )
  

  return {
    props: {
      products,
      category,
      collections,
      filteredProducts,
      productCount,
    },
  };
}
