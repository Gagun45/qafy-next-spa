import { CONTACTS_GENERAL } from "@/lib/constants";
import ContactCard from "../ContactCard/ContactCard";

const GeneralContacts = () => {
  return (
    <ul className="space-y-6">
      {CONTACTS_GENERAL.map((contact) => (
        <ContactCard contact={contact} key={contact.label} />
      ))}
    </ul>
  );
};
export default GeneralContacts;
