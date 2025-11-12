import {
  FaMobileAlt,
  FaLaptop,
  FaBatteryHalf,
  FaDatabase,
} from "react-icons/fa";
import type { Service } from "@/lib/types";
import ServiceCard from "./ServiceCard/ServiceCard";

const services: Service[] = [
  {
    icon: <FaMobileAlt className="text-4xl mb-4" />,
    transKey: "phone",
  },
  {
    icon: <FaLaptop className="text-4xl mb-4" />,
    transKey: "laptop",
  },
  {
    icon: <FaBatteryHalf className="text-4xl mb-4" />,
    transKey: "battery",
  },
  {
    icon: <FaDatabase className="text-4xl mb-4" />,
    transKey: "data",
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.transKey} service={service} index={index} />
      ))}
    </div>
  );
};
export default ServicesGrid;
