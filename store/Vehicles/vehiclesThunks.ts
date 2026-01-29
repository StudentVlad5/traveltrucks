import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { BASE_URL } from "@/helper/CONST";
import axios, { AxiosError } from "axios";
import { Camper } from "@/types/truck";

export const fetchVehicles = createAsyncThunk<
  { total: number; items: Camper[] },
  void,
  { rejectValue: string }
>("vehicles/fetch", async (_, { getState, rejectWithValue }) => {
  const { filters } = getState() as RootState;
  const params = new URLSearchParams();

  if (filters.location) params.append("location", filters.location);
  if (filters.form) params.append("form", filters.form);
  if (filters.transmission) params.append("transmission", filters.transmission);

  ["AC", "bathroom", "kitchen", "TV"].forEach((key) => {
    if (filters[key]) params.append(key, "true");
  });

  try {
    const res = await axios.get<{ total: number; items: Camper[] }>(BASE_URL, {
      params,
    });
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      axiosError.response?.data?.message || axiosError.message || "Failed",
    );
  }
});
