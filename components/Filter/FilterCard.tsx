import { FilterCardProps } from "@/types/filters";
import Image from "next/image";

export const FilterCard = ({
  label,
  icon: Icon,
  isActive,
  onClick,
}: FilterCardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center gap-2 
        w-[112px] h-[95px] rounded-[10px] border transition-all cursor-pointer
        ${
          isActive
            ? "border-accent-red"
            : "border-gray-light hover:border-gray-medium"
        }
      `}
    >
      <Image
        src={Icon}
        loading="lazy"
        alt={label}
        className="w-8 h-8 text-main"
      />
      <span className="text-base font-medium leading-[1.25] text-main text-center px-1">
        {label}
      </span>
    </button>
  );
};
