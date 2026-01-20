import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload } = action;
      console.log(payload);
      const existingItem = state.items.find(item => item.name === payload.name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(
          {
            "name": payload.name,
            "image": payload.image,
            "cost": payload.cost,
            "quantity": 1
          }
        );
      }

    },
    removeItem: (state, action) => {
      const { payload } = action;

      state.items = state.items.filter(item => item.name !== payload.name);
    },
    updateQuantity: (state, action) => {
      console.log(action);
      const { payload } = action;
      console.log(payload);

      const existingItem = state.items.find(item => item.name === payload.item.name);

      existingItem.quantity = payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
