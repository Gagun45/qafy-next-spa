import { motion } from "framer-motion";
import ContactsContainer from "./ContactsContainer/ContactsContainer";

const LeftCard = () => {
  return (
    <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2>Get a Free Quote</h2>
          <p className="sectionSubtitle">
            Need a repair or want to know the price? Fill out the form and we’ll
            get back to you shortly.
          </p>

          <ContactsContainer />
        </motion.div>
  )
}
export default LeftCard