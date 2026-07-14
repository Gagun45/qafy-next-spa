import { PriceItem } from "@/lib/types";
import { useTranslations } from "next-intl";

interface Props {
  item: PriceItem;
}

const PriceRow = ({ item: { key, price, from } }: Props) => {
  const t = useTranslations("Prices");
  const formattedPrice =
    price === 0
      ? t("Formats.Free")
      : `${from ? t("Formats.From") : ""} ${price} €`;
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-border/70 py-2.5 last:border-0">
      <span className="min-w-0 text-left leading-5 text-muted-foreground">{t(`Items.${key}`)}</span>
      <span className="numeric whitespace-nowrap text-right font-bold tracking-[-0.015em] text-foreground">{formattedPrice}</span>
    </div>
  );
};

export default PriceRow;
