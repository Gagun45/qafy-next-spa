import SmoothLink from "@/components/General/SmoothLink/SmoothLink";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomeCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <Button className="ctaBtn">Check repair status</Button>
      <SmoothLink
        to="contacts"
        className={buttonVariants({
          className: "ctaBtn",
          variant: "secondary",
        })}
      >
        Get a Free Quote
      </SmoothLink>
      {/* <WidgetTrigger className="bg-primary hover:bg-primary/95 ctaBtn" />

      <SmoothLink
        to="contact"
        className={`${buttonVariants()} bg-foreground! text-background! ctaBtn`}
      >
        Get a Free Quote
      </SmoothLink> */}
    </motion.div>
  );
};
export default HomeCTA;
