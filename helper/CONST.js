export const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";
export const SEO_URL = "https://traveltrucks-sepia.vercel.app";

//  menu
export const NAVMENU = [
  { key: "Home", path: "/" },
  { key: "Catalog", path: "catalog" },
];

//  images
import WindIcon from "@/helper/icons/wind.svg";
import DiagramIcon from "@/helper/icons/diagram.svg";
import CupIcon from "@/helper/icons/cup-hot.svg";
import TvIcon from "@/helper/icons/tv.svg";
import ShowerIcon from "@/helper/icons/ph_shower.svg";
import RadioIcon from "@/helper/icons/ui-radios.svg";
import RefrigeratorIcon from "@/helper/icons/solar_fridge-outline.svg";
import MicrowaveIcon from "@/helper/icons/lucide_microwave.svg";
import GasIcon from "@/helper/icons/hugeicons_gas-stove.svg";
import WaterIcon from "@/helper/icons/ion_water-outline.svg";
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
  { id: "radio", label: "Radio", icon: RadioIcon },
  { id: "refrigerator", label: "Refrigerator", icon: RefrigeratorIcon },
  { id: "microwave", label: "Microwave", icon: MicrowaveIcon },
  { id: "gas", label: "Gas", icon: GasIcon },
  { id: "water", label: "Water", icon: WaterIcon },
];

export const TYPE_FILTER = [
  { id: "panelTruck", label: "Panel Truck", icon: GridVanIcon },
  { id: "fullyIntegrated", label: "Fully Integrated", icon: GridFullyIcon },
  { id: "alcove", label: "Alcove", icon: GridAlcoveIcon },
];

export const LOGIC_FILTER = {
  booleanParams: [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ],
  valueParams: ["transmission", "location"],
};

// catalog
export const COUNT_OF_TRUCKS_CARD = 4;

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
  {
    id: "radio",
    icon: RadioIcon,
    label: () => "Radio",
    check: (c) => c.radio,
  },
  {
    id: "refrigerator",
    icon: RefrigeratorIcon,
    label: () => "Refrigerator",
    check: (c) => c.refrigerator,
  },
  {
    id: "microwave",
    icon: MicrowaveIcon,
    label: () => "Microwave",
    check: (c) => c.microwave,
  },
  {
    id: "gas",
    icon: GasIcon,
    label: () => "Gas",
    check: (c) => c.gas,
  },
  {
    id: "water",
    icon: WaterIcon,
    label: () => "Water",
    check: (c) => c.water,
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
