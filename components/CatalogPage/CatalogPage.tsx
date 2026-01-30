"use client";

import { Suspense, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { selectFilters } from "@/store/Filters/filtersSelectors";
import { fetchVehicles } from "@/store/Vehicles/vehiclesThunks";
import { clearVehicles } from "@/store/Vehicles/vehiclesSlice";
import { Filters } from "@/components/Filter/Filters";
import { CamperList } from "@/components/Vehicles/CamperList";
import { COUNT_OF_TRUCKS_CARD } from "@/helper/CONST";

export default function Catalog() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const filters = useAppSelector(selectFilters);
  const [visibleCount, setVisibleCount] =
    useState<number>(COUNT_OF_TRUCKS_CARD);
  useEffect(() => {
    dispatch(clearVehicles());
    dispatch(fetchVehicles());
  }, [dispatch, filters]);

  return (
    <div className="container mx-auto px-4 md:px-16 py-[48px] flex flex-col lg:flex-row gap-[64px]">
      <Suspense fallback={null}>
        <Filters setVisibleCount={setVisibleCount} />
      </Suspense>

      <section className="flex-1">
        <CamperList
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      </section>
    </div>
  );
}
