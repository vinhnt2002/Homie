import React from "react";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import Link from "next/link";
import "rc-slider/assets/index.css"
import ProductCard from "../../components/section/productCard/ProductCard";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { getAllProduct } from "../../action/menuApi";
import { useRouter } from "next/router";

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

const shopleft = ({ products, categories, category }) => {
  const router = useRouter();

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState(products);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const sortData = (sortOption) => {
    let sortedData = [...data];

    switch (sortOption) {
      //   case 'popularity':
      //     sortedData = sortedData.sort((a, b) => a.popularity - b.popularity);
      //     break;
      //   case 'date':
      //     sortedData = sortedData.sort((a, b) => a.date - b.date);
      //     break;
      case 'price':
        sortedData = sortedData.sort((a, b) => a.sellingPrice - b.sellingPrice);
        break;
      case 'price-desc':
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

  return (
    <div className="main_content">
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
                        <option value="popularity">Sort by popularity</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row shop_container">
                {data.map((product, index) => (
                  <div key={index} className="col-md-4">
                    <ProductCard
                      productData={product}
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div className="sidebar">
              <div className="widget">
                <h5 className="widget_title">Danh Mục</h5>
                <ul className="widget_categories">
                  {/* {collections.map((collection) => (
                    <li key={collection.id}>
                      <Link href={`/collection/${collection.code}`}>
                        <span className="categories_name">{collection.name}</span>
                        <span className="categories_num">{collection.length}</span>
                      </Link>
                    </li>
                  ))} */}
                </ul>
              </div>
              <div className="widget">
                <PriceFilter></PriceFilter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopleft;

export async function getStaticPaths() {
  const data = await getAllProduct();
  const categories = data.categories;

  const paths = categories.map((c) => ({
    params: {
      slug: c.code
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await getAllProduct();
  
  // here is match the code with code of the collections in the url
  const categoryId = params.slug;
  const categories = data.categories;
  const category = categories.find((c) => c.code === categoryId);


  const products = data.products; // take the products attribute in the menu

  return {
    props: { products, categories, category }
  };
}
