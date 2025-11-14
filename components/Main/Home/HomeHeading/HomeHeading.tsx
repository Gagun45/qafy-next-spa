import { useTranslations } from "next-intl";
import Image from "next/image";

const HomeHeading = () => {
  const t = useTranslations("Home.HomeHeading");
  return (
    <>
      <Image
        src="/pngegg_optimized.webp"
        alt="Qafy Mobile Logo"
        className="mb-6 mx-auto"
        priority
        sizes="250px"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl text-center font-bold leading-tight mb-4">
        {t("titleFirst")} <br />
        <span className="text-primary">{t("titleSecond")}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl mb-8 text-center">{t("subtitle")}</p>
    </>
  );
};
export default HomeHeading;
