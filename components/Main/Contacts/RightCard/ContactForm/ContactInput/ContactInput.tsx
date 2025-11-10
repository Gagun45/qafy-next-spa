import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ContactFormType } from "@/lib/zod-schemas";
import { useFormContext } from "react-hook-form";

const ContactInput = () => {
  const { control } = useFormContext<ContactFormType>();
  return (
    <FormField
      control={control}
      name="contact"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Contact information</FormLabel>
          <FormControl>
            <Input placeholder="WhatsApp, Telegram, email, etc." {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default ContactInput;
