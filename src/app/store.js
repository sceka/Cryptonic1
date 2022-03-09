import { configureStore } from "@reduxjs/toolkit";

import { cryptoNewsApi } from "../components/config/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
