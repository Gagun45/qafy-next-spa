import type { Reason } from "@/lib/types";
import { FaShieldAlt, FaClock, FaMedal, FaTools } from "react-icons/fa";
import ReasonCard from "./ReasonCard/ReasonCard";

const features: Reason[] = [
  {
    icon: <FaShieldAlt className="size-6" />,
    transKey: "warranty",
  },
  {
    icon: <FaClock className="size-6" />,
    transKey: "fast",
  },
  {
    icon: <FaMedal className="size-6" />,
    transKey: "certified",
  },
  {
    icon: <FaTools className="size-6" />,
    transKey: "quality",
  },
];

const ReasonsGrid = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      {features.map((feature, index) => (
        <ReasonCard key={feature.transKey} feature={feature} index={index} />
      ))}
    </div>
  );
};
export default ReasonsGrid;
