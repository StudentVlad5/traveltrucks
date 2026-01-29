import { RootState } from "../index";

export const selectCamper = (state: RootState) => state.camper;
export const selectCurrentItem = (state: RootState) => state.camper.item;
export const selectCamperLoading = (state: RootState) => state.camper.isLoading;
export const selectCamperError = (state: RootState) => state.camper.error;
