import { Camper } from "@/types/truck";
import { Badge } from "../UI/Badge/Badge";
import { CAMPER_FEATURES_CONFIG } from "@/helper/CONST";

interface CamperFeaturesProps {
  camper: Camper;
  className?: string;
}

export const CamperFeatures = ({
  camper,
  className = "",
}: CamperFeaturesProps) => {
  return (
    <div className={`flex flex-wrap gap-[8px] ${className}`}>
      {CAMPER_FEATURES_CONFIG.map((feature) => {
        const isVisible = feature.check
          ? feature.check(camper)
          : !!camper[feature.id as keyof Camper];

        if (!isVisible) return null;

        return (
          <Badge
            key={feature.id}
            icon={feature.icon}
            label={
              typeof feature.label === "function"
                ? feature.label(camper)
                : feature.label
            }
          />
        );
      })}
    </div>
  );
};
