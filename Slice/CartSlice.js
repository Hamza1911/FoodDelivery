import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const newCart = [...state.items];
      const itemindex = state.items.findIndex(
        (item) => item.id == action.payload
      );
      if (itemindex >= 0) {
        newCart.splice(itemindex, 1);
      } else {
        console.log("cant remove item from cart");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items=[]
    },
  },
});
export const { addtoCart, removeFromCart, emptyCart } = restaurantSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsByID = (state,id) => state.cart.items.filter(item=>item.id ===id);
export const selectCartTotal =state => state.cart.items.reduce((total,item)=> total=total+item.price,0)
export default CartSlice.reducer;
