import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-center"
    >
      <Button className="ctaBtn">Check repair status</Button>
      <Button className="ctaBtn" variant={'secondary'}>
        Get a Free Quote
      </Button>
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
export default HeroCTA;
