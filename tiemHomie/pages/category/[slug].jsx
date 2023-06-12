import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "rc-slider";
import Link from "next/link";
import "rc-slider/assets/index.css";
import ProductCard from "../../components/section/productCard/ProductCard";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import { getAllProduct } from "../../action/menuApi";
import { useRouter } from "next/router";
import classes from "./shop_left.module.css";
import PriceFilter from "../../components/price/priceFilter";
import SapXep from "../../components/sortBySelected/SapXep";
import Pagination from "../../components/paging/PhanTrang";
import DanhMuc from "../../components/DanhMuc/DanhMuc";
const shopleft = ({
  products,
  categories,
  category,
  filteredProducts,
  productCount,
  collections,
}) => {
  const router = useRouter();

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState(filteredProducts);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const itemsPerPage = 9;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  // LOGIC T THEM NEW O DAY
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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Apply pagination to the data
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  let i = 0;
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
                <div className="col-12">
                  <SapXep handleSortOptionChange={handleSortOptionChange} selectedSortOption={selectedSortOption}></SapXep>
                </div>
              </div>
              <div className="row shop_container">
                {paginatedData.map((product, index) => (
                  <div key={product.id} className="col-md-4">
                    <ProductCard
                      productData={product}
                      showProductActionBox={showProductActionBox}
                    />
                  </div>
                ))}

                {/* relative Product  */}

                {/* {cateCodeObject.length > 0 &&
              cateCodeObject[0].products.map((product) => (
                <div key={product.id} className="item">
                  <ProductCard
                    productData={product}
                    showProductActionBox={showProductActionBox}
                  />
                </div>
              ))} */}

                <Pagination pageCount={pageCount} onPageChange={handlePageChange}></Pagination>
              </div>
            </div>
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <DanhMuc collections={collections} productCount={productCount}></DanhMuc>
                </div>
                <div className="widget">
                <PriceFilter products={products} setData={setData} setSelectedSortOption={setSelectedSortOption} />
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
  const categories = data.categories;

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
  const data = await getAllProduct();

  // here is match the code with code of the collections in the url
  const categoryId = params.slug;
  const categories = data.categories;
  const category = categories.find((c) => c.code === categoryId);
  const products = data.products;
  const collections = data.collections;

  const productCount = collections.map((collection) => {
    let count = 0;

    products.forEach((product) => {
      if (product.collectionIds.includes(collection.id)) {
        count++;
      }
    });

    return count;
  });

  // Filter products by categoryIds  LOGIC T THEM NEW O DAY
  const filteredProducts = products.filter((product) =>
    product.categoryId.includes(category.id)
  );

  return {
    props: {
      products,
      categories,
      category,
      collections,
      filteredProducts,
      productCount,
    },
  };
}
