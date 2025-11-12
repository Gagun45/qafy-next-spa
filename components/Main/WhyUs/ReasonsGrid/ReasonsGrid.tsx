import type { Reason } from "@/lib/types";
import { FaShieldAlt, FaClock, FaMedal, FaTools } from "react-icons/fa";
import ReasonCard from "./ReasonCard/ReasonCard";

const features: Reason[] = [
  {
    icon: <FaShieldAlt className="text-4xl mb-4" />,
    transKey: "warranty",
  },
  {
    icon: <FaClock className="text-4xl mb-4" />,
    transKey: "fast",
  },
  {
    icon: <FaMedal className="text-4xl mb-4" />,
    transKey: "certified",
  },
  {
    icon: <FaTools className="text-4xl mb-4" />,
    transKey: "quality",
  },
];

const ReasonsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <ReasonCard key={feature.transKey} feature={feature} index={index} />
      ))}
    </div>
  );
};
export default ReasonsGrid;
