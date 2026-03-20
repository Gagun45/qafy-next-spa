import { PriceItem } from "@/lib/types";

interface Props {
  item: PriceItem;
}

const PriceRow = ({ item: { label, price } }: Props) => {
  return (
    <div className="flex justify-between pb-1 sm:pl-2 border-b border-muted-foreground">
      <span>{label}</span>
      <span className="font-medium">{price}</span>
    </div>
  );
};

export default PriceRow;
