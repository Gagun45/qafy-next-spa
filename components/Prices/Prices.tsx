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
          className: "ctaBtn",
          variant: "secondary",
        })}
      >
        {buttonTrans("secondaryCTA")}
      </SheetTrigger>
      <SheetContent className="bg-accent">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
          <SheetDescription className="font-medium">
            {t("desc")}
          </SheetDescription>
        </SheetHeader>
        <PricesAccordion />
      </SheetContent>
    </Sheet>
  );
};

export default Prices;
