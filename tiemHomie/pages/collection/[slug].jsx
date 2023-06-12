import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
// import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../../components/section/productCard/ProductCard";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReactPaginate from "react-paginate";
import { getAllProduct } from "../../action/menuApi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import classes from "./shop_left.module.css";
import { useRouter } from "next/router";

// NEED TO WRITE THE COPONENT TO OBTAIN IT
// DO IT AGAIN
const PriceFilter = () => {
  const [value, setValue] = useState([80000, 700000]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const sliderStyle = {
    width: "100%",
    margin: "0 auto",
    // Add more styles as needed
  };

  const valueContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    // Add more styles as needed
  };

  const valueLabelStyle = {
    marginRight: "10px",
    // Add more styles as needed
  };

  const handleStyle = {
    borderColor: "#FFF",
    backgroundColor: "#FFF",
  };

  const trackStyle = {
    backgroundColor: "red",
  };

  return (
    <div>
      <h5>Giá</h5>
      <Slider
        range
        step={50000}
        min={0}
        max={1000000}
        value={value}
        onChange={handleSliderChange}
        style={sliderStyle}
        trackStyle={trackStyle}
        handleStyle={[handleStyle, handleStyle]} // Apply handle styles to both markers
      />
      <div style={valueContainerStyle}>
        <div style={valueLabelStyle}>Giá:</div>
        <div className="fw-bold">
          {value[0].toLocaleString()}VND-{value[1].toLocaleString()}VND
        </div>
      </div>
    </div>
  );
};

const shopleft = ({ products, collections, collection, filteredProducts }) => {
  const router = useRouter();

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState(filteredProducts);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  useEffect(() => {
    setData(filteredProducts);
  }, [filteredProducts]);

  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      //   case 'popularity':
      //     sortedData = sortedData.sort((a, b) => a.popularity - b.popularity);
      //     break;
      //   case 'date':
      //     sortedData = sortedData.sort((a, b) => a.date - b.date);
      //     break;
      case "price":
        sortedData = sortedData.sort((a, b) => a.sellingPrice - b.sellingPrice);
        break;
      case "price-desc":
        sortedData = sortedData.sort((a, b) => b.sellingPrice - a.sellingPrice);
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
    sortData(selectedOption); // Pass selectedOption as an argument to sortData
  };

  const itemsPerPage = 9;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="main_content">
      <BreadCrumb
        descriptionTitle={collection.name}
        title={collection.name}
        middlePath="Danh mục"
      ></BreadCrumb>
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12">
                  <div className="d-flex justify-content-end product_header">
                    <div className="me-2 text-start">Sắp xếp theo</div>
                    <div className="custom_select text-end">
                      <select
                        className="form-control form-control-sm"
                        onChange={handleSortOptionChange}
                        value={selectedSortOption}
                      >
                        <option value="">Mặc định</option>
                        <option value="popularity">Nổi bật</option>
                        <option value="date">Mới nhất</option>
                        <option value="price">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                      </select>
                    </div>
                  </div>
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
                <div className="row align-items-center mb-4 pb-1">
                  <div className="col-12">
                    <div className="d-flex justify-content-center product_header">
                      <ReactPaginate
                        previousLabel={<AiOutlineArrowLeft />}
                        nextLabel={<AiOutlineArrowRight />}
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        pageClassName={classes["page-item"]} // Apply the imported CSS class
                        pageLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        previousClassName={classes["page-item"]} // Apply the imported CSS class
                        previousLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        nextClassName={classes["page-item"]} // Apply the imported CSS class
                        nextLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        breakClassName={classes["page-item"]} // Apply the imported CSS class
                        breakLinkClassName={classes["page-link"]} // Apply the imported CSS class
                        containerClassName={classes.pagination} // Apply the imported CSS class
                        activeClassName={classes.active} // Apply the imported CSS class
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <Link href={`/collection`}>
                    <h5 className="widget_title">Danh Mục</h5>
                  </Link>
                  <ul className="widget_categories">
                    {collections.map((collection) => (
                      <li key={collection.id}>
                        <Link href={`/collection/${[collection.code]}`}>
                          <span className="categories_name">
                            {collection.name}
                          </span>
                          {/* <span className="categories_num">({productCount[i]})</span> */}
                          {/* <span style={{ display: 'none' }}>{i++}</span> */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget">
                  <PriceFilter products={products} setData={setData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SECTION SHOP */}
    </div>
  );
};

export default shopleft;

export async function getStaticPaths() {
  const data = await getAllProduct();
  const collections = data.collections;

  const paths = collections.map((c) => ({
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
  const data = await getAllProduct();

  // here is match the code with code of the collections in the url
  const collectionId = params.slug;
  const collections = data.collections;
  const collection = collections.find((c) => c.code === collectionId);
  const products = data.products; // take the products attribute in the menu

  // Filter products by categoryIds  LOGIC T THEM NEW O DAY
  const filteredProducts = products.filter((product) =>
    product.collectionIds.includes(collection.id)
  );
  return {
    props: { products, collections, collection, filteredProducts },
  };
}
