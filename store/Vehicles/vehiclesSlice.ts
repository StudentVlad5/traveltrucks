import { createSlice } from "@reduxjs/toolkit";
import { fetchVehicles } from "./vehiclesThunks";
import { Camper } from "@/types/truck";

type VehiclesState = {
  items: { total: number; items: Camper[] };
  isLoading: boolean;
  error: string | null;
};

const initialState: VehiclesState = {
  items: { total: 0, items: [] },
  isLoading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    clearVehicles: (state) => {
      state.items = initialState.items;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
