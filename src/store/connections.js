import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../utils/apiClient";
import { handleAxiosError } from "../utils/utils";

const initialState = {
  status: "idle",
  fetchConnectionStatus: "idle",
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

export const updateConnection = createAsyncThunk(
  "connections/updateConnection",
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await apiClient.put(`connections/${id}`, formData);
      return response.data;
    } catch (error) {
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
      .addCase(updateConnection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateConnection.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updateConnection.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
        state.error =
          action.payload?.message ||
          "Unable to upload connection, please try again";
      });
      buider
      .addCase(fetchConnections.pending, (state) => {
        state.fetchConnectionStatus = "loading";
      })
      .addCase(fetchConnections.fulfilled, (state,action) => {
        state.fetchConnectionStatus = "success";
        state.data = action.payload;
      })
      .addCase(fetchConnections.rejected, (state, action) => {
        state.fetchConnectionStatus = "failed";
        state.error =
          action.payload?.message ||
          "Unable to fetch connections, please try again";
      });
      buider
      .addCase(fetchConnectionById.pending, (state) => {
        state.fetchConnectionStatus = "loading";
      })
      .addCase(fetchConnectionById.fulfilled, (state,action) => {
        state.fetchConnectionStatus = "success";
        state.selectedData = action.payload;
      })
      .addCase(fetchConnectionById.rejected, (state, action) => {
        state.fetchConnectionStatus = "failed";
        state.error =
          action.payload?.message ||
          "Unable to fetch data, please try again";
      });
  },
});

export const { resetConnectionState  } = connections.actions;
export default connections.reducer;
