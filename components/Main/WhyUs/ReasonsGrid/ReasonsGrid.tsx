import type { Reason } from "@/lib/types";
import { FaShieldAlt, FaClock, FaMedal, FaTools } from "react-icons/fa";
import ReasonCard from "./ReasonCard/ReasonCard";

const features: Reason[] = [
  {
    icon: <FaShieldAlt className="text-4xl mb-4" />,
    title: "Warranty on All Repairs",
    desc: "We stand behind our work. Every repair comes with a warranty for your peace of mind.",
  },
  {
    icon: <FaClock className="text-4xl mb-4" />,
    title: "Fast Turnaround",
    desc: "Most devices are fixed the same day, so you can get back to what matters quickly.",
  },
  {
    icon: <FaMedal className="text-4xl mb-4" />,
    title: "Certified Technicians",
    desc: "Our experts are trained to handle all major brands and models with care and precision.",
  },
  {
    icon: <FaTools className="text-4xl mb-4" />,
    title: "High-Quality Parts",
    desc: "We use only premium components to ensure your device performs like new again.",
  },
];

const ReasonsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <ReasonCard key={feature.title} feature={feature} index={index} />
      ))}
    </div>
  )
}
export default ReasonsGrid