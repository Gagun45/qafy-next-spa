import type { JSX } from "react";
import type { IconType } from "react-icons";

export interface Service {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface Reason {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface LINK {
  href: string;
  label: string;
}

export interface Contact {
  href: string;
  icon: IconType;
  label: string;
}
