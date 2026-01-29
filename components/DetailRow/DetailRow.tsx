import { motion } from "framer-motion";

export const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <motion.div
    key={label}
    id={`camper-${label}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    className="flex justify-between font-medium"
  >
    <span className="text-main">{label}</span>
    <span className="text-main capitalize">{value}</span>
  </motion.div>
);
