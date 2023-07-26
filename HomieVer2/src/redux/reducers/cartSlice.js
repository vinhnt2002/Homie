import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  wishList:[],
  amount: 0,
  wishlistAmount: 0,
  total: 0,
  userInfo: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {


    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find((item) => item.name === product.name);
    
      if (existingProduct) {
        existingProduct.attribute.amount += product.attribute.amount;
      } else {
        state.cartItems.push({ ...product });
      }
    
      state.amount += product.attribute.amount;
    },

    // addToWishList: (state, action) => {
    //   const product = action.payload;
    //   const existingProduct = state.wishList.find((item) => item.name === product.name);

    //   if (!existingProduct) {
    //     state.wishList.push({ ...product });
    //     state.wishlistAmount += 1;
    //   }
    // },
    addToWishList: (state, action) => {
      const product = action.payload;
      const wishList = [];
      if (state.wishList) {
        const existingProduct = state.wishList.find((item) => item.name === product.name);
        if (!existingProduct) {
          state.wishList.push({ ...product });
          state.wishlistAmount += 1;
        }
      }else {
        state.wishList.push({ ...product });
        state.wishlistAmount += 1;
      }

      
    },
    
    
    incrementAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.cartItems.find((item) => item.name === name);
      if (item) {
        item.attribute.amount++;
      }
    },
    decrementAmount: (state, action) => {
      const { name } = action.payload;
      const item = state.cartItems.find((item) => item.name === name);
      if (item) {
        item.attribute.amount--;
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.name !== name);
    },
    removeWishListItem: (state, action) => {
      const { name } = action.payload;
      state.wishList = state.wishList.filter((item) => item.name !== name);
      state.wishlistAmount -= 1;
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.attribute.amount;
        total += item.attribute.amount * item.sellingPrice;
      });
      state.amount = amount;
      state.total = total;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});


export const { addToCart, updateQuantity, incrementAmount, decrementAmount, removeItem, updateTotal,
   clearCart, addUser, removeUser, addToWishList, removeWishListItem } =
  cartSlice.actions;

export const selectAllProducts = (state) => state.cartItems;
  



export default cartSlice.reducer;
