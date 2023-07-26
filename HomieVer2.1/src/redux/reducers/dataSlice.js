const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  // thunkApi.dispatch(...)
  try { 
    const productsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return productsResponse; // Trả về dữ liệu từ API
  } catch (error) {
    throw new Error("Failed to fetch products"); // Xử lý lỗi nếu có
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default dataSlice.reducer;
