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
      className="w-fit text-left"
    >
      <a
        href={contact.href}
        target="_blank"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-3 py-2.5 text-sm text-white/90 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
        aria-label={`${contact.label} link`}
      >
        <contact.icon className={`${resIconColor} size-5 transition-transform group-hover:scale-110`} /> {contact.label}
      </a>
    </li>
  );
};
export default ContactCard;
