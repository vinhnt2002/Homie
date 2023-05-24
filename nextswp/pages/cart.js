import React from 'react'
const products = [
    {
        image: "assets/images/product_img1.jpg",
        name: "Blue Dress For Woman",
        price: "$45.00",
        quantity: 2,
        subtotal: "$90.00"
    },
    {
        image: "assets/images/product_img2.jpg",
        name: "Lether Gray Tuxedo",
        price: "$55.00",
        quantity: 1,
        subtotal: "$55.00"
    },
    {
        image: "assets/images/product_img3.jpg",
        name: "Woman Full Sliv Dress",
        price: "$68.00",
        quantity: 3,
        subtotal: "$204.00"
    }
];

const cartTotal = [
    {
        label: "Cart Subtotal",
        amount: "$349.00"
    },
    {
        label: "Shipping",
        amount: "Free Shipping"
    },
    {
        label: "Total",
        amount: <strong>$349.00</strong>
    }
];


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
                                        <tr>
                                            <th className="product-thumbnail">&nbsp;</th>
                                            <th className="product-name">Product</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={index}>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src={product.image} alt={`product${index + 1}`} />
                                                    </a>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <a href="#">{product.name}</a>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    {product.price}
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <div className="quantity">
                                                        <input type="button" defaultValue="-" className="minus" />
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            defaultValue={product.quantity}
                                                            title="Qty"
                                                            className="qty"
                                                            size={4}
                                                        />
                                                        <input type="button" defaultValue="+" className="plus" />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal" data-title="Total">
                                                    {product.subtotal}
                                                </td>
                                                <td className="product-remove" data-title="Remove">
                                                    <a href="#">
                                                        <i className="ti-close" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={6} className="px-0">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                                                        <div className="coupon field_form input-group">
                                                            <input
                                                                type="text"
                                                                defaultValue=""
                                                                className="form-control form-control-sm"
                                                                placeholder="Enter Coupon Code.."
                                                            />
                                                            <div className="input-group-append">
                                                                <button
                                                                    className="btn btn-fill-out btn-sm"
                                                                    type="submit"
                                                                >
                                                                    Apply Coupon
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-6  text-start  text-md-end">
                                                        <button
                                                            className="btn btn-line-fill btn-sm"
                                                            type="submit"
                                                        >
                                                            Update Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="medium_divider" />
                            <div className="divider center_icon">
                                <i className="ti-shopping-cart-full" />
                            </div>
                            <div className="medium_divider" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heading_s1 mb-3">
                                <h6>Calculate Shipping</h6>
                            </div>
                            <form className="field_form shipping_calculator">
                                <div className="form-row">
                                    <div className="form-group col-lg-12 mb-3">
                                        <div className="custom_select">

                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-lg-6 mb-3">
                                        <input
                                            required="required"
                                            placeholder="State / Country"
                                            className="form-control"
                                            name="name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group col-lg-6 mb-3">
                                        <input
                                            required="required"
                                            placeholder="PostCode / ZIP"
                                            className="form-control"
                                            name="name"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-lg-12 mb-3">
                                        <button className="btn btn-fill-line" type="submit">
                                            Update Totals
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div className="border p-3 p-md-4">
                                <div className="heading_s1 mb-3">
                                    <h6>Cart Totals</h6>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            {cartTotal.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="cart_total_label">{item.label}</td>
                                                    <td className="cart_total_amount">{item.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                                <a href="#" className="btn btn-fill-out">
                                    Proceed To CheckOut
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default cart