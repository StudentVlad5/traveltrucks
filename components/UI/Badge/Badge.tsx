import Image from "next/image";

export const Badge = ({
  icon: Icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-ghost rounded-full text-main text-xs md:text-sm font-medium capitalize shrink-0">
    <Image src={Icon} alt={label} className="w-4 h-4 md:w-5 md:h-5" />
    {label}
  </div>
);
