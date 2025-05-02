import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice'; // import your slice

export const store = configureStore({
  reducer: {
    data: dataReducer, // you can add multiple reducers here
  },
});
