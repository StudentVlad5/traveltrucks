export type VehicleType = "van" | "fully_integrated" | "alcove";

export interface FiltersState {
  location: string;
  form: VehicleType | null;
  transmission: string | null;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  [key: string]: string | boolean | undefined | null;
}

export interface FilterCardProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

export type BooleanFilterKeys = keyof Pick<
  FiltersState,
  "AC" | "bathroom" | "kitchen" | "TV"
>;
