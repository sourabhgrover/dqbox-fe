import { createSlice } from "@reduxjs/toolkit";
import { defaultingRules, manageRole, usersData } from "../components/common/makeData";
import { makeDqRules } from "../components/Settings/makeData";
const initialState = {
  users: usersData(),
  roles: manageRole(),
  dqRules: makeDqRules(),
  defaultingRules: defaultingRules(),
  loading: false,
  error: null,
};

const settingsSlice =  createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload;
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

export default settingsSlice.reducer;