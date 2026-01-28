"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { selectFilters } from "@/store/Filters/filtersSelectors";
import { fetchVehicles } from "@/store/Vehicles/vehiclesThunks";
import { clearVehicles } from "@/store/Vehicles/vehiclesSlice";

import { Filters } from "@/components/Filter/Filters";
import { CamperList } from "@/components/Vehicles/CamperList";
import { countOfTruckCards } from "@/assets/CONST";

export default function Catalog() {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectFilters);
  const [visibleCount, setVisibleCount] = useState<number>(countOfTruckCards);
  useEffect(() => {
    dispatch(clearVehicles());
    dispatch(fetchVehicles());
  }, [dispatch, filters]);

  return (
    <div className="container mx-auto px-4 md:px-16 py-10 flex flex-col lg:flex-row gap-16">
      <Filters setVisibleCount={setVisibleCount} />

      <section className="flex-1">
        <CamperList
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      </section>
    </div>
  );
}
