import { createSlice } from "@reduxjs/toolkit";
import { selectAllProducts } from "./cartSlice";

const initialState = {
  products: [],
  checkoutAmount: 0,
  totalPriceCheckout: 0,
  shippingAddress: {
        //cai nay la dia chi
  },
  paymentMethod: '',
  //loai thanh toan
  shippingPrice: 0,
  totalPrice: 0,
  user:'', 
  //cho user thi them thong tin nguoi mua bao gom ten va so dien thoai, email
  isPaid:'',
  //trang thai thanh toan
  paidAt:'',
  isDelivered:'',
  deliveredAt: '',
  isSucessOrder: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addProduct(state, action) {
      const { product } = action.payload;
      state.products.push(product);
      state.checkoutAmount += product.attribute.amount;
    },
    removeProduct(state, action) {
      const { productId } = action.payload;
      state.products = state.products.filter((p) => p.sku !== productId);
      state.checkoutAmount -= 1;
    },
    addAllToCheckout: (state, action) => {
      const cartItems = action.payload; // Access payload directly
      state.products.push(...cartItems);
      state.checkoutAmount += cartItems.length;
    }, 
    removeAllFromCheckout: (state) => {
      state.products = [];
      state.checkoutAmount = 0;
    },
    updateTotalCheckout: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.attribute.amount;
        total += item.attribute.amount * item.sellingPrice;
      });
      state.checkoutAmount = amount;
      state.totalPriceCheckout = total;
    },
    incrementCheckoutAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.products.find((item) => item.name === name);
      if (item) {
        item.attribute.amount++;
      }
    },
    decrementCheckoutAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.products.find((item) => item.name === name);
      if (item) {
        item.attribute.amount--;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addAllToCheckout,
  removeAllFromCheckout,
  updateTotalCheckout,
  incrementCheckoutAmount,
  decrementCheckoutAmount,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
