import type { Contact } from "@/lib/types";

interface Props {
  contact: Contact;
  iconColor?: string;
}

const ContactCard = ({ contact, iconColor }: Props) => {
  const resIconColor = iconColor ? iconColor : "text-primary";
  return (
    <li
      key={contact.label}
      className="w-fit text-left hover:underline underline-offset-2"
    >
      <a
        href={contact.href}
        target="_blank"
        className="flex items-center gap-2"
        aria-label={`${contact.label} link`}
      >
        <contact.icon className={`${resIconColor} size-6`} /> {contact.label}
      </a>
    </li>
  );
};
export default ContactCard;
