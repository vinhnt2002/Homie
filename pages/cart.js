import React, { useState, useEffect, useRef } from 'react'
import { TbEdit } from 'react-icons/tb'
import classes from '../styles/Cart.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const products = [
    {
        image: "assets/images2/product-img1jpg@2x.png",
        name: "Mèo gốm kimono",
        price: "145.000",
        quantity: 1,
        subtotal: "145.000"
    },
    {
        image: "assets/images2/product-img2jpg@2x.png",
        name: "Gối nơ thư giãn",
        price: "350.000",
        quantity: 1,
        subtotal: "350.000"
    },
    {
        image: "assets/images2/product-img3jpg@2x.png",
        name: "Heo Molly",
        price: "350.000",
        quantity: 3,
        subtotal: "350.000"
    }
];

const cartTotal = [
    {
        label: "TỔNG CỘNG",
        amount: "745.000 VND"
    },
    {
        label: "PHÍ VẬN CHUYỂN",
        amount: "MIỄN PHÍ"
    },
    {
        label: "TỔNG ĐƠN HÀNG",
        amount: <strong>745.000 VND</strong>
    }
];

const Coupon = () => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question mt-4 mb-1'>
            <header>
                <button className='col-12 bg-light text-dark border border-1 d-flex justify-content-between align-items-center p-2' onClick={() => setShowInfo(!showInfo)}>
                    <div className='text-start'>Mã giảm giá</div>
                    <div className='text-end'>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                </button>
            </header>
            {showInfo &&
                <div className='border border-1 p-2'>
                    <form className='col-12'>
                        <div className="form-group pb-2">
                            <label htmlFor='inputCoupon'>Nhập mã phiếu giảm giá của bạn</label>
                            <input
                                type="text"
                                className="form-control p-2 me-3"
                                id="inputCoupon"
                                placeholder="Nhập mã phiếu giảm giá của bạn"
                            />
                        </div>
                        <button className={`border-danger btn btn btn-outline-light btn-sm pb-2 ${classes.btn}`} type="submit">
                            Áp dụng mã
                        </button>
                    </form>
                </div>
            }
        </article>
    );
};

const Ship = () => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question mb-1'>
            <header>
                <button className='col-12 bg-light text-dark border border-1 d-flex justify-content-between align-items-center p-2' onClick={() => setShowInfo(!showInfo)}>
                    <div className='text-start'>Giá vận chuyển</div>
                    <div className='text-end'>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
                </button>
            </header>
            {showInfo &&
                <div className='border border border-1 p-2'>
                    <form className='col-12'>
                        <div className="form-group pd-2">
                            <label htmlFor='inputCoupon'>Nhập mã phiếu giảm giá của bạn</label>
                            <input
                                type="text"
                                className="form-control p-2"
                                id="inputCoupon"
                                placeholder="Nhập mã phiếu giảm giá của bạn"
                            />
                        </div>
                        <button className={`border-danger btn btn btn-outline-light btn-sm pb-2 ${classes.btn}`} type="submit">
                            Áp dụng mã
                        </button>
                    </form>
                </div>
            }
        </article>
    );
};

const cart = () => {

    return (
        <div className="main_content">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive shop_cart_table">
                                <table className="table">
                                    <thead>
                                        <tr className="border-top border-bottom border-dark">
                                            <th className="px-0 p-5 product-thumbnail">&nbsp;</th>
                                            <th className="product-name">SẢN PHẨM</th>
                                            <th className="product-price">GIÁ</th>
                                            <th className="product-quantity">SỐ LƯỢNG</th>
                                            <th className="product-subtotal">TỔNG CỘNG</th>
                                            <th className="product-remove"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={index}>
                                                <td className="product-thumbnail text-start">
                                                    <a href="#">
                                                        <img src={product.image} alt={`product${index + 1}`} />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <div className='m-1'>
                                                        <a className={classes.name} href="#">{product.name}</a>
                                                    </div>
                                                    <div className='m-2'>
                                                        <h6>SKU: 290397</h6>
                                                    </div>
                                                    <div className='m-0'>
                                                        <p><TbEdit></TbEdit>Edit</p>
                                                    </div>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    {product.price} VND
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity">
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            defaultVaholue={product.quantity}
                                                            title="Qty"
                                                            className="qty"
                                                            size={4}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    {product.subtotal} VND
                                                </td>
                                                <td className="product-remove" data-title="Remove">
                                                    <a href="#">
                                                        <div className={classes.remove}>
                                                            <i className="ti-close" />
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={6} className="px-0 p-5">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4 col-md-6 mb-3 mb-md-0 text-start">
                                                        <button className={`border-danger btn btn btn-outline-light btn-sm ${classes.btn}`} type="submit">Giỏ Hàng Trống</button>
                                                    </div>
                                                    <div className="col-lg-8 col-md-6 mb-md-0 text-start  text-md-end">
                                                        <button className={`border-danger btn btn btn-outline-light btn-sm me-2 ${classes.btn}`} type="submit">Tiếp tục mua sắm</button>
                                                        <button className={`border-danger btn btn btn-outline-light btn-sm ${classes.btn}`} type="submit">Cập Nhật Giỏ Hàng</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-5">
                            <Coupon></Coupon>
                            <Ship></Ship>
                        </div>
                        <div className="col-md-7">
                            <div className="mt-4">
                                <div className="heading_s1 mb-3">
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <tbody>
                                                {cartTotal.map((item, index) => (
                                                    index !== cartTotal.length - 1 ? (
                                                        <tr key={index}>
                                                            <td className="cart_total_label text-end">{item.label}</td>
                                                            <td className="cart_total_amount text-end">{item.amount}</td>
                                                        </tr>
                                                    ) : (
                                                        <tr key={index} className='border-black border-top border-bottom'>
                                                            <td className='cart_total_label text-end'>{item.label}</td>
                                                            <td className="cart_total_amount text-end">{item.amount}</td>
                                                        </tr>
                                                    )
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className='text-end'>
                                        <a href="#" className={`border-danger btn btn-outline-light btn-sm ${classes.btn}`}>
                                            Hoàn tất thanh toán
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default cart
