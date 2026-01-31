"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetFilters,
  setAllFilters,
  initialState,
} from "@/store/Filters/filtersSlice";
import {
  COUNT_OF_TRUCKS_CARD,
  EQUIPMENT_FILTER,
  LOGIC_FILTER,
  TYPE_FILTER,
} from "@/helper/CONST";
import { FilterCard } from "./FilterCard";
import { Button } from "../UI/Button/Button";
import MapIcon from "@/helper/icons/default_map.svg";
import {
  BooleanFilterKeys,
  FiltersState,
  ValueFilterKeys,
  VehicleType,
} from "@/types/filters";
import Image from "next/image";
import { motion } from "framer-motion";

export const Filters = ({
  setVisibleCount,
}: {
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const reduxFilters = useAppSelector((state) => state.filters);

  const currentFiltersFromUrl = useMemo((): FiltersState => {
    const params: FiltersState = { ...initialState };
    searchParams.forEach((value, key) => {
      if (key in initialState) {
        if (LOGIC_FILTER.booleanParams.includes(key)) {
          params[key as BooleanFilterKeys] = value === "true";
        } else if (LOGIC_FILTER.valueParams.includes(key)) {
          params[key as ValueFilterKeys] = value;
        } else if (key === "form") {
          params.form = value as VehicleType;
        }
      }
    });
    return params;
  }, [searchParams]);

  const [draftFilters, setDraftFilters] = useState<FiltersState>(
    searchParams.size !== 0 ? currentFiltersFromUrl : reduxFilters,
  );

  useEffect(() => {
    const hasReduxFilters =
      JSON.stringify(reduxFilters) !== JSON.stringify(initialState);

    if (searchParams.size === 0 && hasReduxFilters) {
      const params = new URLSearchParams();

      Object.entries(reduxFilters).forEach(([key, value]) => {
        if (value === true || (typeof value === "string" && value.length > 0)) {
          params.set(key, String(value));
        }
      });
      router.replace(`${pathname}?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEquipmentChange = (id: string) => {
    setDraftFilters((prev) => {
      if (LOGIC_FILTER.booleanParams.includes(id)) {
        return {
          ...prev,
          [id]: !prev[id as keyof FiltersState],
        };
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
    const params = new URLSearchParams();

    Object.entries(draftFilters).forEach(([key, value]) => {
      if (value === true || (typeof value === "string" && value.length > 0)) {
        params.set(key, String(value));
      }
    });

    dispatch(setAllFilters(draftFilters));
    router.push(`${pathname}?${params.toString()}`);
    setVisibleCount(COUNT_OF_TRUCKS_CARD);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setDraftFilters(initialState);
    router.push(pathname);
    dispatch(resetFilters());
    setVisibleCount(COUNT_OF_TRUCKS_CARD);
  };

  const isDirty = useMemo(
    () =>
      JSON.stringify(draftFilters) !== JSON.stringify(currentFiltersFromUrl),
    [draftFilters, currentFiltersFromUrl],
  );

  const hasAnyFilters = useMemo(
    () =>
      JSON.stringify(currentFiltersFromUrl) !== JSON.stringify(initialState),
    [currentFiltersFromUrl],
  );

  return (
    <aside className="w-full lg:w-[360px] flex flex-col gap-8">
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
              setDraftFilters((prev) => ({ ...prev, location: e.target.value }))
            }
            placeholder="City, Country"
            className="w-full p-4 pl-12 bg-gray-ghost rounded-xl outline-none border-none placeholder:text-gray-medium"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-gray-dark font-medium">Filters</p>

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
          className={`w-[173px] py-4 transition ${!isDirty ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Search
        </Button>
      </motion.div>

      {hasAnyFilters && (
        <Button
          variant="secondary"
          onClick={handleReset}
          className="min-w-[136px] py-4"
        >
          Clear
        </Button>
      )}
    </aside>
  );
};
