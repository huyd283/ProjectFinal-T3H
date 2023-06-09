import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
// import firebase from 'firebase';
// import firebase from "firebase/compat/app";

// const [listCateroly,setListCateroly] =useState()
const initialState = {
  products: [] | null,
  productId : [] | null,
  listcategory:[]|null,
  cateProduct :[] | null,
  test :[] | null

};

export const getFectProdust = createAsyncThunk(
  "products/getFectProdust",
  async () => {
    try {
      const responsive = await axios.get(
        'https://reactjst3h2212-default-rtdb.firebaseio.com/productsCate/.json'

      );
      const myArr1 = [];

    for (let newItem in responsive.data) {
      myArr1.push(responsive.data[newItem]);
    }
    return myArr1;
      
    } catch (error) {
      console.log(error);
    }
  }
);

export const getcategory = createAsyncThunk(
  "products/getcategory",
  async () => {
    try {
      const responsive = await axios.get(
        'https://reactjst3h2212-default-rtdb.firebaseio.com/categories/.json'
        
      );

      return responsive.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getById = createAsyncThunk("products/getById", async (itemId) => {
  try {
    const responsive = await axios.get(
      `https://reactjst3h2212-default-rtdb.firebaseio.com/productsCate/.json?orderBy="id"&equalTo=${itemId}`
    );
    const myArr1 = [];

    for (let newItem in responsive.data) {
      myArr1.push(responsive.data[newItem]);
    }
    return myArr1;
  } catch (error) {
    console.log(error);
  }
});
export const getByCate = createAsyncThunk("products/getByCate", async (cateItem) => {
  try {
    const responsive = await axios.get(
      `https://reactjst3h2212-default-rtdb.firebaseio.com/productsCate/.json?orderBy="name"&equalTo="${cateItem}"`
    )
    const myArr1 = [];

    for (let newItem in responsive.data) {
      myArr1.push(responsive.data[newItem]);
    }

    return myArr1;
  } catch (error) {
    console.log(error);
  }
});
export const getCate = createAsyncThunk("products/getCate", async (itemId) => {
  try {
    const responsive = await axios.get(
      `https://reactjst3h2212-default-rtdb.firebaseio.com/productsCate/.json?orderBy=0&startAt=0&endAt=3${itemId}`
    );
    const myArr1 = [];

    for (let newItem in responsive.data) {
      myArr1.push(responsive.data[newItem]);
    }
    return myArr1;
  } catch (error) {
    console.log(error);
  }
});
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getFectProdust.pending, () => {
      console.log("pending");
    });

    build.addCase(getFectProdust.fulfilled, (state, action) => {
      state.products = action.payload;
    });  
    build.addCase(getById.fulfilled, (state, action) => {
        state.productId = action.payload;
      });  
      build.addCase(getcategory.fulfilled, (state, action) => {
        state.listcategory = action.payload;
      });  
      build.addCase(getByCate.fulfilled, (state, action) => {
        state.cateProduct = action.payload;
      }); 
      build.addCase(getCate.fulfilled, (state, action) => {
        state.test = action.payload;
      }); 
  },
});

export default productsSlice.reducer;
