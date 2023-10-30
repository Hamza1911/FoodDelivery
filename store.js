import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './Slice/CartSlice';
import { restaurantSlice } from './Slice/restaurantSlice';

export default  store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    restaurant: restaurantSlice.reducer,
  },
});
