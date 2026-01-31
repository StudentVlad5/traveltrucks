"use client";
import { selectCurrentItem } from "@/store/Camper/camperSelectors";
import { useAppSelector } from "@/store/hooks";
import { CamperFeatures } from "@/components/CamperFeatures/CamperFeatures";
import { VEHICLE_DETAILS_CONFIG } from "@/helper/CONST";
import { Camper } from "@/types/truck";
import { DetailRow } from "@/components/DetailRow/DetailRow";
import { motion } from "framer-motion";
import FeaturesSkeleton from "@/components/Skeletons/FeaturesSkeleton";
import { useEffect, useState } from "react";

export default function Features({ initialData }: { initialData: Camper }) {
  let camper = useAppSelector(selectCurrentItem);
  if (!camper) camper = initialData;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FeaturesSkeleton />;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-inputs p-6 md:p-10 rounded-2xl"
    >
      <div className="flex flex-wrap gap-2 mb-10">
        <CamperFeatures camper={camper} />
      </div>

      <h3 className="text-xl font-semibold mb-6 border-b border-gray-light pb-6">
        Vehicle details
      </h3>

      <div className="space-y-4">
        {VEHICLE_DETAILS_CONFIG.map(({ label, key }) => {
          const value = camper[key as keyof Camper];
          return (
            <DetailRow key={key} label={label} value={String(value || "N/A")} />
          );
        })}
      </div>
    </motion.div>
  );
}
