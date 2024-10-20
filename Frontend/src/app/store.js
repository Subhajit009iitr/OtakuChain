import { configureStore } from '@reduxjs/toolkit';
import coverReducer from '../slices/coverSlice';
import bodyReducer from '../slices/bodySlice';
import communityReducer from '../slices/communitySlice';

export const store = configureStore({
  reducer: {
    cover: coverReducer,
    body: bodyReducer,
    community : communityReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
