import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import type { Contact, LINK, PriceCategory } from "./types";
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  Apple,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Wrench,
} from "lucide-react";

export const LINKS: LINK[] = [
  { href: "home", label: "Home" },
  { href: "services", label: "Services" },
  { href: "whyus", label: "Why us" },
  { href: "testimonials", label: "Testimonials" },
  { href: "contacts", label: "Contacts" },
];

export const CONTACTS_SOCIAL: Contact[] = [
  {
    href: "tg://resolve?domain=Qafy_mobile",
    icon: FaTelegram,
    label: "Telegram",
  },
  {
    href: "https://www.instagram.com/qafy.mobile",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://wa.me/+4915140164020",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export const CONTACTS_GENERAL: Contact[] = [
  {
    href: "tel:+4915140164020",
    icon: FaPhone,
    label: "+49 1514 0164020",
  },
  {
    href: "mailto:qafy42@gmail.com",
    icon: MdMail,
    label: "qafy42@gmail.com",
  },
  {
    href: "https://maps.app.goo.gl/oPaqjkQNkuh8KHMo8?g_st=atm",
    icon: FaMapMarkerAlt,
    label: "Waldstraße 37, Sinzing, Deutschland",
  },
];

export const PRICING: PriceCategory[] = [
  {
    label: "Smartphones",
    icon: Smartphone,
    items: [
      { label: "Diagnostics", price: "20 €" },
      { label: "Diagnostics with further repair", price: "Free" },
      { label: "Screen replacement", price: "from 40 €" },
      { label: "Battery replacement", price: "from 30 €" },
      { label: "Back cover replacement", price: "from 20 €" },
      { label: "Charging port replacement", price: "from 40 €" },
      { label: "Speaker / microphone replacement", price: "from 30 €" },
      { label: "Earpiece (call speaker) replacement", price: "from 35 €" },
      { label: "Camera replacement", price: "from 30 €" },
      { label: "Buttons / flex cable replacement", price: "from 30 €" },
      { label: "Liquid damage cleaning", price: "from 50 €" },
      { label: "Water damage repair", price: "from 70 €" },
      { label: "Soldering / component-level board repair", price: "from 60 €" },
      { label: "Advanced board repair", price: "from 90 €" },
      { label: "Data transfer", price: "from 20 €" },
      { label: "Software update / flashing / recovery", price: "from 30 €" },
      { label: "Reset, setup, troubleshooting", price: "from 20 €" },
    ],
  },
  {
    label: "iPhone",
    icon: Apple,
    items: [
      { label: "Diagnostics", price: "from 30 €" },
      { label: "Battery replacement", price: "from 60 €" },
      { label: "Screen replacement", price: "from 70 €" },
      { label: "Back glass / housing replacement", price: "from 100 €" },
      { label: "Flex cables, camera, speaker replacement", price: "from 40 €" },
      { label: "Water damage cleaning", price: "from 50 €" },
      { label: "Board repair / soldering", price: "from 70 €" },
    ],
  },
  {
    label: "Tablets",
    icon: Tablet,
    items: [
      { label: "Diagnostics", price: "20 €" },
      { label: "Screen / touchscreen replacement", price: "from 40 €" },
      { label: "Battery replacement", price: "from 40 €" },
      { label: "Charging port replacement", price: "from 40 €" },
      { label: "Software flashing / recovery", price: "from 30 €" },
    ],
  },
  {
    label: "Laptops",
    icon: Laptop,
    items: [
      { label: "Diagnostics", price: "20 €" },
      { label: "Cooling system cleaning", price: "from 30 €" },
      { label: "Keyboard replacement", price: "from 50 €" },
      { label: "Screen replacement", price: "from 50 €" },
      { label: "Power connector replacement", price: "from 50 €" },
      { label: "SSD / HDD replacement", price: "from 20 €" },
      { label: "RAM installation / upgrade", price: "from 20 €" },
      { label: "Windows installation", price: "from 20 €" },
      { label: "BIOS recovery", price: "from 50 €" },
      { label: "Motherboard repair / soldering", price: "from 70 €" },
    ],
  },
  {
    label: "PC",
    icon: Monitor,
    items: [
      { label: "Diagnostics", price: "20 €" },
      { label: "Dust cleaning", price: "from 40 €" },
      { label: "PC assembly", price: "from 50 €" },
      { label: "Hardware upgrade", price: "from 20 €" },
      { label: "Windows and driver installation", price: "from 20 €" },
    ],
  },
  {
    label: "Additional Services",
    icon: Wrench,
    items: [
      { label: "Urgent repair", price: "+10–20 €" },
      { label: "On-site service", price: "from 20 € (free in Regensburg)" },
      { label: "Consultation without repair", price: "from 10 €" },
    ],
  },
];
