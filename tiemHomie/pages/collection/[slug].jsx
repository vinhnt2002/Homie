import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "rc-slider/assets/index.css";

import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ProductCard from "../../components/section/productCard/ProductCard";
import { getAllProduct } from "../../action/menuApi";
import PriceFilter from "../../components/price/priceFilter";
import Pagination from "../../components/paging/Pagination";
import SortBySelected from "../../components/sortBySelected/SortBySelected";
import Tags from "../../components/Tags/Tags";
const shopleft = ({
  products,
  collections,
  collection,
  filteredProducts,
  productCount,
}) => {
  const router = useRouter();

  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [data, setData] = useState(filteredProducts);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  useEffect(() => {
    setData(data);
  }, [data]);

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
  let i = 0;
  return (
    <div className="main_content">
      <BreadCrumb
        descriptionTitle={collection.name}
        title={collection.name}
        middlePath="Bộ sưu tập"
      ></BreadCrumb>
      {/* START SECTION SHOP */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 pb-1">
                <div className="col-12">
                  <SortBySelected
                    handleSortOptionChange={handleSortOptionChange}
                    selectedSortOption={selectedSortOption}
                  />
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
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <div className="sidebar">
                <div className="widget">
                  <Tags collections={collections} productCount={productCount} />
                </div>
                <div className="widget">
                  <PriceFilter
                    products={products}
                    setData={setData}
                    setSelectedSortOption={setSelectedSortOption}
                  />
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
    product.collectionIds.includes(collection.id)
  );
  return {
    props: {
      products,
      collections,
      collection,
      filteredProducts,
      productCount,
    },
  };
}
