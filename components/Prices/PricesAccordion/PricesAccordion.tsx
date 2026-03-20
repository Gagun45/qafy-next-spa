import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PRICING } from "@/lib/constants";
import PriceRow from "./PriceRow/PriceRow";

const PricesAccordion = () => {
  return (
    <div className="mt-6 flex-1 overflow-y-auto p-2">
      <Accordion type="multiple" className="space-y-2 pb-2">
        {PRICING.map((category) => {
          return (
            <AccordionItem
              key={category.label}
              value={category.label}
              className="border-2 border-foreground last:border-b rounded-lg"
            >
              <AccordionTrigger className="flex items-center justify-center gap-3 p-3 text-lg font-medium cursor-pointer">
                {category.label}
              </AccordionTrigger>

              <AccordionContent className="px-4 py-2 space-y-2 text-sm">
                {category.items.map((item) => (
                  <PriceRow key={item.label} item={item} />
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
