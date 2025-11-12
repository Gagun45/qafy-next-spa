import { motion } from "framer-motion";
import ContactsContainer from "./ContactsContainer/ContactsContainer";
import { useTranslations } from "next-intl";

const LeftCard = () => {
  const t = useTranslations("Contacts.LeftCard");
  const title = t("title");
  const subtitle = t("subtitle");
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center"
    >
      <h2>{title}</h2>
      <p className="sectionSubtitle">{subtitle}</p>

      <ContactsContainer />
    </motion.div>
  );
};
export default LeftCard;
