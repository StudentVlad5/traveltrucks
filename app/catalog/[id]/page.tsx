"use client";
import { selectCurrentItem } from "@/store/Camper/camperSelectors";
import { useAppSelector } from "@/store/hooks";
import { CamperFeatures } from "@/components/CamperFeatures/CamperFeatures";
import { VEHICLE_DETAILS_CONFIG } from "@/helper/CONST";
import { Camper } from "@/types/truck";
import { DetailRow } from "@/components/DetailRow/DetailRow";

export default function FeaturesPage() {
  const camper = useAppSelector(selectCurrentItem);

  return (
    <div className="bg-inputs p-6 md:p-10 rounded-2xl">
      <div className="flex flex-wrap gap-2 mb-10">
        {camper && <CamperFeatures camper={camper} />}
      </div>

      <h3 className="text-xl font-semibold mb-6 border-b border-gray-light pb-6">
        Vehicle details
      </h3>
      <div className="space-y-4">
        {camper &&
          VEHICLE_DETAILS_CONFIG.map(({ label, key }) => {
            const value = camper[key as keyof Camper];
            if (!camper) return null;

            return <DetailRow key={key} label={label} value={String(value)} />;
          })}
      </div>
    </div>
  );
}
