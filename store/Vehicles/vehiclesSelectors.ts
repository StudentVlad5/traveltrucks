import { RootState } from "../index";

export const selectVehiclesState = (state: RootState) => state.vehicles;
export const selectVehicles = (state: RootState) => state.vehicles.items;
export const selectVehiclesLoading = (state: RootState) =>
  state.vehicles.isLoading;
export const selectVehiclesError = (state: RootState) => state.vehicles.error;
