import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../utils/apiClient";
import { handleAxiosError } from "../utils/utils";

const initialState = {
  status: "idle",
  error: "",
  data: {},
};

export const createConnection = createAsyncThunk(
  "connections/createConnection",
  async (payload,thunkAPI) => {
    console.log(payload);
    try {
        const response = await apiClient.post(`connections`, payload);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(handleAxiosError(error));
      }
  }
);

const connections = createSlice({
  name: "connections",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(createConnection.pending, (state) => {
        state.status = "loading";
    });
    buider.addCase(createConnection.fulfilled, (state) => {
        state.status = "success";
    });
    buider.addCase(createConnection.rejected, (state,action) => {
        state.status = "failed";
        state.error =
          action.payload?.message || "Unable to create connection, please try again";
    });
  }
});

export default connections.reducer;
