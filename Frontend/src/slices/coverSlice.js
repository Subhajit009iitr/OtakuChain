import { createSlice } from '@reduxjs/toolkit';
import image1 from '../assets/pic1.png';
import image2 from '../assets/pic2.png';
import image3 from '../assets/pic3.png';
import image4 from '../assets/pic4.png';

const initialCoverImageURL = [image1, image2, image3, image4];

export const coverSlice = createSlice({
  name: 'cover',
  initialState: {
    page: "home",
    coverImageURL: initialCoverImageURL,
  },
  reducers: {
    setCoverImage: (state, action) => {
      state.coverImageURL = action.payload;
    },
    setCoverDetails: (state, action) => {
      state.page = action.payload.page;
      state.coverImageURL = [action.payload.imageURL];
    },
    resetCoverImage: (state) => {
      state.coverImageURL = initialCoverImageURL;
      state.page = 'home';
    },
  },
});

export const { setCoverImage, setCoverDetails, resetCoverImage } = coverSlice.actions;

export default coverSlice.reducer;
