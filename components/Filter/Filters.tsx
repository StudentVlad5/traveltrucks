"use client";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetFilters,
  setAllFilters,
  initialState,
} from "@/store/Filters/filtersSlice";
import { fetchVehicles } from "@/store/Vehicles/vehiclesThunks";
import {
  countOfTruckCards,
  EQUIPMENT_FILTER,
  TYPE_FILTER,
} from "@/helper/CONST";
import { FilterCard } from "./FilterCard";
import { Button } from "../UI/Button/Button";
import MapIcon from "@/helper/icons/default_map.svg";
import { BooleanFilterKeys, FiltersState, VehicleType } from "@/types/filters";
import Image from "next/image";
import { motion } from "framer-motion";

export const Filters = ({
  setVisibleCount,
}: {
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const [draftFilters, setDraftFilters] = useState(filters);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [trigger]);

  const handleEquipmentChange = (id: string) => {
    setDraftFilters((prev: typeof filters) => {
      if (["AC", "bathroom", "kitchen", "TV"].includes(id)) {
        return { ...prev, [id]: !prev[id as BooleanFilterKeys] };
      }

      if (id === "transmission") {
        return {
          ...prev,
          transmission: prev.transmission === "automatic" ? null : "automatic",
        };
      }

      return prev;
    });
  };

  const handleTypeChange = (value: VehicleType) => {
    setDraftFilters((prev) => ({
      ...prev,
      form: prev.form === value ? null : value,
    }));
  };

  const handleSearch = () => {
    dispatch(setAllFilters(draftFilters));
    dispatch(fetchVehicles());
    setTrigger((prev) => !prev);
    setVisibleCount(countOfTruckCards);
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setDraftFilters(initialState);
    dispatch(fetchVehicles());
    setTrigger((prev) => !prev);
    setVisibleCount(countOfTruckCards);
  };

  const isDirty = useMemo(
    () => JSON.stringify(draftFilters) !== JSON.stringify(filters),
    [draftFilters, filters],
  );

  const hasAnyFilters = useMemo(
    () => JSON.stringify(draftFilters) !== JSON.stringify(initialState),
    [draftFilters],
  );

  return (
    <aside className="w-full lg:w-[360px] flex flex-col gap-8">
      {/* Location Input */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-medium font-medium text-sm">Location</label>
        <div className="relative text-main">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <Image src={MapIcon} className="w-5 h-5" loading="lazy" alt="map" />
          </span>
          <input
            type="text"
            value={draftFilters.location}
            onChange={(e) =>
              setDraftFilters((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
            placeholder="City, Country"
            className="w-full p-4 pl-12 bg-gray-ghost rounded-xl outline-none border-none placeholder:text-gray-medium"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-gray-dark font-medium">Filters</p>

        {/* Vehicle Equipment */}
        <div>
          <h3 className="h2-title mb-6 border-b border-gray-light pb-6 text-xl">
            Vehicle equipment
          </h3>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {EQUIPMENT_FILTER.map((item) => (
              <FilterCard
                key={item.id}
                label={item.label}
                icon={item.icon}
                isActive={
                  item.id === "transmission"
                    ? draftFilters.transmission === "automatic"
                    : !!draftFilters[item.id as keyof FiltersState]
                }
                onClick={() => handleEquipmentChange(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Vehicle Type */}
        <div>
          <h3 className="h2-title mb-6 border-b border-gray-light pb-6 text-xl">
            Vehicle type
          </h3>
          <div className="flex flex-wrap gap-3 justify-center items-center lg:justify-start">
            {TYPE_FILTER.map((item) => (
              <FilterCard
                key={item.id}
                label={item.label}
                icon={item.icon}
                isActive={draftFilters.form === item.id}
                onClick={() => handleTypeChange(item.id as VehicleType)}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        animate={isDirty ? { scale: [1, 1.02, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Button
          onClick={handleSearch}
          variant="primary"
          disabled={!isDirty}
          className={`
    w-[173px] py-4 transition
    ${!isDirty ? "opacity-50 cursor-not-allowed" : ""}
  `}
        >
          Search
        </Button>
      </motion.div>
      {hasAnyFilters && (
        <Button
          onClick={handleReset}
          className="w-[173px] py-4 text-gray-medium underline hover:text-accent-red transition-colors text-sm font-medium"
        >
          Clear
        </Button>
      )}
    </aside>
  );
};
