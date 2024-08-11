import { configureStore } from "@reduxjs/toolkit";
import dqKpiReducer from "./dqKpi";
import settingsReducer from "./settings";
import { apiSlice } from "../utils/apiSlice";

const store = configureStore({
    reducer: {
        dqKpi : dqKpiReducer,
        settings : settingsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;