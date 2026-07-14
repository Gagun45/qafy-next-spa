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
    icon: <FaMobileAlt className="size-7" />,
    transKey: "phone",
  },
  {
    icon: <FaLaptop className="size-7" />,
    transKey: "laptop",
  },
  {
    icon: <FaBatteryHalf className="size-7" />,
    transKey: "battery",
  },
  {
    icon: <FaDatabase className="size-7" />,
    transKey: "data",
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={service.transKey} service={service} index={index} />
      ))}
    </div>
  );
};
export default ServicesGrid;
