import { createSlice } from "@reduxjs/toolkit";
import { getDQKPI } from "../components/common/makeData";
const initialState = {
    // dqKpi: [], 
    dqKpi: getDQKPI(), 
    loading: false, 
    error: null,
};

const dqKpiSlice = createSlice({
    name: "dqKpi",
    initialState,
    reducers: {
        setDqKpi: (state, action) => {
            state.dqKpi = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export default dqKpiSlice.reducer;