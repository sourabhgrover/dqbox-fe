import { configureStore } from "@reduxjs/toolkit";
import dqKpiReducer from "./dqKpi";
import settingsReducer from "./settings";

const store = configureStore({
    reducer: {
        dqKpi : dqKpiReducer,
        settings : settingsReducer,
    },
});

export default store;