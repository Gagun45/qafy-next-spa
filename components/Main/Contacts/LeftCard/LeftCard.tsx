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
      className="relative overflow-hidden rounded-[1.35rem] bg-[#071b3b] p-7 text-left text-white md:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/25 blur-3xl" />
      <h2 className="relative text-white">{title}</h2>
      <p className="relative mb-10 max-w-xl leading-7 text-blue-100/70">{subtitle}</p>

      <ContactsContainer />
    </motion.div>
  );
};
export default LeftCard;
