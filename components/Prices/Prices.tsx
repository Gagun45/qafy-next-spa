import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "../ui/button";
import { useTranslations } from "next-intl";
import PricesAccordion from "./PricesAccordion/PricesAccordion";

const Prices = () => {
  const buttonTrans = useTranslations("Home.HomeCTA");
  const t = useTranslations("Prices.Sheet");
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          className:
            "ctaBtn bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950",
          variant: "secondary",
        })}
      >
        {buttonTrans("secondaryCTA")}
      </SheetTrigger>
      <SheetContent className="w-full border-border bg-background/95 backdrop-blur-xl sm:max-w-xl">
        <SheetHeader className="border-b border-border p-6 pr-14">
          <SheetTitle className="text-2xl font-bold tracking-tight">
            {t("title")}
          </SheetTitle>
          <SheetDescription className="pt-1 font-medium leading-6">
            {t("desc")}
          </SheetDescription>
        </SheetHeader>
        <PricesAccordion />
      </SheetContent>
    </Sheet>
  );
};

export default Prices;
