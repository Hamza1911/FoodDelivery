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
      const itemIndex = state.items.findIndex(
        (item) => item._id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
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
export const { addtoCart, removeFromCart, emptyCart } = CartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsByID = (state,id) => state.cart.items.filter(item=>item._id ===id);
export const selectCartTotal =state => state.cart.items.reduce((total,item)=> total=total+item.price,0)
export default CartSlice.reducer;
