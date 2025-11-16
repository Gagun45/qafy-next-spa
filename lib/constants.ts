import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import type { Contact, LINK } from "./types";
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

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
