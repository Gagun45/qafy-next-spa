import type { Review } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

interface Props {
  review: Review;
  index: number;
}

const TestimonialCard = ({ review, index }: Props) => {
  const {
    authorAttribution,
    rating,
    relativePublishTimeDescription,
    originalText,
  } = review;
  const text = originalText?.text;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true, margin: "100px" }}
      className="surfaceCard group relative h-full overflow-hidden p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 md:p-8"
    >
      <Quote className="absolute right-6 top-6 size-12 text-primary/10 transition-transform group-hover:scale-110" />
      <div className="mb-6 flex items-center justify-between gap-4 pr-10">
        <div className="flex items-center gap-2">
          {authorAttribution?.photoUri && (
            <Image
              src={authorAttribution.photoUri}
              alt={authorAttribution.displayName}
              width={80}
              height={80}
              className="size-11 rounded-full border-2 border-background object-cover shadow-md"
            />
          )}
          <strong className="text-sm font-semibold tracking-[-0.01em] text-foreground">
            {authorAttribution.displayName}
          </strong>
        </div>
        <span className="numeric flex items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-1 text-sm font-bold text-amber-500">
          <Star className="size-3.5 fill-current" /> {rating}
        </span>
      </div>

      {text && (
        <p className="mb-6 text-sm leading-7 text-foreground/85 md:text-base">{text}</p>
      )}
      <p className="mt-auto border-t border-border/70 pt-4 text-right text-xs italic">
        {relativePublishTimeDescription}
      </p>
    </motion.div>
  );
};
export default TestimonialCard;
