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
    title: "Smartphone Repair",
    desc: "Screens, cameras, charging ports, and more. We fix all major brands.",
  },
  {
    icon: <FaLaptop className="text-4xl mb-4" />,
    title: "Laptop & PC Repair",
    desc: "Hardware and software diagnostics, upgrades, and cleaning.",
  },
  {
    icon: <FaBatteryHalf className="text-4xl mb-4" />,
    title: "Battery Replacement",
    desc: "Fast and reliable replacements with high-quality batteries.",
  },
  {
    icon: <FaDatabase className="text-4xl mb-4" />,
    title: "Data Recovery",
    desc: "Recover your lost data safely and securely from any device.",
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
};
export default ServicesGrid;
