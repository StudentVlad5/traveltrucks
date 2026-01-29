export const DetailRow = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex justify-between font-medium">
    <span className="text-main">{label}</span>
    <span className="text-main capitalize">{value}</span>
  </div>
);
