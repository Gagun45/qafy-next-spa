import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ContactFormType } from "@/lib/zod-schemas";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

const NameInput = () => {
  const { control } = useFormContext<ContactFormType>();
  const t = useTranslations("Contacts.ContactForm.FormFields.name");
  const label = t("label");
  const placeholder = t("placeholder");
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input required placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
export default NameInput;
