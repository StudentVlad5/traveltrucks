export const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const navMenu = [
  { key: "Home", path: "/" },
  { key: "Catalog", path: "catalog" },
];

import WindIcon from "@/assets/icons/wind.svg";
import DiagramIcon from "@/assets/icons/diagram.svg";
import CupIcon from "@/assets/icons/cup-hot.svg";
import TvIcon from "@/assets/icons/tv.svg";
import ShowerIcon from "@/assets/icons/ph_shower.svg";
import GridVanIcon from "@/assets/icons/bi_grid-1x2.svg";
import GridFullyIcon from "@/assets/icons/bi_grid.svg";
import GridAlcoveIcon from "@/assets/icons/bi_grid-3x3-gap.svg";

export const EQUIPMENT_FILTER = [
  { id: "AC", label: "AC", icon: WindIcon },
  {
    id: "transmission",
    label: "Automatic",
    icon: DiagramIcon,
    value: "automatic",
  },
  { id: "kitchen", label: "Kitchen", icon: CupIcon },
  { id: "TV", label: "TV", icon: TvIcon },
  { id: "bathroom", label: "Bathroom", icon: ShowerIcon },
];

export const TYPE_FILTER = [
  { id: "van", label: "Van", icon: GridVanIcon },
  { id: "fullyIntegrated", label: "Fully Integrated", icon: GridFullyIcon },
  { id: "alcove", label: "Alcove", icon: GridAlcoveIcon },
];

export const countOfTruckCards = 4;
