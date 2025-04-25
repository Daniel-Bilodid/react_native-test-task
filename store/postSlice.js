import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../api/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await getPosts();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
