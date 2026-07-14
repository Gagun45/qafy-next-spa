import { useTranslations } from "next-intl";

const HomeHeading = () => {
  const t = useTranslations("Home.HomeHeading");
  return (
    <>
      <h1 className="displayTitle mb-6 max-w-3xl text-left text-5xl leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
        {t("titleFirst")}{" "}
        <span className="bg-linear-to-r from-blue-300 to-primary bg-clip-text text-transparent">
          {t("titleSecond")}
        </span>
      </h1>
      <p className="mb-10 max-w-2xl text-left text-lg leading-[1.65] tracking-[-0.01em] text-slate-300 sm:text-xl">
        {t("subtitle")}
      </p>
    </>
  );
};
export default HomeHeading;
