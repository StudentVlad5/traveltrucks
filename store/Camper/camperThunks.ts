import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "@/helper/CONST";
import axios, { AxiosError } from "axios";
import { Camper } from "@/types/truck";

export const fetchCamper = createAsyncThunk<
  Camper,
  string,
  { rejectValue: string }
>("camper/fetch", async (id, { rejectWithValue }) => {
  try {
    const res = await axios.get<Camper>(`${BASE_URL}/${id}`);
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError<{ message: string }>;
    return rejectWithValue(
      axiosError.response?.data?.message || axiosError.message || "Failed",
    );
  }
});
