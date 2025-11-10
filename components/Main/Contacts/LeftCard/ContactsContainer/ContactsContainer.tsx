import GeneralContacts from "./GeneralContacts/GeneralContacts";
import SocialContacts from "./SocialContacts/SocialContacts";

const ContactsContainer = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row md:flex-col justify-evenly">
      <GeneralContacts />
      <SocialContacts />
    </div>
  );
};
export default ContactsContainer;
