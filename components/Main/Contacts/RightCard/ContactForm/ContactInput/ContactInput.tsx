import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ContactFormType } from "@/lib/zod-schemas";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

const ContactInput = () => {
  const { control } = useFormContext<ContactFormType>();
  const t = useTranslations("Contacts.FormFields.contact");
  const label = t("label");
  const placeholder = t("placeholder");
  return (
    <FormField
      control={control}
      name="contact"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default ContactInput;
