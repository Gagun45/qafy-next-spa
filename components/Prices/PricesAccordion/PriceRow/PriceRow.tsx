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
    <div className="flex justify-between pb-1 sm:pl-2 border-b border-muted-foreground">
      <span>{t(`Items.${key}`)}</span>
      <span className="font-medium">{formattedPrice}</span>
    </div>
  );
};

export default PriceRow;
