import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeHeading = () => {
  const t = useTranslations('Home.HomeHeading')
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <Image src={'/pngegg.png'} width={250} height={250} alt="home"/>
      </motion.div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl text-center font-bold leading-tight mb-4">
        {t('titleFirst')} <br />
        <span className="text-primary">{t('titleSecond')}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl mb-8 text-center">
        {t('subtitle')}
      </p>
    </>
  );
};
export default HomeHeading;
