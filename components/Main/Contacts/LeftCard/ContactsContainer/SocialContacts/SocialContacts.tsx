import { CONTACTS_SOCIAL } from "@/lib/constants";
import ContactCard from "../ContactCard/ContactCard";

const SocialContacts = () => {
  return (
    <ul className="flex gap-6 flex-wrap flex-col md:flex-row">
      {CONTACTS_SOCIAL.map((contact) => (
        <ContactCard
          key={contact.label}
          contact={contact}
          iconColor={`text-${contact.label.toLowerCase()}`}
        />
      ))}
    </ul>
  );
};
export default SocialContacts;
