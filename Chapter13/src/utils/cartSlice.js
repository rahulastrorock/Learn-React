import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // this is the slice of the state
    items: [],
  },
  reducers: {
    // these all are reducer functions
    addItem: (state, action) => {
      state.items.push(action.payload); //action is the data which is passed from the component
    },
    removeItem: (state, action) => {
      //remove item quantity by 1
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //it is used to export the actions

export default cartSlice.reducer; //it combines all the reducers and returns a single reducer
