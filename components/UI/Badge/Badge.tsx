import Image from "next/image";
import { motion } from "framer-motion";

export const Badge = ({
  icon: Icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <motion.div
    key={label}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-badges rounded-full text-main text-xs md:text-sm font-medium capitalize shrink-0"
  >
    <Image src={Icon} alt={label} className="w-4 h-4 md:w-5 md:h-5" />
    {label}
  </motion.div>
);
