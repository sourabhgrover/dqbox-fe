import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../utils/apiClient";
import { handleAxiosError } from "../utils/utils";

const initialState = {
  status: "idle",
  error: "",
  data: [],
  selectedData: {},
};

export const createConnection = createAsyncThunk(
  "connections/createConnection",
  async (payload, thunkAPI) => {
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

export const fetchConnections = createAsyncThunk(
  "connections/fetchConnections",
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get(`connections`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  }
);

export const fetchConnectionById = createAsyncThunk(
  "connections/fetchConnectionById",
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.get(`connections/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  }
);

const connections = createSlice({
  name: "connections",
  initialState,
  reducers: {
    resetConnectionState: () => initialState,
  },
  extraReducers: (buider) => {
    buider
      .addCase(createConnection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createConnection.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(createConnection.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ||
          "Unable to create connection, please try again";
      });
      buider
      .addCase(fetchConnections.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConnections.fulfilled, (state,action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchConnections.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ||
          "Unable to create connection, please try again";
      });
      buider
      .addCase(fetchConnectionById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConnectionById.fulfilled, (state,action) => {
        state.status = "success";
        state.selectedData = action.payload;
      })
      .addCase(fetchConnectionById.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ||
          "Unable to fetch data, please try again";
      });
  },
});

export const { resetConnectionState  } = connections.actions;
export default connections.reducer;
