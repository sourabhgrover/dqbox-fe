import { configureStore } from "@reduxjs/toolkit";
import dqKpiReducer from "./dqKpi";
import settingsReducer from "./settings";
import connectionsReducer from "./connections";
import { apiSlice } from "../utils/apiSlice";

const store = configureStore({
    reducer: {
        dqKpi : dqKpiReducer,
        settings : settingsReducer,
        connections : connectionsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;