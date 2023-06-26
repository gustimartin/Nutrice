import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setByCategoryAndOrigin = createAsyncThunk(
  "products/setByCategoryAndOrigin",
  async ({ category, origin }) => {
    const response = await axios.get("/products", {
      params: {
        category,
        origin,
      },
    });
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    // setProducts: (state, action) => {
    //   state.allProducts = action.payload;
    //   state.products = action.payload;
    // },
    // setByName: (state, action) => {
    //   state.products = action.payload;
    // },
    // setById: (state, action) => {
    //   state.productId = action.payload;
    // },
    // setEnableProduct: (state, action) => {
    //   state.enableProducts = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(setByCategoryAndOrigin.fulfilled, (state, action) => {
    //   state.products = action.payload;
    // });
  },
});

export const { setProducts, setByName, setEnableProduct, setById } =
  productsSlice.actions;
export default productsSlice.reducer;

// export const getAllProducts = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/products");
//     const prod = response.data;
//     for (let i = 0; i < prod.length; i++) {
//       if (prod[i].stock === 0) {
//         prod[i].enable = false;
//       }
//     }
//     dispatch(setProducts(prod));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchProductByName = (name) => async (dispatch) => {
//   try {
//     const json = await axios.get(`/products?name=${name}`);
//     dispatch(setByName(json.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getProductsById = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`/products/${id}`);
//     const prod = res.data;
//     for (let i = 0; i < prod.length; i++) {
//       if (prod[i].stock === 0) {
//         prod[i].enable = false;
//       }
//     }
//     dispatch(setById(prod));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const filterByCategoryAndOrigin = ({ category, origin }) => {
//   return (dispatch) => {
//     dispatch(setByCategoryAndOrigin({ category, origin }));
//   };
// };
