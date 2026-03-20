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
  const t = useTranslations("Home.HomeCTA");
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          className: "ctaBtn",
          variant: "secondary",
        })}
      >
        {t("secondaryCTA")}
      </SheetTrigger>
      <SheetContent className="bg-accent">
        <SheetHeader>
          <SheetTitle>Service Pricing</SheetTitle>
          <SheetDescription className="font-medium">
            Prices listed exclude parts and may vary depending on the device.
          </SheetDescription>
        </SheetHeader>
        <PricesAccordion />
      </SheetContent>
    </Sheet>
  );
};

export default Prices;
