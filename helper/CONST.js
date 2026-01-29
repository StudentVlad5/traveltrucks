export const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

//  menu
export const navMenu = [
  { key: "Home", path: "/" },
  { key: "Catalog", path: "catalog" },
];

//  images
import WindIcon from "@/helper/icons/wind.svg";
import DiagramIcon from "@/helper/icons/diagram.svg";
import CupIcon from "@/helper/icons/cup-hot.svg";
import TvIcon from "@/helper/icons/tv.svg";
import ShowerIcon from "@/helper/icons/ph_shower.svg";
import FuelIcon from "@/helper/icons/fuel-pump.svg";
import GridVanIcon from "@/helper/icons/bi_grid-1x2.svg";
import GridFullyIcon from "@/helper/icons/bi_grid.svg";
import GridAlcoveIcon from "@/helper/icons/bi_grid-3x3-gap.svg";

// Filter
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

// catalog
export const countOfTruckCards = 4;

// bages
export const CAMPER_FEATURES_CONFIG = [
  {
    id: "transmission",
    icon: DiagramIcon,
    label: (c) => c.transmission,
    check: (c) => c.transmission,
  },
  {
    id: "engine",
    icon: FuelIcon,
    label: (c) => c.engine,
    check: (c) => c.engine,
  },
  {
    id: "kitchen",
    icon: CupIcon,
    label: () => "Kitchen",
    check: (c) => c.kitchen,
  },
  { id: "AC", icon: WindIcon, label: () => "AC", check: (c) => c.AC },
  { id: "TV", icon: TvIcon, label: () => "TV", check: (c) => c.TV },
  {
    id: "bathroom",
    icon: ShowerIcon,
    label: () => "Bathroom",
    check: (c) => c.bathroom,
  },
];

export const VEHICLE_DETAILS_CONFIG = [
  { label: "Form", key: "form" },
  { label: "Length", key: "length" },
  { label: "Width", key: "width" },
  { label: "Height", key: "height" },
  { label: "Tank", key: "tank" },
  { label: "Consumption", key: "consumption" },
];

export const STORAGE_KEY = "camper_booking_form";
