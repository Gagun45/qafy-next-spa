import type { JSX } from "react";
import type { IconType } from "react-icons";

export interface Service {
  icon: JSX.Element;
  transKey: string;
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

export interface AttachmentInterface {
  filename: string;
  path: string;
}

export interface Review {
  name: string;
  rating: number;
  originalText?: { text: string; languageCode: string };
  relativePublishTimeDescription: string;
  authorAttribution: {
    displayName: string;
    photoUri?: string;
  };
}
