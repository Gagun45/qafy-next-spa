import GeneralContacts from "./GeneralContacts/GeneralContacts";
import SocialContacts from "./SocialContacts/SocialContacts";

const ContactsContainer = () => {
  return (
    <div className="relative flex flex-col gap-8">
      <GeneralContacts />
      <SocialContacts />
    </div>
  );
};
export default ContactsContainer;
