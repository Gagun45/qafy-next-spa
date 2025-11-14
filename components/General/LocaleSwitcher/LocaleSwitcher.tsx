"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { DE, GB, UA } from "country-flag-icons/react/3x2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";

const locales = [
  { locale: "de", Component: DE },
  { locale: "uk", Component: UA },
  { locale: "en", Component: GB },
];

const LocaleSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Select
      value={currentLocale}
      onValueChange={(value) => handleLocaleChange(value)}
    >
      <SelectTrigger className="w-fit bg-transparent!" aria-label={'Choose language'}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="w-fit min-w-0">
        {locales.map(({ locale, Component }) => (
          <SelectItem key={locale} value={locale}>
            <Component />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default LocaleSwitcher;
