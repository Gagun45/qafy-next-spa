import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormType } from "@/lib/zod-schemas";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

const MessageTextarea = () => {
  const { control } = useFormContext<ContactFormType>();
  const t = useTranslations("Contacts.ContactForm.FormFields.message");
  const label = t("label");
  const placeholder = t("placeholder");
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea required placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
export default MessageTextarea;
