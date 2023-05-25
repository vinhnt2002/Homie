import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const shopleft = () => {
    const [showProductActionBox, setShowProductActionBox] = useState(true);
    

    const products = [
        {
            imageUrl: 'assets/images2/image-14@2x.png',
            title: 'Product 1',
            price: '190.000',
            salePercent: '25%',
            rating: 4.5,
            del: 200.000,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa ',
        },
        {
            imageUrl: 'assets/images2/image-15@2x.png',
            title: 'Product 2',
            price: '190.000',
            salePercent: '30%',
            rating: 4.2,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        // Add more products as needed
        {
            imageUrl: 'assets/images2/image-16@2x.png',
            title: 'Product 1',
            price: '190.000',
            salePercent: '25%',
            rating: 4.5,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-14@2x.png',
            title: 'Product 2',
            price: '190.000',
            salePercent: '30%',
            rating: 4.2,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-16@2x.png',
            title: 'Product 1',
            price: '190.000',
            salePercent: '25%',
            rating: 4.5,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-14@2x.png',
            title: 'Product 2',
            price: '190.000',
            salePercent: '30%',
            rating: 4.2,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-16@2x.png',
            title: 'Product 1',
            price: '190.000',
            salePercent: '25%',
            rating: 4.5,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-14@2x.png',
            title: 'Product 2',
            price: '190.000',
            salePercent: '30%',
            rating: 4.2,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },
        {
            imageUrl: 'assets/images2/image-14@2x.png',
            title: 'Product 2',
            price: '190.000',
            salePercent: '30%',
            rating: 4.2,
            description: 'Cá mặt ngơ bơm môi hơi ô dề nhưng mà dễ thưng nhaaa',
        },

        // Add more products as needed
    ];

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row align-items-center mb-4 pb-1">
                            <div className="col-12">
                                <div className="product_header d-flex justify-content-end">
                                    <div className="product_header_left d-flex align-items-center gap-3">
                                        <span>Sắp xếp theo</span>
                                        <div className="custom_select">
                                            <select className="form-control form-control-sm">
                                                <option value="order">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">
                                                    Sort by price: high to low
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row shop_container">
                            {products.map((product, index) => (
                                <div key={index} className="col-md-4">
                                    <ProductCard {...product} showProductActionBox={showProductActionBox} />
                                </div>
                            ))}
                        </div>
                        {/* Panigation */}
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination mt-3 justify-content-center pagination_style1">
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className="linearicons-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="sidebar">
                            <div className="widget">
                                <h5 className="widget_title">Categories</h5>
                                <ul className="widget_categories">
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">Women</span>
                                            <span className="categories_num">(9)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">Top</span>
                                            <span className="categories_num">(6)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">T-Shirts</span>
                                            <span className="categories_num">(4)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">Men</span>
                                            <span className="categories_num">(7)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">Shoes</span>
                                            <span className="categories_num">(12)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h5 className="widget_title">Filter</h5>
                                <div className="filter_price">
                                    <div
                                        id=""
                                        data-min={0}
                                        data-max={500}
                                        data-min-value={50}
                                        data-max-value={300}
                                        data-price-sign="$"
                                    />
                                    <div className="price_range">
                                        <span>
                                            Price: <span id="flt_price" />
                                        </span>
                                        <input type="hidden" id="price_first" />
                                        <input type="hidden" id="price_second" />
                                    </div>
                                </div>
                            </div>
                            <div className="widget">
                                <h5 className="widget_title">Brand</h5>
                                <ul className="list_brand">
                                    <li>
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="Arrivals"
                                                defaultValue=""
                                            />
                                            <label className="form-check-label" htmlFor="Arrivals">
                                                <span>New Arrivals</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="Lighting"
                                                defaultValue=""
                                            />
                                            <label className="form-check-label" htmlFor="Lighting">
                                                <span>Lighting</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="Tables"
                                                defaultValue=""
                                            />
                                            <label className="form-check-label" htmlFor="Tables">
                                                <span>Tables</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="Chairs"
                                                defaultValue=""
                                            />
                                            <label className="form-check-label" htmlFor="Chairs">
                                                <span>Chairs</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="custome-checkbox">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="checkbox"
                                                id="Accessories"
                                                defaultValue=""
                                            />
                                            <label className="form-check-label" htmlFor="Accessories">
                                                <span>Accessories</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default shopleft