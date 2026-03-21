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
    key: "smartphones",
    icon: Smartphone,
    items: [
      { key: "diagnostics", price: 20 },
      { key: "diagnostics_with_repair", price: 0 },
      { key: "screen_replacement", price: 40, from: true },
      { key: "battery_replacement", price: 30, from: true },
      { key: "back_cover_replacement", price: 20, from: true },
      { key: "charging_port_replacement", price: 40, from: true },
      { key: "speaker_microphone_replacement", price: 30, from: true },
      { key: "earpiece_replacement", price: 35, from: true },
      { key: "camera_replacement", price: 30, from: true },
      { key: "buttons_flex_replacement", price: 30, from: true },
      { key: "liquid_damage_cleaning", price: 50, from: true },
      { key: "water_damage_repair", price: 70, from: true },
      { key: "soldering_board_repair", price: 60, from: true },
      { key: "advanced_board_repair", price: 90, from: true },
      { key: "data_transfer", price: 20, from: true },
      { key: "software_update", price: 30, from: true },
      { key: "reset_setup", price: 20, from: true },
    ],
  },
  {
    key: "iphone",
    icon: Apple,
    items: [
      { key: "diagnostics", price: 30, from: true },
      { key: "battery_replacement", price: 60, from: true },
      { key: "screen_replacement", price: 70, from: true },
      { key: "back_glass_replacement", price: 100, from: true },
      { key: "flex_camera_speaker_replacement", price: 40, from: true },
      { key: "water_damage_repair", price: 50, from: true },
      { key: "board_repair", price: 70, from: true },
    ],
  },
  {
    key: "tablets",
    icon: Tablet,
    items: [
      { key: "diagnostics", price: 20 },
      { key: "screen_replacement", price: 40, from: true },
      { key: "battery_replacement", price: 40, from: true },
      { key: "charging_port_replacement", price: 40, from: true },
      { key: "software_recovery", price: 30, from: true },
    ],
  },
  {
    key: "laptops",
    icon: Laptop,
    items: [
      { key: "diagnostics", price: 20 },
      { key: "cooling_cleaning", price: 30, from: true },
      { key: "keyboard_replacement", price: 50, from: true },
      { key: "screen_replacement", price: 50, from: true },
      { key: "power_connector_replacement", price: 50, from: true },
      { key: "storage_replacement", price: 20, from: true },
      { key: "ram_upgrade", price: 20, from: true },
      { key: "windows_installation", price: 20, from: true },
      { key: "bios_recovery", price: 50, from: true },
      { key: "motherboard_repair", price: 70, from: true },
    ],
  },
  {
    key: "pc",
    icon: Monitor,
    items: [
      { key: "diagnostics", price: 20 },
      { key: "dust_cleaning", price: 40, from: true },
      { key: "pc_assembly", price: 50, from: true },
      { key: "hardware_upgrade", price: 20, from: true },
      { key: "windows_driver_installation", price: 20, from: true },
    ],
  },
  {
    key: "additional_services",
    icon: Wrench,
    items: [
      // ⚠️ special case → leave as fixed numbers (you can improve later if needed)
      { key: "urgent_repair", price: 10, from: true }, // was +10–20€
      { key: "on_site_service", price: 20, from: true }, // "(free in Regensburg)" → move to translation later if needed
      { key: "consultation", price: 10, from: true },
    ],
  },
];
