import { RootState } from "../index";

export const selectFilters = (state: RootState) => state.filters;

export const selectLocation = (state: RootState) => state.filters.location;

export const selectForm = (state: RootState) => state.filters.form;
