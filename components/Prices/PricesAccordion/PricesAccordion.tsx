import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PRICING } from "@/lib/constants";
import PriceRow from "./PriceRow/PriceRow";
import { useTranslations } from "next-intl";

const PricesAccordion = () => {
  const t = useTranslations("Prices.Categories");
  return (
    <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
      <Accordion type="multiple" className="space-y-3 pb-2">
        {PRICING.map((category) => {
          return (
            <AccordionItem
              key={category.key}
              value={category.key}
              className="overflow-hidden rounded-2xl border border-border bg-card/70 px-1 shadow-sm last:border-b"
            >
              <AccordionTrigger className="cursor-pointer gap-3 px-4 py-4 text-left text-base font-bold hover:no-underline">
                {t(category.key)}
              </AccordionTrigger>

              <AccordionContent className="space-y-1 px-4 pb-4 text-sm">
                {category.items.map((item) => (
                  <PriceRow key={item.key} item={item} />
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default PricesAccordion;
