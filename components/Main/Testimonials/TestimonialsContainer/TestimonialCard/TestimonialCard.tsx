import type { Review } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="bg-accent h-fit rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between flex-wrap mb-2">
        <div className="flex items-center gap-2">
          {authorAttribution?.photoUri && (
            <Image
              src={authorAttribution.photoUri}
              alt={authorAttribution.displayName}
              width={80}
              height={80}
              className="w-10 h-10 rounded-full"
            />
          )}
          <strong className="text-primary">
            {authorAttribution.displayName}
          </strong>
        </div>
        <span className="text-yellow-500">⭐ {rating}</span>
      </div>

      {text && (
        <p className="text-sm text-justify text-foreground mb-1">{text}</p>
      )}
      <p className="text-xs text-right">
        {relativePublishTimeDescription}
      </p>
    </motion.div>
  );
};
export default TestimonialCard;
