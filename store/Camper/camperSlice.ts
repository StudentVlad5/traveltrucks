import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCamper } from "./camperThunks";
import { Camper } from "@/types/truck";

type CamperState = {
  item: Camper | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: CamperState = {
  item: null,
  isLoading: false,
  error: null,
};

const camperSlice = createSlice({
  name: "camper",
  initialState,
  reducers: {
    clearCamper: (state) => {
      state.item = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamper.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCamper.fulfilled,
        (state, action: PayloadAction<Camper>) => {
          state.item = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCamper } = camperSlice.actions;
export default camperSlice.reducer;
