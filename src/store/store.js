import { configureStore } from "@reduxjs/toolkit";
import dqKpiReducer from "./dqKpi";

const store = configureStore({
    reducer: {
        dqKpi : dqKpiReducer,
    },
});

export default store;